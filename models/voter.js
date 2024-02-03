const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;
const VoterSchema = new Schema ({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    election_address: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('VoterList', VoterSchema);