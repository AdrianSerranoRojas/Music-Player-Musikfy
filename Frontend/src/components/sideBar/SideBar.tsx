import React, { useState } from "react";
import "./SideBar.scss";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { SideBarData } from "./SideBarData";

import { Link } from "react-router-dom";

function SideBar() {
  const [slideBar, setSlideBar] = useState(false);
  const showSlideBar = () => setSlideBar(!slideBar);

  return (
    <div className="slideBar">
      <div className="navBar">
          <FaIcons.FaBars/>
      </div>
      <nav className={slideBar ? "navMenu" : "navMenu"}>
        <ul className="navMenuItems">
            <Link to="#" className="menuBars">
              <AiIcons.AiOutlineClose />
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
