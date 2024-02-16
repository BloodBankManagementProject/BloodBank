import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import {Grid} from "@mui/material";
import Bloodbank from "../images/Blood-Bank.jpg";
import "../styles/AboutStyles.css";

const About = () => {
  return (
    <Layout>
      <Grid sx={{placeItems:'center'}} container>
      <Grid item xs={6}>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4"> ABOUT US</Typography>
        <p>
          We,Safe Life Blood Banks at Pune,Maharashtra,aim to provide prompt,economical and reliable services of the safest blood.Offering the industry-leading,advanced technology and well-equipped inventory,we make all types of blood available for the patients and many hospitals.We contribute in saving many lives in the time of need or in an emergency.
        </p>
      </Box>
      </Grid>
      <Grid item xs={6}>
      <div className="about" style={{ backgroundImage: `url(${Bloodbank})` }}>
        </div>
      </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
