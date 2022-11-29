import { Language, Notifications, Settings } from "@material-ui/icons";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Admin Dashboard</h1>
      </div>
      <div className="right">
        <div className="icon-notification-div">
          <Notifications />
          <span className="notification">2</span>
        </div>
        <div className="icon-notification-div">
          <Language />
          <span className="notification">2</span>
        </div>
        <div className="icon-notification-div">
          <Settings />
        </div>
        <div className="icon-notification-div">
          <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="profile-img"
            className="profile-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
