const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  Profile_img: { type: String},
  Phone_No: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
