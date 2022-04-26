import { NavLink } from "react-router-dom";
import { useContext } from "react";

import AuthContext from "../../context/AuthContext";
import Button from "../Button/Button";
import Image from 'react-bootstrap/Image';

import { userSignOut } from "../../firebase/firebase";

import "./header.scss";

function AppHeader({ ...props }) {
  async function handleSignOut() {
    await userSignOut();
  }

  const currentUser = useContext(AuthContext);

  return (
    <header className="bg-primary mb-4" {...props}>
      <div className="container-fluid">
        <div className="row">
          <nav className="navbar navbar-expand navbar-dark">
            <NavLink className="navbar-brand" to="/">
              <Image src="https://res.cloudinary.com/dhqzvelnb/image/upload/v1650974399/Logo/MusikfyLogo_oqlmpp.png" alt="profile image" />
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav w-100">
                {currentUser ? (
                  <>
                    <li className="nav-item ms-auto">
                      <NavLink className="nav-link" to="/profile">
                        Profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <Button variant="outlined" onClick={handleSignOut}>
                        Sign Out
                      </Button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item ms-auto">
                      <NavLink className="nav-link" to="/sign-up">
                        Sign Up
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">
                        Login
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
