import withLayout from "../../hoc/withLayout";
import { Formik } from 'formik';
import { changePassword, reauthenticate } from "../../firebase/firebase";

import "./ChangePassword.scss";

async function handleSubmit(values) {
    event.preventDefault();
    if(values.newPassword != values.newPasswordConfirm){
        return;
    }
    reauthenticate(values.currentPassword).then(()=> changePassword(values.newPassword)).catch(()=> console.log("contraseña incorrecta"));
}
const ChangePassword = () => (<div>
    <h1>Change Your Password</h1>
    <Formik
    initialValues={{ currentPassword: '', newPassword: '' , newPasswordConfirm: ''}}
    validate={values => {
        const errors = {
            currentPassword: '',
            newPassword: '',
        };
        if (!values.currentPassword) {
          errors.currentPassword = 'Required';
        }
        if ( values.newPassword !== values.newPasswordConfirm) {
            errors.newPassword = 'new password doesnt match';
        }
        if (values.newPassword.length < 6){
            errors.newPassword = 'this password is too short';
        }
        // if (message != ""){
        //     errors.currentPassword = 'contraseña actual incorrecta';
        // }
        return errors;
        }}
    onSubmit={(values) => {
        console.log(values);
        console.log("caradepolla");
        }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        /* and other goodies */
      }) => (
        <form onSubmit={() => {
            handleSubmit(values)}}>
            <div className="inputContainer sketchy">
                <label className="inputItem" >Current Password
                <input
                type="password"
                name="currentPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.currentPassword}
                />
                </label>
                <label className="inputItem">New Password
                <input
                type="password"
                name="newPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
                />
                </label>
                <label className="inputItem">Confirm New Password
                <input
                type="password"
                name="newPasswordConfirm"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPasswordConfirm}
                />
                </label>
                {errors.newPassword && touched.newPassword && errors.newPassword}
                <button type="submit">
                Submit
                </button>
            </div>
        </form>
      )}
    </Formik>
  </div>
);

export default withLayout(ChangePassword);