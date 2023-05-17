import React, { useState } from 'react'
import "../index.css"
import { Container, Paper,Avatar, Typography ,TextField,InputAdornment,IconButton, Stack, Button} from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




const  Login = () => {
  const [username,Setusername]=useState("")
  const [password,Setpassword]=useState("")
  const [showPassword, setShowPassword] = useState(false);

  const navigate=useNavigate()
  
   const signin= async ()=>{
    if(!password || !username){
      toast.error('All fields are required!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }else{
    const response = await fetch("http://localhost:8000/admin/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify({
        username,
        password,
        
      }),
    });
    const data = await response.json();
    if(data.message=="ok"){
      navigate("/Home")
    }
    else{
      toast.error('Wrong username and password', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });
    }
  }
   }
  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



  return (
    <>
    <Container sx={{display:"flex",justifyContent:"center",paddingTop:"100px"}}>
      <Paper elevation={3} sx={{height:"60vh",width:"40%",display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center"}}>
      <Avatar   sx={{ width: 56, height: 56 }} src="/broken-image.jpg" />
      <Typography variant='subtitle2'>LOGIN</Typography>
      <TextField value={username}
      onChange={(e)=>Setusername(e.target.value)} size='small' label="Username" variant="filled" />
      <TextField 
      value={password}
      onChange={(e)=>Setpassword(e.target.value)}
      type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>}
      label="Password" variant="filled" />
<Stack direction="column" spacing={2}>
        <Button onClick={signin}  variant='contained' color='info'>Login</Button>
        <Button color='error'>Forgot password?</Button>
      </Stack>
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
  )
}

  



  export default Login