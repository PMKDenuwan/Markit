// controllers/subjectController.js
const Subject = require('../models/Subject');

const getAllSubjects = async (req, res) => {
    try {
        const subjects = await Subject.find();
        res.status(200).json(subjects);
    } catch (error) {
        console.error("Error getting subjects:", error);
        res.status(500).json({ message: "Server error" });
    }
};

const createSubject = async (req, res) => {
    try {
        const { name, code, description } = req.body;

        const existing = await Subject.findOne({ code });
        if (existing) {
            return res.status(400).json({ message: "Subject code already exists" });
        }

        const newSubject = new Subject({ name, code, description });
        const saved = await newSubject.save();
        res.status(201).json(saved);
    } catch (error) {
        console.error("Error creating subject:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    getAllSubjects,
    createSubject
};
