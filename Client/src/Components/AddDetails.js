import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';






function AddDetails() {
  const [fullName, setfullName] = useState("");
  const [Profile_img, setProfile_img] = useState("");
  const [Phone_No, setPhone_No] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState("");

  async function adddata(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/Create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        fullName,
        Profile_img,
        Phone_No,
        email,
        age,
      }),
    });
    const data = await response.json();
    // console.log(data.status);

    if (data.message === "ok") {
      // alert("ok")
      toast.success("Successfully Added", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      // alert('error')
      toast.error("Please try Again !", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  return (
    <>
    <Container sx={{display:"flex",justifyContent:"center",marginTop:"40px"}} >
     <Paper elevatiom={3} sx={{height:"80vh", width:"70%",backgroundColor:"#f1f1f1",display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center"}}>
      <Typography>
        {/* ADD  */}
      </Typography>
      <Stack direction="row" spacing={2}>
      <Avatar   sx={{ width: 70, height: 70 }} src="/broken-image.jpg" />
      {/* <EditIcon sx={{position:"relative"}}/> */}
      </Stack> 
     <TextField onChange={(e)=>setfullName(e.target.value)} sx={{width:"60%"}} id="filled-basic" label="Full Name" variant="filled" />
      <TextField onChange={(e)=>setPhone_No(e.target.value)} sx={{width:"60%"}} id="filled-basic" label="Phone No" variant="filled" />
      <TextField onChange={(e)=>setemail(e.target.value)} sx={{width:"60%"}} id="filled-basic" label="Email Address" variant="filled" />
      <TextField onChange={(e)=>setage(e.target.value)} sx={{width:"60%"}} id="filled-basic" label="Age" variant="filled" />
      <Button onClick={adddata} variant="contained">ADD</Button>



     </Paper>

    </Container>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
theme="light"
/> 


    </>
  );
}

export default AddDetails;
