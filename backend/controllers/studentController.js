const Student = require('../models/Student');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error("Error getting students:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Get a single student by studentId
const getStudentByStudentId = async (req, res) => {
    try {
        const student = await Student.findOne({ studentId: req.params.studentId });

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(student);
    } catch (error) {
        console.error("Error getting student by studentId:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Create a new student
const createStudent = async (req, res) => {
    try {
        const { studentId, name, email, contactNumber, address } = req.body;

        // Check if studentId already exists
        const existingStudent = await Student.findOne({ studentId });
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this ID already exists" });
        }

        const newStudent = new Student({ studentId, name, email, contactNumber, address });
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error("Error creating student:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Update a student by studentId
const updateStudentByStudentId = async (req, res) => {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { studentId: req.params.studentId },
            req.body,
            { new: true }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        console.error("Error updating student by studentId:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// Delete a student by studentId
const deleteStudentByStudentId = async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({ studentId: req.params.studentId });

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error("Error deleting student by studentId:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {
    getAllStudents,
    getStudentByStudentId,
    createStudent,
    updateStudentByStudentId,
    deleteStudentByStudentId
};
