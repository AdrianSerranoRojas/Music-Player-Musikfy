import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";

import Home from "./Pages/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

import { auth } from "./firebase/firebase";
import AuthContext from "./context/AuthContext";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
console.log(currentUser);

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
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
