import React, { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Tab, Tabs,  } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TweetCard from "../HomeSection/TweetCard";
import ProfileModal from "./ProfileModel";

const Profile = () => {
  const [tabvalue,setTabValue]= useState("1")
  const navigate = useNavigate();
  const [openProfileModel,setOpenProfileModel] =useState(false)
    const handleOpenProfileModel = () => setOpenProfileModel(true);
    const handleClose = () => setOpenProfileModel(false);

  const handleBack = () => navigate(-1);

  // const handleOpenProfileModel = () => {
  //   console.log("open Profile Model");
  // };
  const handleFollowUser = () => {
    console.log("Follow User");
  };
  const handleTabChange=(event,newValue)=>{
    setTabValue(newValue)
    if(newValue===4){
      console.log("like twit")
    }
    else if(newValue===1){
      console.log("user twits")
    }
  }
  return (
    <div>
      <section className={`z-50 flex items-center bg-white sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon
          className="cursor-pointer"
          onClick={handleBack}
        />
        <h1 className="py-5 text=xl font-bold opacity-90 ml-5">KARTHICK2244</h1>
      </section>
      <section>
        <img
          className="w-[100%] h-[15rem] object-cover "
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </section>
      <section className="pl-6 ">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="karthick"
            src="data:image/png;base64,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"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />
          {true ? (
            <Button
              onClick={handleOpenProfileModel}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              onClick={handleFollowUser}
              variant="contained"
              sx={{ borderRadius: "20px" }}
            >
              {true ? " Follow" : "Unfollow"}
            </Button>
          )}
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Karthick</h1>

            {true && (
              <img
                className="ml-2 w-5 h-5"
                src="data:image/png;base64,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"
                alt=""
              />
            )}
          </div>
          <h1 className="text-gray-500">@Karthick2244</h1>
        </div>

        <div className="mt-2 space-y-3">
          <p>Hi,Iam karthick this is full stack project</p>

          <div className="py-1 flex space-x-5">
            <div className="flex items-center text-gray-500">
              <BusinessCenterIcon />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex items-center text-gray-500">
              <LocationOnIcon />
              <p className="ml-2">Indian</p>
            </div>
            <div className="flex items-center text-gray-500">
              <CalendarMonthIcon />
              <p className="ml-2">Joined Jun 2022</p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-1 font-semibold">
              <span>200</span>
              <span className="text-gray-500">Following</span>
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex items-center space-x-1 font-semibold">
                <span>588</span>
                <span className="text-gray-500">Followers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabvalue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {[1,1,1,1].map((item)=><TweetCard/>)}
              
              </TabPanel>
            <TabPanel value="2">Users replies</TabPanel>
            <TabPanel value="3">Media</TabPanel>
            <TabPanel value="4">Likes</TabPanel>
          </TabContext>
        </Box>
      </section>

      <section>
        <ProfileModal handleClose={handleClose} open={openProfileModel}/>
      </section>
    </div>
  );
};

export default Profile;
