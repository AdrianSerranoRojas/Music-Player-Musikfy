import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { auth } from "./firebase/firebase";
import AuthContext from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

import "./App.scss";

import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Profile from "./Pages/Profile/Profile";
import ChangePassword from "./Pages/ChangePassword/ChangePassword";
import AddSong from "./Pages/addSong/addSong";
import MySongs from "./Pages/MySongs/MySongs";
import SinglePlaylist from "./Pages/Playlists/SinglePlaylist";
import Playlists from "./Pages/Playlists/Playlists";

import { NotFound } from "./components/NotFound/NotFound";

export default function App() {
  console.log("Juan eres un carapolla!");
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(currentUser);
        
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
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/changePassword" element={<ChangePassword />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/profile"
            element={currentUser ? <Profile /> : <Home />}
          />
          <Route path="/addSong" element={<AddSong />} />
          <Route path="/mySongs" element={<MySongs />} />
          <Route path="/playlist" element={<SinglePlaylist />} />
          <Route path="/playlists" element={<Playlists />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}
