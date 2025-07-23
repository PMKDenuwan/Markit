const express = require('express');
const router = express.Router();
const {
    getAllStudents,
    getStudentByStudentId,
    createStudent,
    updateStudentByStudentId,
    deleteStudentByStudentId
} = require('../controllers/studentController');

// CRUD routes
router.get('/', getAllStudents);
router.get('/studentId/:studentId', getStudentByStudentId); // GET specific student
router.post('/', createStudent);
router.put('/studentId/:studentId', updateStudentByStudentId); // PUT by studentId
router.delete('/studentId/:studentId', deleteStudentByStudentId); // DELETE by studentId

module.exports = router;
