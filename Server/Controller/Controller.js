const express=require("express")
const Student=require("../Model/user.schema.js")
const Admin=require("../Model/Teacher.schema.js")
const bcrypt = require('bcrypt');


module.exports.authorizeAdmin =  (req, res, next) => {
  if (req.isAuthenticated() && req.user.isAdmin) {
    next(); 
  } else {
    res.status(403).json({ message: 'Access denied' });
  }
};


module.exports.Adminlogin= async (req, res) => {
  console.log(req.body)
    try {
      const { username, password } = req.body;
  
      // Find the admin by username
      const admin = await Admin.findOne({ username });
  
      // If admin doesn't exist or password is incorrect, respond with an error
      if ( admin.password != password) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }else{
        return res.status(200).json({message:"ok"})
      }

    
        
    } catch (error) {
      res.status(500).json({ message:"error"})
    }
}



// GET ALL STUDENT DETAILS

module.exports.GetallStuent= async (req, res) => {
    try {
      const students = await Student.find({});
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve student data' });
    }
  };
  





  //get one student details 

  module.exports.getonestudent= async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findById(id);
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Failed to retrieve student data' });
    }
  };


  
// update 

module.exports.updatestudent= async (req, res) => {
  const set=req.body.user;
  console.log(set)
  try {
    await Student.updateOne({_id:set._id}, { $set: set}) 
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "duplicate data"});
  }
  };



//   delete 



module.exports.deletestudent= async (req, res) => {
  console.log(req.params.id)

    try {  
      await Student.deleteOne({_id:req.params.id})
      res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete student' });
    }
  };
  

// Create 


module.exports.Addstudent= async (req, res) => {
  console.log(req.body)
    try {
      // const { fullName, email, age, Phone_No,Profile_img } = req.body;
  
      await Student.create({
        fullName:req.body.fullName, 
      Profile_img:req.body.Profile_img,
      Phone_No: req.body.Phone_No,
       email: req.body.email,
         age:req.body.age
      });
  
  
      res.status(201).json({message:"ok"});
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Failed to create a new student' });
    }
  };
  