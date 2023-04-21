import React from 'react'
import { Image,Row,Text } from '@nextui-org/react'
import Blogimge from "../Asset/travel-website-product-sell-sheet-template-ghfmd.jpg"

import  Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Blog = () => {
  return (
  <>

  
          <Image
            height={''}
            src={Blogimge}
            
            css={{filter:"brightness(80%)",backgroundSize:"",marginTop:""}}
        />

        </>
  );
}

export default Blog