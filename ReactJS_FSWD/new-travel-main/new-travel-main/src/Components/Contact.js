import { Typography, Paper, Box, CardMedia } from "@mui/material";
import { color } from "framer-motion";
import React from "react";
import contact1 from "../Asset/preparefortraval.jpg";
import contact2 from "../Asset/contact(2).jpg";
import contact3 from "../Asset/contact(3).jpg";
import { Subtitles } from "@mui/icons-material";
import { fontSize } from "@mui/system";

const Contact = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "grey",
          marginTop: "40px",
          marginLeft: "50px",
          fontWeight: "bolder",
        }}
      >
        Help Center
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "gray",
          marginTop: "10px",
          marginLeft: "50px",
          marginRight: "40px",
        }}
      >
        We want you to get where you're going faster. Review our most popular
        ways to quickly manage your trip yourself, maintain your SkyMiles
        account, explore helpful policy details and, if needed, find out how to
        contact US.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 200,
            height: 200,
          },

          justifyContent: "center", // center horizontally
          alignItems: "center", // center vertically
          marginTop: "25px",
        }}
      >
        <Paper elevation={3}>
          <img
            src={contact1}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <Box><Typography variant="subtitle2" sx={{
          color: "grey",fontWeight:'bolder',textAlign:'center',marginTop:'10px'}} >Prepare For Traval </Typography></Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src={contact2}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <Box><Typography variant="subtitle2" sx={{
          color: "grey",fontWeight:'bolder',textAlign:'center',marginTop:'10px'}}>Manage Your Trip</Typography></Box>
        </Paper>
        <Paper elevation={3}>
          <img
            src={contact3}
            alt=""
            style={{ height: "200px", width: "200px" }}
          />
          <Box><Typography variant="subtitle2" sx={{
          color: "grey",fontWeight:'bolder',textAlign:'center',marginTop:'10px'}}>Day Of Travel</Typography></Box>
        </Paper>
      </Box>
    </>
  );
};

export default Contact;
