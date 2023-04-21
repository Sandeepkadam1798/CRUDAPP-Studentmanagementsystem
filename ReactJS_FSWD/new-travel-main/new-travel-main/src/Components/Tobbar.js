import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Row,Text } from '@nextui-org/react'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CallIcon from '@mui/icons-material/Call';
import StarIcon from '@mui/icons-material/Star';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Tobbar = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  
  return (
    <Box sx={{position:"static",width:matches?"100%":"100%",display:matches?"none":"flex",flexDirection:"row",justifyContent:"space-between",justifyItems:"center",alignItems:"center",backgroundColor:"#363533",height:matches?"30px":"20px"}}>
       <Row>
        <Text css={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:matches?"":"50px"}}><PublicIcon sx={{fontSize:"10px"}}/>Language</Text>
        <Text css={{color:"white",p:4,fontSize:"0.8rem",marginLeft:matches?"":"10px"}}>EN</Text>
        <Text css={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:matches?"":"50px"}}><ShareIcon sx={{fontSize:"10px"}}/>Our Social</Text>
       <Text css={{marginLeft:"5px"}} ><FacebookIcon sx={{color:"white",fontSize:"10px"}}/></Text>
       <Text css={{marginLeft:"5px"}} ><TwitterIcon sx={{color:"white",fontSize:"10px"}}/></Text>
       <Text css={{marginLeft:"5px"}} ><LinkedInIcon sx={{color:"white",fontSize:"10px"}}/></Text>
       </Row>

       <Row css={{marginLeft:matches?"":"500px"}}>
          <Text css={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:"10px"}}><StarIcon sx={{color:"white",fontSize:"10px"}}/>TOUR PACKAGE</Text>
          <Text css={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:"10px"}}><CallIcon sx={{color:"white",fontSize:"10px"}}/>CONTACT US </Text>
       </Row>
        
    </Box>
  )
}

export default Tobbar