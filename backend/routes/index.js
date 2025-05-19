var express = require('express');
var router = express.Router();
const { User, JobData, SaveJob } = require('../bin/Database.js');
var Data = require('../data.json');
var cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

require('dotenv').config();

router.use(cors());
router.use(express.json());

// middleware for login the user checking 
const Validate = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token
    if (!token) return res.status(401).json({ message: 'Token is missing' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded data to the request
        next(); // Proceed to the next route handler
    } catch (error) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        return res.status(401).json({ message: 'Invalid token' });
    }


}

/* GET home page. */
router.post("/Job/New/user", async (req, res) => {
    try {
        // getting data from the frontend 
        const { Newuser } = req.body;
        console.log(Newuser)
        // validating the data if data is in emptyFormat
        if (!Newuser.name && !Newuser.email && !Newuser.password && !Newuser.confirm_password && !Newuser.Role) {
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
                role: Newuser.role
            })
            await Adduser.save();

            console.log('Adduser', Adduser)


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
        if (!data.email && !data.password && !data.role) {
            res.json({ message: "Fill The Details." });
            return;
        }
        const check_User = await User.findOne({ email: data.email, role: data.role });
        const Check = await bcrypt.compare(data.password, check_User.password);

        if (check_User == data && Check == true) {

            res.json({ Alert: "Check the Details" });
        }

        else {

            const token = jwt.sign({ id: check_User._id }, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.json({ message: token });
        }


    } catch (error) {
        console.log(error)
    }
})


// checking the  middleware function in that ese route
router.get("/Job/Auth", async (req, res) => {
    try {
        // Your logic here
    } catch (err) {
        console.error("Error in /Job/Auth:", err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});

// insert the job data into database
router.get("/JobData", async (req, res) => {
    try {
        for (const data of Data) {
            // Check if job with this reference already exists
            const existingJob = await JobData.findOne({ job_ref_number: data.job_ref_number });
            if (existingJob) {
                console.log(`Job with ref ${data.job_ref_number} already exists. Skipping.`);
                continue;  // Skip duplicate
            }

            const job = new JobData({
                company_name: data.company_name,
                role: data.role,
                salary: data.salary,
                experience: data.experience,
                eduction: data.eduction,
                tech_stack: data.tech_stack,
                tools: data.tools,
                img_url: data.img_url,
                location: data.location,
                company_size: data.company_size,
                total_applications_applied: data.total_applications_applied,
                job_type: data.job_type,
                job_category: data.job_category,
                job_benefits: data.job_benefits,
                required_skills: data.required_skills,
                job_perks: data.job_perks,
                company_culture: data.company_culture,
                application_deadline: data.application_deadline,
                interview_process: data.interview_process,
                location_type: data.location_type,
                company_awards: data.company_awards,
                salary_type: data.salary_type,
                diversity_inclusion: data.diversity_inclusion,
                job_location: data.job_location,
                company_website: data.company_website,
                company_linkedin: data.company_linkedin,
                job_posting_date: data.job_posting_date,
                contact_person: data.contact_person,
                employment_type: data.employment_type,
                job_ref_number: data.job_ref_number,
                relocation_assistance: data.relocation_assistance,
            });

            await job.save();
            console.log("Saved:", job.company_name);
        }

        res.status(201).json({ message: "Job data inserted (new only)." });
    } catch (err) {
        console.error("Error inserting jobs:", err);
        res.status(500).json({ error: "Internal server error" });
    }

});

// get all Job from dataBase
router.get("/jobAll", async (req, res) => {
    try {

        const response = await JobData.find({})
        res.json({ message: response })
    } catch (error) {
        res.json({ message: error })
    }
})

// get data based on the id

router.get("/job/:id", async (req, res) => {
    const { id } = req.params;
    try {
        if (id === "all") {
            const jobs = await SaveJob.find({});
            return res.json(jobs);
        }

        const job = await SaveJob.findById(id); // only if it's a real ObjectId
        res.json({ message: job });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});


// saving the job into dat base

router.post("/Job/saved", async (req, res) => {
    try {
        const { DataJOb, email } = req.body;
        const Data = DataJOb
        const check_saved = await SaveJob.findOne({ company_name: Data.company_name })
        console.log("check_saved", check_saved)
        if (check_saved) {
            res.json({ Alertmessage: `The Job Is Already saved` })
        }
        else {

            const job = new SaveJob({
                company_name: Data.company_name,
                role: Data.role,
                salary: Data.salary,
                experience: Data.experience,
                eduction: Data.eduction,
                tech_stack: Data.tech_stack,
                tools: Data.tools,
                img_url: Data.img_url,
                location: Data.location,
                company_size: Data.company_size,
                total_applications_applied: Data.total_applications_applied,
                job_type: Data.job_type,
                job_category: Data.job_category,
                job_benefits: Data.job_benefits,
                required_skills: Data.required_skills,
                job_perks: Data.job_perks,
                company_culture: Data.company_culture,
                application_deadline: Data.application_deadline,
                interview_process: Data.interview_process,
                location_type: Data.location_type,
                company_awards: Data.company_awards,
                salary_type: Data.salary_type,
                diversity_inclusion: Data.diversity_inclusion,
                job_location: Data.job_location,
                company_website: Data.company_website,
                company_linkedin: Data.company_linkedin,
                job_posting_date: Data.job_posting_date,
                contact_person: Data.contact_person,
                employment_type: Data.employment_type,
                job_ref_number: Data.job_ref_number,
                relocation_assistance: Data.relocation_assistance,
                email: email
            });

            await job.save();
            res.json({ message: "Job Is Saved. " })
        }

    }
    catch (err) {
        res.json({ Errormessage: err })

    }

})



router.get("/job/all", async (req, res) => {
    const { email } = req.query;
    console.log(email)
    try {
        const jobs = await SaveJob.find({ email: email });
        console.log(jobs)
        res.json({ message: jobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// reoving based on the id
router.get("/job/Remove/:id", async (req, res) => {
    try {
        const { id } = req.params
        const existing = await SaveJob.findById(id);
        if (!existing) {
            return res.json({ message: "Saved job not found." });
        }

        await SaveJob.deleteOne({ _id: id });
        res.json({ message: "Job deleted successfully." });
    } catch (error) {
        console.log("error", error)
    }
})

module.exports = router;
