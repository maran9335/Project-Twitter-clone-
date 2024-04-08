import React, { useState } from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";
import ReplyModal from "./ReplyModel";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
    const [openReplyModel, setOpenReplyModel] = useState(false);
    const handleOpenReplyModel = () => setOpenReplyModel(true);
    const handleCloseReplyModal = () => setOpenReplyModel(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDeleteTweet = () => {
    console.log("delete Tweet");
    handleClose();
  };
  // const handleOpenReplyModel = () => {
  //   console.log("open model");
  // };
  const handleCreateRetweet = () => {
    console.log("handle create retweet");
  };
  const handleLiketweet = () => {
    console.log("handle like tweet");
  };
  return (
    <React.Fragment>
      {/* <div  className='flex items-center font-semibold text-gray-700 py-2'>
<RepeatIcon/>
<p>You Retweet</p>
</div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="data:image/png;base64,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"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold"> karthick</span>
              <span className="text-gray-600"> @karthick1234 .2m</span>
              <img
                className="ml-2 w-5 h-5"
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div
              onClick={() => navigate(`/twit/${3}`)}
              className="cursor-pointer"
            >
              <p className="mb-2 p-0">
                full stack project react and spring boot
              </p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md "
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>44</p>
              </div>

              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    onClick={handleLiketweet}
                    className="curser-pointer"
                  />
                ) : (
                  <FavoriteOutlined
                    onClick={handleLiketweet}
                    className="curser-pointer"
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>440</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModel} handleClose={handleCloseReplyModal} />
      </section>
    </React.Fragment>
  );
};

export default TweetCard;
