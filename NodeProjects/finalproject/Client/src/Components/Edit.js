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
import axios from "axios";






function Edit() {
  const [user, setUser] = useState([]);
    const { id } = useParams();
    
  
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

    const onValueChange=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
    }

  //  useEffect(() => {
  //   adddata();
  // }, []);


   

      async function adddata() {

        const response = await fetch(`http://localhost:8000/update/${id}`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
    
          body: JSON.stringify({
            user,

          }),
        });

        const data = await response.json();
        console.log(data)

        if (data.status === "ok") {
          // alert("ok")
          toast.success("updated", {
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
          toast.error("Something wents wrong !", {
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
     <TextField  name="fullName"
                  value={user.fullName}
                  onChange={(e)=>onValueChange(e) } sx={{width:"60%"}} id="filled-basic"  variant="filled" />
      <TextField name="Phone_No"
                  value={user.Phone_No}
                  onChange={(e)=>onValueChange(e) }  sx={{width:"60%"}} id="filled-basic"  variant="filled" />
      <TextField  name="email"
                  value={user.email}
                  onChange={(e)=>onValueChange(e) } sx={{width:"60%"}} id="filled-basic"   variant="filled" />
      <TextField  name="age"
                  value={user.age}
                  onChange={(e)=>onValueChange(e) } sx={{width:"60%"}} id="filled-basic" variant="filled" />
      <Button onClick={()=>adddata()} variant="contained">UPDATE</Button>



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
theme="light"/>
    </>
  );
}

export default Edit;
