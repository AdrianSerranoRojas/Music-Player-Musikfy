import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { FcGoogle } from "react-icons/fc";

import Button from "../../components/Button/Button";

import withLayout from "../../hoc/withLayout";

import AuthContext from "../../context/AuthContext";

import {
  singInWithGoogle,
  singUpWithEmailAndPassword,
} from "../../firebase/firebase";

import { syncUserData } from "../../utils/auth-requests";

import "./SignUp.scss";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState(null);

  const currentUser = useContext(AuthContext);

  async function handleSingInWithGoogleClick(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await singInWithGoogle();
      await syncUserData();
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await singUpWithEmailAndPassword(email, password);
      await syncUserData();
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main className="container p-4 mt-5">
        <div className="row flex-column align-items-center">
          <div className="col col-lg-6 sketchy">
            <section className="row row-cols-1">
              <div className="col">
                <h1 className="h2">Sign Up</h1>
                {currentUser && (
                  <p className="font-bold">Hello {currentUser.email}</p>
                )}
                <hr />
              </div>
              <div className="col">
                <Button onClick={handleSingInWithGoogleClick}>
                <FcGoogle className="googleLogo"/>
                  Sign Up With Google
                </Button>
              </div>
              <div className="col">
                <h2 className="h5 mb-3">or</h2>
              </div>
            </section>
            <section className="row row-cols-1">
              <div className="col">
                <h2 className="h5 mb-3">Sign up with your email</h2>
              </div>
              <div className="col">
                <form action="#" onSubmit={handleSubmit} className="gridForm">
                  <div className="grid1">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Email*
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
                      Password*
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      className="form-control"
                      id="username"
                      type="text"
                      // value={username}
                      // onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  </div>
                  <div className="grid2">
                  <div className="mb-3">
                    <label className="form-label" htmlFor="birthday">
                      Birthday
                    </label>
                    <input
                      className="form-control"
                      id="birthday"
                      type="date"
                      // value={date}
                      // onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="form-control"
                      id="country"
                      type="text"
                      // value={country}
                      // onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="gender">
                      Gender
                    </label>
                    <Form.Select name="gender" id="gender">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </div>
                  </div>
                  <Button type="submit" disabled={loading} size="lg">
                    {loading ? "Signing up..." : "Sign Up"}
                  </Button>
                </form>
              </div>
            </section>
            {signUpError && (
              <section className="row row-cols-1 mb-3 border py-3 bg-light">
                <div className="col">
                  <h2 className="h5">Something went wrong</h2>
                  <hr />
                  <p className="mt-3">{signUpError}</p>
                </div>
              </section>
            )}
            <section className="row row-cols-1 mb-5">
              <div className="col">
                <p className="accExists">
                  You already have a Musikfy account?
                </p>
                  <Link to="/login">Log in</Link>
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

export default withLayout(SignUp);
