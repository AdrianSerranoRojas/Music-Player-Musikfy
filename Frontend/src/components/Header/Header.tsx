import { NavLink } from "react-router-dom";
import { useContext } from "react";

import "./Header.scss";

import AuthContext from "../../context/AuthContext";
import Button from "../Button/Button";
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

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
              <Image src="https://res.cloudinary.com/dhqzvelnb/image/upload/v1651072060/Logo/MusikfyLogo-green_ysbv6t.png" alt="profile image" />
            </NavLink>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 searchBig"
              aria-label="Search"
            />
          </Form>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav w-100">
                {currentUser ? (
                  <>
                    <li className="nav-item ms-auto">
                    {currentUser.email}
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic" className="DropdownProfile">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4SwRYqnvSzUO1XJzADbOWDjoouV0nqZOv2w&usqp=CAU" alt="User image" className="ProfileImg"></img>
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="DropdownProfileMenu">
                        <Dropdown.Item className="DropdownProfileItem" href="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item className="DropdownProfileItem" href="/userTopTen">Top Ten</Dropdown.Item>
                        <Dropdown.Item className="DropdownProfileItem" href="/userPlaylists">Playlists</Dropdown.Item>
                        <Dropdown.Item className="DropdownProfileItem" href="/changePassword">Change Password</Dropdown.Item>
                        <Dropdown.Item className="DropdownProfileItem" onClick={handleSignOut}>Log Out</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
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
