import * as React  from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import AddDetails from './AddDetails';
import DeleteDetails from './DeleteDetails';
import Viewdetails from './Viewdetails';
import UpdateDetails from './UpdateDetails';




function Dashboard() {
    const [tab,setTab]=useState(1)

    const addDetailsfun=()=>{
        setTab(1)

    }

    
    const updateDetailsfun=()=>{
        setTab(2)
    }
    const DeleteDetailsfun=()=>{
        setTab(3)
    }
    const Viewdetailsfun=()=>{
        setTab(4)
    }


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
      
  

  return (
    <>
    <Container maxWidth="sm" sx={{marginLeft:"auto",marginRight:"auto",position:"absolute"}}>
      <Stack
        sx={{marginTop:"10px",width:"100%"}}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={addDetailsfun}>Add Details</Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={updateDetailsfun}>Update  Details</Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={DeleteDetailsfun}>Delete  Details </Item>
        <Item sx={{cursor:"pointer","&:hover":{backgroundColor: "#f2f2f2"}}} onClick={Viewdetailsfun}>View Details</Item>
      </Stack>
      </Container>
      <Container sx={{position:"absolute"}}>
       {tab===1?
       <AddDetails/>
       :""}
       {tab===2?
        <UpdateDetails/>
       :""}
       {tab===3?
        <DeleteDetails/>
       :""}
       {tab===4?
        <Viewdetails/>
       :""}
       </Container>
</>
  );
}
export default Dashboard;