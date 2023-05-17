import {
  Box,
  Container,
  List,
  Paper,
  Typography,
  ListItemAvatar,
  ListItemButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import {Link} from 'react-router-dom'
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";


const Viewdetails = () => {
  const [studdata, setstuddata] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Allstudent")
      .then((res) => setstuddata(res.data))
      .then((error) => console.log(error));
  }, []);

  console.log(studdata)

  return (
    <>
    <Container sx={{display:"flex",justifyContent:"center",marginTop:"40px"}} >
     <Paper elevatiom={3} sx={{height:"auto", width:"70%",backgroundColor:"#f1f1f1",display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center"}}>
      <Typography padding={3}>
      STUDENT RECORDS
      </Typography>
      {studdata.map((data,index)=>(
      <List key={index} sx={{ width: '100%', maxWidth: 600}}>
                <ListItem   disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="/broken-image.jpg" />
                    </ListItemIcon>
                    <ListItemText primary={data.fullName} />
                    <ListItemIcon>
                    <Link to={`/Viewone/${data._id}`}>
                    <RemoveRedEyeIcon sx={{ color: "grey" }} />

                    </Link>
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
                <Divider></Divider>
            </List> 
            ))}        
   </Paper>

    </Container>
    </>
  );
};

export default Viewdetails;
