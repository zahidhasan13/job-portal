const Company = require('../models/companySchema')

const registerCompany = async(req, res)=>{
    try {
        const {companyName} = req.body;
        if(!companyName){
            throw new Error("Company name rquired!")
        }
        let company = await Company.findOne({name: companyName})
        if(company){
            throw new Error("This Company Already Registerd!")
        }

        company = await Company.create({
            name: companyName,
            createdBy: req.id
        })
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}













module.exports = {
    registerCompany
}