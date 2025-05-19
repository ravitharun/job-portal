const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/jobWebsite', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Connection Error:", err));

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirm_password: { type: String, required: true },
  role: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const JobsSchema = new mongoose.Schema({
  company_name: { type: String },
  role: { type: String },
  salary: { type: String },
  experience: { type: String },
  eduction: { type: String },
  tech_stack: { type: [String] },
  tools: { type: [String] },
  img_url: { type: String },
  location: { type: String },
  company_size: { type: String },
  total_applications_applied: { type: Number },
  job_type: { type: String },
  job_category: { type: String },
  job_benefits: { type: [String] },
  required_skills: { type: [String] },
  job_perks: { type: [String] },
  company_culture: { type: String },
  application_deadline: { type: Date },
  interview_process: { type: [String] },
  location_type: { type: String },
  company_awards: { type: [String] },
  salary_type: { type: String },
  diversity_inclusion: { type: String },
  job_location: { type: String },
  company_website: { type: String },
  company_linkedin: { type: String },
  job_posting_date: { type: Date },
  contact_person: { type: String },
  employment_type: { type: String },
  job_ref_number: { type: String },
  relocation_assistance: { type: String },
});

const SavedJobsSchema = new mongoose.Schema({
  company_name: { type: String },
  role: { type: String },
  salary: { type: String },
  experience: { type: String },
  eduction: { type: String },
  tech_stack: { type: [String] },
  tools: { type: [String] },
  img_url: { type: String },
  location: { type: String },
  company_size: { type: String },
  total_applications_applied: { type: Number },
  job_type: { type: String },
  job_category: { type: String },
  job_benefits: { type: [String] },
  required_skills: { type: [String] },
  job_perks: { type: [String] },
  company_culture: { type: String },
  application_deadline: { type: Date },
  interview_process: { type: [String] },
  location_type: { type: String },
  company_awards: { type: [String] },
  salary_type: { type: String },
  diversity_inclusion: { type: String },
  job_location: { type: String },
  company_website: { type: String },
  company_linkedin: { type: String },
  job_posting_date: { type: Date },
  contact_person: { type: String },
  employment_type: { type: String },
  job_ref_number: { type: String },
  relocation_assistance: { type: String },
  email: { type: String }
});
const User = mongoose.model('User', UserSchema);
const JobData = mongoose.model('JobsSchema', JobsSchema);
const SaveJob = mongoose.model('savedJob', SavedJobsSchema);
module.exports = { User, JobData, SaveJob };