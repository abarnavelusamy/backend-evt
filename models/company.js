const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const CompanySchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CompanyList', CompanySchema);
