import React, { useState } from "react";
import "./SideBar.scss";

import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

import { SideBarData } from "./SideBarData";
import { Link } from "react-router-dom";

function SideBar() {
  const [slideBar, setSlideBar] = useState(false);
  const showSlideBar = () => setSlideBar(!slideBar);

  return (
    <div className="slideBar">
      <div className="navBar">
      </div>
      <nav className={slideBar ? "navMenu" : "navMenu"}>
        <ul className="navMenuItems">
            <Link to="#" className="menuBars">
            </Link>



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
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
