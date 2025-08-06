// controllers/courseController.js
const Course = require('../models/Course');
const Subject = require('../models/Subject');

// Get all courses with populated subjects
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate('subjects');
        res.status(200).json(courses);
    } catch (error) {
        console.error("Error getting courses:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Get a single course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('subjects');
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        console.error("Error getting course by ID:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Create a new course
const createCourse = async (req, res) => {
    try {
        const { courseId, name, description, courseFee, duration, subjectIds } = req.body;

        const exists = await Course.findOne({ courseId });
        if (exists) return res.status(400).json({ message: "Course ID already exists" });

        const course = new Course({
            courseId,
            name,
            description,
            courseFee,
            duration,
            subjects: subjectIds // array of ObjectIds
        });

        const saved = await course.save();
        res.status(201).json(saved);
    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Update a course
const updateCourseById = async (req, res) => {
    try {
        const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(updated);
    } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Delete a course
const deleteCourseById = async (req, res) => {
    try {
        const deleted = await Course.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourseById,
    deleteCourseById
};
