import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HomeSection from "../HomeSection/HomeSection";
import RightPart from "../RightPart/RightPart";
import { Route, Routes } from "react-router-dom";
import Profile from "../Profile/Profile";
import TweetDetails from "../../TweetDetails/TweetDetails";

function Homepage() {
  return (
    <Grid container xs={12} className="px-5 lg:px-36 justify-between">
      <Grid item xs={0} lg={2.5} className="hiden lg:block w-full relative">
        <Navigation />
      </Grid>
      <Grid
        item
        xs={12}
        lg={6}
        className=" px-5 lg:px-5 hiden lg:block w-full relative"
      >
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>
          <Route path="/home" element={<HomeSection />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
          <Route path='/twit/:id' element={<TweetDetails/>}></Route>
        </Routes>
  
      </Grid>
      <Grid item xs={0} lg={3} className="hiden lg:block w-full relative">
        <RightPart />
      </Grid>
    </Grid>
  );
}

export default Homepage;
