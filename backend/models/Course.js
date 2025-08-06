// models/Course.js
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: String,
    courseFee: {
        type: Number,
        required: true
    },
    duration: {
        type: String, // e.g., "3 Years", "6 Months"
        required: true
    },
    subjects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject'
    }]
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
