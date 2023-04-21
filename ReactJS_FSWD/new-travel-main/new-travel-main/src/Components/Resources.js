import  Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import flight from "../Asset/flight.jpg"
import { Image, Row ,Input} from '@nextui-org/react';
import Heroimg from "../Asset/Heroimage.jpg"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




const Resources = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <>


    <Box sx={{display:'flex',justifyContent:'center',paddingTop:'25px',}}>
    <Typography variant='h3' sx={{fontWeight:"bolder",color:'gray'}}>Traval Resources</Typography>
    </Box>

    <Box sx={{display:"flex",justifyContent:"space-evenly",flexDirection:matches?'column':'row',width:'100%',paddingTop:'50px',marginLeft:matches?"5px":'10px',}}>
      
          <Typography variant='subtitle2' sx={{color:'gray'}} ><b>Planning a Travel Trip:</b><br/>Having go-to travel resources, you can always rely on is always helpful when you travel a lot. Even if you don’t plan too heavily when mapping out your next adventure, there’s still all manner of research and preparation that has to be done before and during any trip.</Typography>

    <Box sx={{marginLeft:matches?"5px":'50px'}}>
      <Typography variant='subtitle2' sx={{color:'gray'}}><b>Trip Advisor:</b><br/>
Everyone knows about Trip Advisor, and even though it was once known only as space for those wanting to vent their negative experiences, some elements of it, with a little digging, can be a comprehensive travel resource, ranking properties and attractions and hosting useful forums for discussion.</Typography>

    </Box>
    <Box sx={{marginLeft:matches?'5px':'50px',marginRight:'20px'}}>
      <Typography variant='subtitle2' sx={{color:'gray'}}><b>Round the World Experts:</b><br/>
      Round the World Experts (RTW Experts) offer travel planning, advice and booking services. They are a part of the Flight Centre, so a widely connected resource with outlets worldwide. RTW Experts have agents you can contact online. Normally, following a request, an agent will be assigned to you.</Typography>
    </Box>

    
   
    </Box>
    
   
        
  </>
  )
}

export default Resources