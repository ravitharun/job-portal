const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jobWebsite', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log("MongoDB Connection Error:", err));

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    confirm_password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;