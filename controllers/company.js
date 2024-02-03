const CompanyModel = require('../models/company');
const path = require('path');

module.exports = {
    create: function(req, res, cb) {
        console.log(req)
        CompanyModel.findOne({ email: req.body.email }, function(err, result) {
            if(err) {
                cb(err);
            } else {
                if(!result) {
                    CompanyModel.create({ email: req.body.email, password: req.body.password }, function (err, result) {
                        if (err) {
                            cb(err);
                        } else {
                            CompanyModel.findOne({ email: req.body.email }, function(err, companyInfo) {
                                if (err) {
                                    cb(err);
                                } else {
                                    res.json({ status: "success", message: "Company added successfully!!!", data: { id: companyInfo._id } });
                                }
                            });  
                        }
                    });
                } else {
                    res.json({ status: "error", message: "Company already exists ", data: null });
                }
            }
        });
    },
    authenticate: function(req, res, cb) {
        CompanyModel.findOne({ email: req.body.email }, function(err, companyInfo) {
            if (err) {
                cb(err);
            } else {
                if (companyInfo && companyInfo.password === req.body.password) {
                    res.json({ status: "success", message: "Company found!!!", data: { id: companyInfo._id, email: companyInfo.email } });
                } else {
                    res.json({ status: "error", message: "Invalid email/password!!!", data: null });
                }
            }
        });
    }
};
