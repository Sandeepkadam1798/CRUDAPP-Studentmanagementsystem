import { Container, Typography ,Box, Paper,Slider, Stack, Button} from '@mui/material'
import { Image,Row,Text } from '@nextui-org/react'
import { Input } from "@nextui-org/react";
import React, {useState} from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useStatevalue } from '../Context/StateProvider';
import Blogimge from "../Asset/Blog image.jpg"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


  

function valuetext(value) {
    return `${value} €`;
  }
  
  

const Herosection = () => {


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));



  const [{},dispatch]=useStatevalue()
  const [inputvalue,setInputvalue]=useState();


  const sendvalue=(e)=>{
    setInputvalue(e.target.value)

    dispatch({
      type:'SET_COUNTRY',
      country:e.target.value

    })

  }

    const [value, setValue] =useState([0, 10000]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <>
        <Image
            // width={matches?"100%":"100%"}
            height={'100vh'}
            src={Blogimge}
            objectFit='cover'
            css={{filter:"brightness(50%)",position:"absolute",backgroundSize:"cover"}}
        />
        <Box sx={{width:"100%",backgroundColor:"transparent",marginTop:matches?"-480px":"-380px",position:"relative",zIndex:1000}}>
        <Typography variant='subtitle1' sx={{color:"white",fontWeight:"bolder",marginLeft:matches?"20px":"100px"}}>OUR PACKAGES</Typography>
        <Typography variant='h4'sx={{color:"white",fontWeight:"bolder",marginLeft:matches?"20px":"100px"}}>Search Your Holiday</Typography>
        <Paper elevation={3} sx={{padding:matches?"10px":"50px",width:matches?300:1000,height:matches?250:80,marginLeft:"auto",marginRight:"auto",marginTop:"50px"}}>
        <Stack direction={matches?"column":"row"} spacing={matches?3:12}>
        <Input  onChange={sendvalue} css={{marginRight:matches?"10px":"50px"}} clearable label="Select Your Destinations" placeholder="All destinations" />
        <Input width={matches?'120px':'250px'} css={{marginRight:matches?"0px":"50px"}} type={'date'} clearable label="Select Your Date"  />
        
        <Box sx={{ width:matches?200: 300 }}>
        <Typography variant='subtitle2'>Max Price</Typography>
        <Slider
        aria-label="Always visible"
        defaultValue={500}
        getAriaValueText={valuetext}
        step={50}
        min={0}
        max={10000}
        sx={{color:'#fd6536'}}

        valueLabelDisplay="on"
      />
       </Box>
       </Stack>
        </Paper>
        <Button sx={{position:"relative",marginLeft:matches?"115px":"540px",marginTop:"-25px",borderRadius:"30px",backgroundColor:"#fd6536",'&:hover':{backgroundColor:"#fd6536"}}} variant='contained'><FilterAltIcon/>MORE FILTERS</Button>
        <Box  sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Row css={{marginLeft:matches?"10px":"5px"}}>
          <Text css={{fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:matches?"":"50px"}} >PRICE <ArrowDropDownIcon/></Text>
          <Text css={{fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",color:"white",p:4,fontSize:"0.8rem",marginLeft:matches?"":"50px"}}>NAME<ArrowDropDownIcon/></Text>
            </Row>
            <Row css={{marginLeft:matches?"100px":"800px"}}>
            <Text ><ListIcon sx={{color:"white",fontSize:"30px",marginRight:"20px"}}/></Text>
            <Text ><AppsIcon  sx={{color:"white",fontSize:"30px"}}/></Text>

            </Row>
        </Box>
        </Box>
</>
  )
}

export default Herosection