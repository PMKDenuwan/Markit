const express = require('express');
const mongoose = require('mongoose');
const Student = require('./models/Student');

const app = express();
app.use(express.json()); // Middleware to parse JSON

mongoose.connect("mongodb://localhost:27017/markit_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ MongoDB Connected");
}).catch((err) => {
    console.error("❌ DB connection failed:", err.message);
});

app.post('/students', async (req, res) => {
    try {
        const student = new Student(req.body);
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

app.listen(5000, () => {
    console.log("🚀 Server running on http://localhost:5000");
});
