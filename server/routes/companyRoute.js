const express = require("express");
const isAuthorized = require("../middleware/isAuthorized");
const { getCompanies, gestSingleCompany, registerCompany, updateCompany } = require("../controllers/companyController");

const router = express.Router();


router.get("/", isAuthorized, getCompanies)
router.get("/:id", isAuthorized, gestSingleCompany)
router.post("/register", isAuthorized, registerCompany)
router.patch("/update/:id", isAuthorized, updateCompany)



module.exports = router;