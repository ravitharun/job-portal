var express = require('express');
var router = express.Router();
var User = require('../bin/Database.js');
var cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
require('dotenv').config();




router.use(cors());



// middleware for login the user checking 
const Validate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token
    if (!token) return res.status(401).json({ message: 'Token is missing' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded data to the request
        next(); // Proceed to the next route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }


}

/* GET home page. */
router.post("/Job/New/user", async (req, res) => {
    try {
        // getting data from the frontend 
        const { Newuser } = req.body;
        // validating the data if data is in emptyFormat
        if (!Newuser.name && !Newuser.email && !Newuser.password && !Newuser.confirm_password) {
            res.json({ message: "Fill the required Details!." })
        }
        // Checking the Password and Confirm Password
        else if (Newuser.password != Newuser.confirm_password) {
            res.json({ message: "Password are not same " })
        }
        // adding the data of new user to database
        else {
            // password hashing for security purpose
            const saltRounds = 10;
            const plainPassword = Newuser.password;
            const ConfirmplainPassword = Newuser.confirm_password;
            const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
            const ConfirmhashedPassword = await bcrypt.hash(ConfirmplainPassword, saltRounds);

            // adding new user in database
            const Adduser = await User({
                name: Newuser.name,
                email: Newuser.email,
                password: hashedPassword,
                confirm_password: ConfirmhashedPassword,
            })
            await Adduser.save();


            const token = jwt.sign(
                { userId: Adduser._id, email: Adduser.email }, // Payload
                process.env.JWT_SECRET, // Secret key for signing
                { expiresIn: "1h" } // Token expiration (optional)
            );
            // sending the token to the Frontend 
            res.json({ token });
        }
    }
    catch (err) {
        console.log(err)
        res.json({ message: err })
    }

})
// login checking the user details;

router.post("/Job/Login", async (req, res) => {

    try {
        const { data } = req.body;
        if (!data.email && !data.password) {
            res.json({ message: "Fill The Details." });
            return;
        }

        const check_User = await User.findOne({ email: data.email });
        const Check = await bcrypt.compare(data.password, check_User.password);
        if (Check == true) {
            const token = jwt.sign({ id: check_User._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.json({ message: token });

        }
        else {
            res.json({ message: "Not Valid Cretdial's" });

        }

    } catch (error) {
        console.log(error)
    }
})


// checking the  middleware function in that ese route
router.get("/Job/Auth", Validate, (req, res) => {
    res.json({message:"authinticsted"})

})


module.exports = router;
