const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/students', studentRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/markit_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ MongoDB Connected');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
