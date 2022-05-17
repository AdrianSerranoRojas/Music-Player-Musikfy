import { useState, useContext } from "react";
// import { Link } from "react-router-dom";
// import "./Login.scss";
// import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";
import withLayout from "../../hoc/withLayout";
// import AuthContext from "../../context/AuthContext";
// import {
//   singInWithGoogle,
//   singInWithEmailAndPassword,
// } from "../../firebase/firebase";
// import { syncUserData } from "../../utils/auth-requests";

function Stadistics() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [loginError, setLoginError] = useState(null);

  // const currentUser = useContext(AuthContext);

  // async function handleLoginWithGoogleClick(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await singInWithGoogle();
  //     await syncUserData();
  //   } catch (error: any) {
  //     setLoginError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setLoading(true);
  //   try {
  //     await singInWithEmailAndPassword(email, password);
  //   } catch (error: any) {
  //     setLoginError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    <>
      <main className="container p-4 mt-5">
        <h2>stadistc</h2>
    <Button> fetc stadistic</Button>
      </main>
    </>
  );
}

export default withLayout(Stadistics);
