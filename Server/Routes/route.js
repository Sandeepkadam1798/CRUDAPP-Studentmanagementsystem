const express=require("express")

const router=express.Router()

const {Adminlogin,GetallStuent,getonestudent,Addstudent,updatestudent,deletestudent,authorizeAdmin}= require("../Controller/Controller.js")



router.post('/admin/login',Adminlogin)
router.post('/Create', Addstudent)
router.get('/Allstudent',GetallStuent)
router.get('/students/:id',getonestudent)
router.post('/update/:id',updatestudent)
router.delete('/delete/:id',deletestudent)



module.exports = router;
