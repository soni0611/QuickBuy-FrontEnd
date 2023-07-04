import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import "./OrderFail.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderFail = () => {
  return (
    <div className="orderFail">
      <CancelIcon />

      <Typography>Payment Failed </Typography>
      <Link to="/order/confirm">Try Again</Link>
    </div>
  );
};

export default OrderFail;

