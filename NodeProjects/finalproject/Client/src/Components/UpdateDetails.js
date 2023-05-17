import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  ListItemIcon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";
import axios from "axios";
import { Link} from "react-router-dom";

const UpdateDetails = () => {
  const [studdata, setstuddata] = useState([]);
  const [status, setstatus] = useState([]);
  // const history=useNavigate();

  useEffect(() => {
    getAlluser();
  }, []);

  const getAlluser = async () => {
    await axios
    .get("http://localhost:8000/Allstudent")
    .then((res) => setstuddata(res.data))
      .then((error) => console.log(error));
  };

  

    const deleteuser = async (id) => {
      await deleteStudent(id);
      getAlluser();
    };
  


  const deleteStudent = async (id) => {
    // const URL="http://localhost:8000/api"
    try {
      return await axios
        .delete(`http://localhost:8000/delete/${id}`)
        .then((res) =>setstatus(res.data));
    } catch (error) {
      console.log("this is error", error);
    }

    
  };


  if(status.message==="Student deleted successfully"){
    // window.location.reload()
    getAlluser();
  }

  return (
    <>
    <Container sx={{display:"flex",justifyContent:"center",marginTop:"70px"}} >
     <Paper elevatiom={3} sx={{height:"auto", width:"70%",backgroundColor:"#f1f1f1",display:"flex",justifyContent:"space-evenly",flexDirection:"column",alignItems:"center"}}>
      <Typography padding={3}>
       UPDATE STUDENT RECORDS
      </Typography>
      <List sx={{ width: '100%', maxWidth: 600}}>
              {studdata.map((student, id) => (
                <ListItem  disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Avatar src="/broken-image.jpg" />
                    </ListItemIcon>
                    <ListItemText primary={student.fullName} />
                    <ListItemIcon>
                      <Link to={`/Edit/${student._id}`} >
                        <EditIcon sx={{ color: "blue" }} />
                      </Link>
                    </ListItemIcon>
                    <ListItemIcon>
                      <DeleteIcon
                        onClick={() => deleteuser(student._id)}
                        sx={{ color: "red" }}
                      />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          
            </Paper>

</Container>
</>
);
};
export default UpdateDetails;
