import { useState } from "react";

import { Button, TextField, Typography } from "@mui/material";

import withLayout from "../../hoc/withLayout";

import { Formik } from "formik";

import { changePassword, reauthenticate } from "../../firebase/firebase";

import "./ChangePassword.scss";

const ChangePassword = () => {
  const [message, setMessage] = useState("");

  async function handleSubmit(values) {
    event.preventDefault();
    if (values.newPassword != values.newPasswordConfirm) {
      return;
    }
    reauthenticate(values.currentPassword)
      .then(() => {
        changePassword(values.newPassword);
        setMessage("contraseña cambiada correctamente");
        setTimeout(() => setMessage(""), 2000);
      })
      .catch(() => {
        setMessage("contraseña incorrecta");
        setTimeout(() => setMessage(""), 2000);
      });
  }

  return (
    <div>
      <h1 className="h1ChangePsw">Change Your Password</h1>
      <hr />
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          newPasswordConfirm: "",
        }}
        validate={(values) => {
          const errors = {
            currentPassword: "",
            newPassword: "",
          };
          if (!values.currentPassword) {
            errors.currentPassword = "Required";
          }
          if (values.newPassword !== values.newPasswordConfirm) {
            errors.newPassword = <Typography sx={{ color: 'error.main' }}>New password doesnt match</Typography>;
          }
          if (values.newPassword.length < 6) {
            errors.newPassword = <Typography sx={{ color: 'error.main' }}>This password is too short</Typography>;
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          /* and other goodies */
        }) => (
          <form
            onSubmit={() => {
              handleSubmit(values);
            }}
          >
            <div className="inputContainer">
              <label className="inputItem">
                Current Password
                <TextField
                  label="Current Password"
                  variant="outlined"
                  type="password"
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                />
              </label>
              <label className="inputItem">
                New Password
                <TextField
                label="New Password"
                variant="outlined"
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
              </label>
              <label className="inputItem">
                Confirm New Password
                <TextField
                label="Confirm Password"
                variant="outlined"
                  type="password"
                  name="newPasswordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPasswordConfirm}
                />
              </label>
              {errors.newPassword && touched.newPassword && errors.newPassword}
              {message}
              <Button sx={{mt: 5}} variant="contained" type="submit">Submit</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withLayout(ChangePassword);
