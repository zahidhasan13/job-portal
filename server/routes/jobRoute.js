const express = require("express");
const isAuthorized = require("../middleware/isAuthorized");
const { jobPost, getJobById, getAllJobs, getAdminJobs } = require("../controllers/jobController");

const router = express.Router();

router.post("/",isAuthorized,jobPost)
router.get("/",isAuthorized,getAllJobs)
router.get("/adminJobs",isAuthorized,getAdminJobs)
router.get("/:id",isAuthorized,getJobById)

module.exports = router;
