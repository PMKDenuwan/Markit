const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/subjects', subjectRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/sams', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
