// models/Subject.js
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: String
}, {
    timestamps: true
});

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
