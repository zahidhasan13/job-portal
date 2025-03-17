const Company = require("../models/companySchema");

const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      throw new Error("Company name rquired!");
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      throw new Error("This Company Already Registerd!");
    }

    company = await Company.create({
      name: companyName,
      createdBy: req.id,
    });
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Company
const getCompanies = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ createdBy: userId });
    if (!companies) {
      throw new Error("No companies Found!");
    }
    res.status(200).json(companies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Single Company
const gestSingleCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      throw new Error("No company Found!");
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update Company
const updateCompany = async (req, res) => {
  try {
    const companyId = req.params.id;
    const {
      name,
      description,
      industry,
      companySize,
      foundedYear,
      website,
      contactEmail,
      contactPhone,
    } = req.body;
    const file = req.file;

    const update = {
      name,
      description,
      industry,
      companySize,
      foundedYear,
      website,
      contactEmail,
      contactPhone,
    };

    const company = await Company.findByIdAndUpdate(companyId, update, {
      new: true,
    });
    if (!company) {
      throw new Error("Company not Found!");
    }
    res.status(200).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  registerCompany,
  getCompanies,
  gestSingleCompany,
  updateCompany,
};
