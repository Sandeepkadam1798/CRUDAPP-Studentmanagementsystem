import React, { useState,useEffect } from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios"



function Viewone() {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  console.log(id)

  useEffect(() => {
    loaduser();
  }, []);

  const loaduser = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

  const getUser = async (id) => {
    // const URL="http://localhost:8000/api"
    try {
      return await axios.get(`http://localhost:8000/students/${id}`);
    } catch (error) {
      console.log("this is error", error);
    }
  };


  console.log(user)
 
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
      <TextField value={user.fullName} sx={{width:"60%"}}   id="outlined-controlled"  variant="filled" />
      <TextField value={user.Phone_No} sx={{width:"60%"}} id="filled-basic"  variant="filled" />
      <TextField value={user.email} sx={{width:"60%"}} id="filled-basic"  variant="filled" />
      <TextField value={user.age} sx={{width:"60%"}} id="filled-basic" variant="filled" />
       

     </Paper>

    </Container>
     
    </>
  );
}

export default Viewone;
