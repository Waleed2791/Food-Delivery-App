import React from "react";
import './Navbar.css'
import assets from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="admin-navbar-container">
      <img src={assets.logo} alt="admin logo" />
      <img src={assets.profile_image} alt="user profile" />
    </div>
  )
}

export default Navbar
