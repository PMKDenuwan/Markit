// routes/subjectRoutes.js
const express = require('express');
const router = express.Router();
const { getAllSubjects, createSubject } = require('../controllers/subjectController');

router.get('/', getAllSubjects);
router.post('/', createSubject);

module.exports = router;
