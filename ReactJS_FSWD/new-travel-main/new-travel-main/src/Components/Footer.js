import { Box, Button, Container, Paper, Typography } from '@mui/material'
import { Image, Row ,Input} from '@nextui-org/react'
import React from 'react'
import Hero from "../Asset/Blog.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const Footer = () => {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  return (
    <>
        <Image
        css={{width:"100%",filter:"brightness(60%)",height:matches?"110vh":"80vh",marginTop:"50px",position:"relative"}}
        objectFit='fill'
            src={Hero}
            alt='hero imag'
        />
        <Box sx={{backgroundColor:"transparent",marginTop:matches?"-800px":"-380px",position:"relative",zIndex:1000}}>
            <Box sx={{position:"relative",display:"flex",justifyContent:"space-between",flexDirection:matches?"column":"row",marginLeft:matches?"30px":"180px"}}>
            <Row css={{display:'flex',justifyContent:"space-evenly",flexDirection:"column"}}>
              <Typography variant='subtitle2' sx={{color:"white",fontWeight:200}}>KEEP IN TOUCH</Typography>
              <Typography variant='h6'sx={{color:"white",fontWeight:800}}>Travel With us</Typography>
            </Row>
            <Row css={{display:'flex',flexDirection:"row"}}>
            <Input placeholder="Contact us" />
            <Button variant='contained' sx={{backgroundColor:"#fd6536",'&:hover':{backgroundColor:"#fd6536"},borderRadius:"30px",marginLeft:"20px"}}>Send</Button>
            </Row>
            </Box>
        </Box>
        <Paper elevation={3} sx={{borderBottomLeftRadius:0,borderBottomRightRadius:0,padding:"50px",width:matches?200:800,height:matches?450:100,marginLeft:"auto",marginRight:"auto",marginTop:"50px",position:"relative"}}>
          <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:matches?"column":'row'}}>
              <Box sx={{display:"flex",justifyContent:"",flexDirection:'column'}}>
                  <Typography variant='h5' sx={{fontWeight:"bolder"}}>Travel</Typography>
                  <Typography variant='subtitle2'>This is is travel website buiit with ReactJS</Typography>
                  <Row>
                    <FacebookIcon sx={{color:"grey",marginRight:"10px"}}/>
                    <YouTubeIcon sx={{color:"grey",marginRight:"10px"}}/>
                    <TwitterIcon sx={{color:"grey",marginRight:"10px"}}/>
                  </Row>


              </Box>
              <Box>
              <Typography sx={{fontWeight:800,fontSize:"10px"}}>OUR AGENCY</Typography>
              <ul style={{marginTop:"10px",padding:0,marginLeft:"15px",color:"gray"}}>
                <li>Services </li>
                <li>Insurancee</li>
                <li>Agency</li>
                <li>Tourism</li>
                <li>Payment</li>
              </ul>

              </Box>


              <Box>
              <Typography  sx={{fontWeight:800,fontSize:"10px"}}>PATNERS</Typography>
              <ul style={{marginTop:"10px",padding:0,marginLeft:"15px",color:"gray"}}>
                <li>Booking</li>
                <li>RentalCar</li>
                <li>HostelWorld</li>
                <li>Trivago</li>
                <li>TripAdvisor</li>
              </ul>

              </Box>
              <Box>
              <Typography sx={{fontWeight:800,fontSize:"10px"}}>LAST MINIUTE</Typography>
              <ul style={{marginTop:"10px",padding:0,marginLeft:"15px",color:"gray"}}>
                <li>London</li>
                <li>Californiio</li>
                <li>Indonesia</li>
                <li>Europe</li>
                <li>Oceania</li>
              </ul>
            


              </Box>
          </Box>     
        </Paper>
        <Paper elevation={0} sx={{backgroundColor:"#fd6536",borderTopLeftRadius:0,borderTopRightRadius:0,width:matches?300:900,height:matches?60:40,marginLeft:"auto",marginRight:"auto",position:"relative"}}>
        <Box sx={{display:"flex",justifyContent:"space-between",flexDirection:'row'}}>
              <Box sx={{color:"white",fontWeight:200,padding:"10px"}}>Thank you for visiting us</Box>
              <Box sx={{color:"white",fontWeight:200,padding:"10px"}}>Copyright All right reserved @2023 </Box>
          </Box>  
        </Paper>

    </>    
  )
}

export default Footer