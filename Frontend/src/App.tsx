import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

import AuthContext from "./context/AuthContext";

import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import AddSong from "./Pages/addSong/addSong";
import MySongs from "./Pages/MySongs/MySongs";
import Playlists from "./Pages/Playlists/Playlists";
import ListWebScrap from "./Pages/ListWebScrap/ListWebScrap"
import Stadistics from "./Pages/Stadistics/Stadistics";

import PlayerH5 from "./components/PlayerH5/PlayerH5";
import QueueListing from "./components/QueueListing/QueueListing";
import { NotFound } from "./components/NotFound/NotFound";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import "./App.scss";

export default function App() {
  const Widget2 = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "2%",
    overflowY: "hidden",
    padding: 16,
    borderRadius: 16,
    width: "80%",
    maxWidth: "100%",
    height: "15.8%",
    marginLeft: "12.5%",
    position: "absolute",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      if (unsubscribeFromAuth) {
        unsubscribeFromAuth();
      }
    };
  }, [currentUser]);
  return (
    <>
      <AuthContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/reset-password"
            element={currentUser ? <ResetPassword /> : <Home />}
          />
          <Route
            path="/changePassword"
            element={currentUser ? <ChangePassword /> : <Home />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/profile"
            element={currentUser ? <Profile /> : <Home />}
          />
          <Route
            path="/addSong"
            element={currentUser ? <AddSong /> : <Home />}
          />
          <Route
            path="/mySongs"
            element={currentUser ? <MySongs /> : <Home />}
          />
          <Route
            path="/playlist"
            element={currentUser ? <Playlists /> : <Home />}
          />
          <Route
            path="/stadistics"
            element={  <Stadistics /> }
          />
          <Route
            path="/40list"
            element={  <ListWebScrap /> }
          />
        </Routes>
        <Widget2>
          <PlayerH5 />
          <Box style={{overflow: "scroll", width : "30%"}}>
            <QueueListing />
          </Box>
        </Widget2>
      </AuthContext.Provider>
    </>
  );
}
