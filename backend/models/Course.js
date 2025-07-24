const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
        unique: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseFee: {
        type: Number,
        required: true
    },
    duration: {
        type: String, // e.g. "3 Years", "6 Months"
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);
