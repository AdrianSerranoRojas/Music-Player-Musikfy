import React, { useState } from "react";
import "./SideBar.scss";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";

function SideBar() {
  const [slideBar, setSlideBar] = useState(false);
  const showSlideBar = () => setSlideBar(!slideBar);

  return (
    <div className="slideBar">
      <nav className="navMenu">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dhqzvelnb/image/upload/v1651072060/Logo/MusikfyLogo-green_ysbv6t.png"
            alt="profile image"
          ></img>
        </div>
        <ul className="navMenuItems">
          <Link to="#" className="menuBars"></Link>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        <div className="ProfileImg2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SwRYqnvSzUO1XJzADbOWDjoouV0nqZOv2w&usqp=CAU"
            alt="User image"
            className="ProfileImg"
          ></img>
        </div>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;

