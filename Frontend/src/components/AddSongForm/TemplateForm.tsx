import { useContext } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { Formik, Form } from "formik";

import Button from "@mui/material/Button";
import SelectField from "../../components/SelectField/SelectField";
import SelectFieldMulty from "../../components/SelectFieldMulty/SelectFieldMulty";
import { TextField } from "@mui/material";

import Box from "@mui/material/Box";

import AuthContext from "../../context/AuthContext";

import * as Yup from "yup";

const songSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, "The userName is too short!")
    .max(50, "The userName is too long!")
    .required("The password is required"),
  finder: Yup.string()
    .min(2, "The userName is too short!")
    .max(50, "The userName is too long!")
    .required("The password is required"),
});

function AddSongForm() {
  let signUpError = false;

  const currentUser = useContext(AuthContext);

  const optionsGenre = [
    { value: "Rock", label: "Rock" },
    { value: "Rap", label: "Rap" },
    { value: "Pop", label: "Pop" },
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    userName: "",
    finder: "",
    genre: "",
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="h1 h1SingUp">Upload Song</h1>
      </Box>

      <section className="row row-cols-1">
        <div className="col">
          <h2 className="h5 mb-3">upload your own songs</h2>
        </div>
        <div className="col">
          <Formik
            onSubmit={(values) => {
              handleSubmit(values);
            }}
            initialValues={initialValues}
            validationSchema={songSchema}
          >
            {({
              handleChange,
              handleSubmit,
              submitForm,
              errors,
              values,
              touched,
              isValidating,
              isValid,
            }) => (
              <Form>
                <div className="grid1">
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "1fr 1fr" },
                      gap: 2,
                      marginTop: 2,
                    }}
                  >
                    <TextField
                      id="userName"
                      name="userName"
                      label="user Name"
                      value={values.userName}
                      onChange={handleChange}
                      error={touched.userName && Boolean(errors.userName)}
                      helperText={touched.userName && errors.userName}
                    />
                    <TextField
                      id="finder"
                      name="finder"
                      label="finder"
                      value={values.finder}
                      onChange={handleChange}
                      onBlur={submitForm}
                      error={touched.finder && Boolean(errors.finder)}
                      helperText={touched.finder && errors.finder}
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { sm: "1fr 1fr" },
                      gap: 2,
                      marginTop: 2,
                    }}
                  >
                    <SelectField
                      name="gender"
                      options={optionsGenre}
                      placeholder={"Gender"}
                      submitForm={submitForm}
                    />
                    <SelectField
                      name="gender"
                      options={optionsGenre}
                      placeholder={"Gender"}
                      submitForm={submitForm}
                    />
                  </Box>
                  <SelectFieldMulty
                    name="gender"
                    options={optionsGenre}
                    placeholder={"Gender"}
                    submitForm={submitForm}
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
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
            <h2 className="h2 h2SignUp">Something went wrong</h2>
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
    </>
  );
}

export default AddSongForm;
