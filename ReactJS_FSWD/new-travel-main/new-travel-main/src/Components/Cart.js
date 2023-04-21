import React, { useState ,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions,Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useStatevalue } from '../Context/StateProvider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



const Cart = ({data}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));




  const [{country},dispatch]=useStatevalue()

  // console.log(data)


  const fillterdata= data.filter((item) => item.location.includes(country));
  console.log(fillterdata)


  return (
    <>
    {fillterdata.length>0?
      <Grid  container spacing={3} rowSpacing={3} padding={2} zIndex={0}>
      {fillterdata.map((value, index) => (
        <>
          <Grid item xs={12} sm={4} key={index} >
            <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={value.image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.Title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            <LocationOnIcon sx={{color:"#0071a7"}}/> {value.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height:150,textOverflow:"inherit"}}>
          {value.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <Button variant='outlined' size="small" >
          {value.fees}
        </Button>
        <Button variant='contained' size="small" sx={{backgroundColor:"#0071a7",'&:hover':{backgroundColor:"#0071a7"}}}>
          Details
        </Button>
       
      </CardActions>
    </Card>
    </Grid>
        </>
      ))}
    </Grid>
    :
    <Grid  container spacing={3} rowSpacing={3} padding={2} zIndex={0} sx={{marginLeft:matches?"":'15px'}}>
      {data.map((value, index) => (
        <>
          <Grid item xs={12} sm={4} key={index} >
            <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={value.image}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {value.Title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div">
            <LocationOnIcon sx={{color:"#fd6536"}}/> {value.location}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{height:150,textOverflow:"inherit"}}>
          {value.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <Button variant='outlined' size="small" sx={{color:'#fd6536',borderColor:'#fd6536'}}>
          {value.fees}
        </Button>
        <Button variant='contained' size="small" sx={{backgroundColor:"rgb(253 101 54)",'&:hover':{backgroundColor:"rgb(253 101 54)"}}}>
          Details
        </Button>
       
      </CardActions>
    </Card>
    </Grid>
        </>
      ))}
    </Grid>
    }       
   </>     
  )
}

export default Cart