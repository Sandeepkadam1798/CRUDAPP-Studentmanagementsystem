import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import UpdateIcon from '@mui/icons-material/Update';
import HomeIcon from '@mui/icons-material/Home';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';


export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  
  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{backgroundColor:"whitesmoke",color:"black"}}
        >
          <BottomNavigationAction  label="Home" icon={<Link to="/Home"><HomeIcon/></Link>}/>
          <BottomNavigationAction  label="Add" icon={<Link to="/Add"><AddIcon/></Link>}/>
          <BottomNavigationAction  label="View" icon={<Link to="/View"><RemoveRedEyeIcon/></Link>}/>
          <BottomNavigationAction  label="Update" icon={<Link to="/Update"><UpdateIcon/></Link>}/>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

