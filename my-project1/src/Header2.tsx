import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Icon } from "@iconify/react";
function Header2() {
  return (
    <div className="navbar">
      <a className="vodafone_icon  active" href="#">
        <Icon icon="simple-icons:vodafone" color="red" width="50" height="45" />
      </a>
      <div className="navbar2">
        <a href="#">Mobile</a>
        <a href="#">Broadband</a>
        <a href="#">Business Apps</a>
        <a href="#">Solutions</a>
        <a href="#">Discover</a>
        <a href="#">Support</a>
      </div>
      <div className="navbar2">
        <a className="profile_icon" href="#">
          <Icon icon="iconoir:profile-circled" width="50" height="40" />
        </a>
      </div>
    </div>
  );
}

export default Header2;
