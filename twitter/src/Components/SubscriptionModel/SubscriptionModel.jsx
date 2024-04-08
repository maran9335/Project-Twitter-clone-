import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "none",
  outline: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
};

const fetures = [
  " prioritized rankings in conversation and search",
  "See approximately twice as many Tweets ads in your For you and Following timeline",
  "Add bold and italic text in your tweets.",
];
export default function SubscriptionModel({handleClose,open}) {
 
  const [plan, setPlan] = React.useState("Annually");

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex items-center space-x-3">
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className="flex justify-center py-10">
            <div className="w-[80%] space-y-10 ">
              <div className="p-5 rounded-md flex items-center justify-between  bg-slate-400 shadow-lg">
                <h1 className="text-xl pr-5">
                  Blue subscribers with a verified phone number will get a blue
                  checkmark once approved.
                </h1>
                <img
                  className="w-24 h-24 rounded-full "
                  src="https://img.freepik.com/premium-psd/verified-symbol-3d-illustration_784938-2401.jpg?size=626&ext=jpg&ga=GA1.1.226656833.1701336613&semt=ais"
                />
              </div>
              <div
                className="flex justify-between border rounded-full px-5 py-3
              border-gray-500 "
              >
                <div>
                  <span
                    onClick={() => setPlan("Annually")}
                    className={`${
                      plan === "Annually" ? "text-black" : "text-gray-400"
                    }
                cursor-pointer`}
                  >
                    Annually
                  </span>
                  <span className="text-green-500 text-sm ml-5">SAVE 12% </span>
                </div>
                <p
                  onClick={() => setPlan("monthly")}
                  className={`${
                    plan === "monthly" ? "text-black" : "text-gray-400"
                  }
                cursor-pointer`}
                >
                  Monthly
                </p>
              </div>
              <div className="space-y-3">
                {fetures.map((item) => (
                  <div className="flex items-center space-x-5">
                    <FiberManualRecordIcon
                      sx={{ width: "7px", height: "7px" }}
                    />
                    <p className="">{item}</p>
                  </div>
                ))}
              </div>
              <div
                className="cursor-pointer flex justify-center bg-gray-900 text-white rounded-full
              px-5 py-3"
              >
                <span className="line-thorough italic">₹9,999.00 </span>
                <span className="px-5">₹4,999.00/year</span>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
