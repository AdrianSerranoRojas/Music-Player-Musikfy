import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { Formik, Form } from "formik";

import Button from "../../components/Button/Button";
import SelectField from "../../components/SelectField/SelectField";
import Input from "../../components/Input";

import withLayout from "../../hoc/withLayout";

import AuthContext from "../../context/AuthContext";

import {
  singInWithGoogle,
  singUpWithEmailAndPassword,
} from "../../firebase/firebase";

import { syncUserData } from "../../utils/auth-requests";

import "./SignUp.scss";

import * as Yup from "yup";

const userSchema = Yup.object().shape({
  useName: Yup.string()
    .min(2, "The userName is too short!")
    .max(50, "The userName is too long!"),
  password: Yup.string()
    .min(2, "The password is too short!")
    .max(50, "The password is too long!")
    .required("The password is required"),
  country: Yup.string()
    .min(2, "The country is too short!")
    .max(50, "The country is too long!"),
  birthday: Yup.date(),
  gender: Yup.object(),
  email: Yup.string().email("Invalid email").required("Required"),
});

function SignUp() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
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

  const optionsGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Other", label: "Other" },
  ];

  const handleSubmit = async (values) => {
    console.log(values);
    let valuesToSend = {
      birthday: values.birthday,
      gender: values.gender.value,
      userName: values.userName,
      country: values.country,
    };
    // e.preventDefault();
    setLoading(true);

    try {
      await singUpWithEmailAndPassword(values.email, values.password);
      console.log(values);

      await syncUserData(valuesToSend);
    } catch (error) {
      setSignUpError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const initialValues = {
    email: "",
    userName: "",
    password: "",
    country: "",
    birthday: "",
    gender: "",
    loading: true,
    signUpError: null,
  };

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
                  <FcGoogle className="googleLogo" />
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
                <Formik
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                  initialValues={initialValues}
                  validationSchema={userSchema}
                >
                  {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    errors,
                    values,
                    touched,
                    isValidating,
                    isValid,
                  }) => (
                    <Form>
                      <div className="grid1">
                        <Input
                          type="email"
                          label="Email *"
                          id="email"
                          value={values.email}
                          placeholder="Email"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          hasErrorMessage={touched.email}
                          errorMessage={errors.email}
                        />
                        <Input
                          type="password"
                          label="Password *"
                          id="password"
                          value={values.password}
                          placeholder="Password"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          hasErrorMessage={touched.password}
                          errorMessage={errors.password}
                        />
                        <Input
                          type="text"
                          label="User name"
                          id="userName"
                          value={values.userName}
                          placeholder="User name"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          hasErrorMessage={touched.userName}
                          errorMessage={errors.userName}
                        />
                      </div>
                      <div className="grid2">
                        <Input
                          type="date"
                          label="Birthday"
                          id="birthday"
                          value={values.birthday}
                          placeholder="Birthday"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          hasErrorMessage={touched.birthday}
                          errorMessage={errors.birthday}
                        />
                        <Input
                          type="text"
                          label="Country"
                          id="country"
                          value={values.country}
                          placeholder="Country"
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          hasErrorMessage={touched.country}
                          errorMessage={errors.country}
                        />
                        <div className="mb-3">
                          <label className="form-label" htmlFor="gender">
                            Gender
                          </label>
                          <SelectField
                            name="gender"
                            options={optionsGender}
                            placeholder={"Gender"}
                          />
                        </div>
                      </div>
                      <Button
                        submitButton
                        block
                        disabled={isValidating || !isValid}
                      >
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
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
                <p className="accExists">You already have a Musikfy account?</p>
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
