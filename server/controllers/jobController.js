const Job = require("../models/jobSchema");

const jobPost = async (req, res) => {
  try {
    const {
      title,
      companyId,
      location,
      description,
      requirements,
      employmentType,
      industry,
      experienceLevel,
      salaryMin,
      salaryMax,
      skills,
      applicationDeadline,
      postedDate,
      contactEmail,
    } = req.body;
    if (
      !title ||
      !location ||
      !description ||
      !requirements ||
      !employmentType ||
      !industry ||
      !experienceLevel ||
      !salaryMin ||
      !salaryMax ||
      !skills ||
      !applicationDeadline ||
      !postedDate ||
      !contactEmail
    ) {
      throw new Error("All fields are rquired!");
    }

    const job = await Job.create({
      title,
      company: companyId,
      location,
      description,
      requirements,
      employmentType,
      industry,
      experienceLevel,
      salary: {
        min: salaryMin,
        max: salaryMax,
      },
      skills,
      applicationDeadline,
      postedBy: req.id,
      postedDate,
      contactEmail,
    });
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// search Jobs
const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { location: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      throw new Error("Job not Found!");
    }
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// get job by id
const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId);
    if (!job) {
      throw new Error("Job not Found!");
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// get admin posted jobs
const getAdminJobs = async (req, res) => {
    
  try {
    const adminId = req.id;
    if (!adminId) {
      throw new Error("Id invalid")
    }
    const jobs = await Job.find({ postedBy: adminId });
    if (!jobs) {
      throw new Error("Job not Found!");
    }
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  jobPost,
  getAllJobs,
  getJobById,
  getAdminJobs,
};
