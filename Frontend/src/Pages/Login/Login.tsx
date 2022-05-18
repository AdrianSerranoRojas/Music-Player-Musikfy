import { useState, useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@mui/material";

import withLayout from "../../hoc/withLayout";

import AuthContext from "../../context/AuthContext";

import {
  singInWithGoogle,
  singInWithEmailAndPassword,
} from "../../firebase/firebase";

import { syncUserData } from "../../utils/auth-requests";

import "./Login.scss";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const currentUser = useContext(AuthContext);

  async function handleLoginWithGoogleClick(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singInWithGoogle();
      await syncUserData();
    } catch (error: any) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      await singInWithEmailAndPassword(email, password);
    } catch (error: any) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
    navigate("/");
  }

  return (
    <>
      <main className="container p-4 mt-5">
        <div className="row flex-column align-items-center">
          <div className="col col-lg-6">
            <section className="row row-cols-1 mb-3">
              <h1 className="h2">Log in</h1>
              <hr />
              <Button
                variant="contained"
                color="primary"
                onClick={handleLoginWithGoogleClick}
              >
                <FcGoogle className="googleLogo" />
                Login with Google
              </Button>
              <div className="col">
                <h2 className="h5 mb-3">or</h2>
              </div>
              <div className="col">
                <h2 className="h5 mb-3">Login with email and password</h2>
              </div>
              <div className="col">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </form>
              </div>
            </section>
            {loginError && (
              <section className="row row-cols-1 mb-3 border py-3 bg-light">
                <div className="col">
                  <h2 className="h5">Something went wrong</h2>
                  <hr />
                  <p className="mt-3">{loginError}</p>
                </div>
              </section>
            )}
            <section className="row row-cols-1 mb-5">
              <div className="col">
                <p className="accNotExists">
                  You don't have a Musikfy account?
                </p>
                <Link to="/sign-up"> Sign up </Link>
                <hr />
              </div>
              <div className="col">
                <Link to="/reset-password">Forgot your password?</Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default withLayout(Login);
