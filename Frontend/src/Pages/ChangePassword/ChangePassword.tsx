import withLayout from "../../hoc/withLayout";
import { Formik } from "formik";
import { changePassword, reauthenticate } from "../../firebase/firebase";
import { useState, useEffect } from "react";

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
            errors.newPassword = "new password doesnt match";
          }
          if (values.newPassword.length < 6) {
            errors.newPassword = "this password is too short";
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
                <input
                  type="password"
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                />
              </label>
              <label className="inputItem">
                New Password
                <input
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
              </label>
              <label className="inputItem">
                Confirm New Password
                <input
                  type="password"
                  name="newPasswordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPasswordConfirm}
                />
              </label>
              {errors.newPassword && touched.newPassword && errors.newPassword}
              {message}
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default withLayout(ChangePassword);
