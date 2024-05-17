// defined the relation schema

const mongoose = require('./db');

const studentSchema = new mongoose.Schema({
    studentId: String,
    name: String,
    age: String
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
