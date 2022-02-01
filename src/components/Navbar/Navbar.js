import React from "react";
import "./Navbar.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import{ faTimesCircle} from  "@fortawesome/free-solid-svg-icons";

import { Link, useHistory, useLocation } from "react-router-dom";
import {
  Change,
  Direct,
  Explore,
  Heart,
  Home as HomeIcon,
  Saved,
  Settings,
  User,
} from "../../components/icons";
const Navbar = () => {
  let path = useLocation().pathname;
  let history = useHistory();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [activeIcon, setActiveIcon] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    if (path === "/home") setActiveIcon(1);
    else if (path === "/direct" || path.split("/")[1] === "direct")
      setActiveIcon(2);
    else if (path === "/explore") setActiveIcon(3);
  }, []);
  return (
    <nav>
      <div className="navbar">
        <div className="navLogo">
        <h1> Social<span id="black">veins</span></h1>

        </div>
    
        <div className="navMenu">
       
         
        
          <div
            className={`closePanel ${
              menuOpen || notificationOpen ? "active" : ""
            }`}
            onClick={() => {
              setMenuOpen(false);
              setNotificationOpen(false);
            }}
          ></div>
          <div className="navout" onClick={() => setMenuOpen(true)}>
          <FontAwesomeIcon id="icon" icon={faTimesCircle}></FontAwesomeIcon>
            {/* <img
              src="https://avatars2.githubusercontent.com/u/38807255?s=460&u=deb087d587be7f6a4000e4e710ec4d1daa6fde84&v=4"
              alt="profile"
            /> */}
            {menuOpen && (
              <>
                <div className="navProfilPhotoMenu arrow-top">
            
              
             
                  <div className="menuItem">
                    <span>Logout</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
