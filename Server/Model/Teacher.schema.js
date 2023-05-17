const mongoose=require("mongoose")

const TeacherSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  });
  
  const Admin = mongoose.model('Admin', TeacherSchema);
  
  module.exports = Admin;
  