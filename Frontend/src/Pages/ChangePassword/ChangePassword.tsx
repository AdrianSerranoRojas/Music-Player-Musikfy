import withLayout from "../../hoc/withLayout";
import { Formik } from 'formik';
import { changePassword } from "../../firebase/firebase";

function handleSubmit(values) {
    event.preventDefault();
    console.log(values)
    const Password = values.newPassword.toString();
    changePassword(Password);
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
          <input
            type="password"
            name="currentPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.currentPassword}
          />
          <input
            type="password"
            name="newPassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newPassword}
          />
          <input
            type="password"
            name="newPasswordConfirm"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.newPasswordConfirm}
          />
          {errors.newPassword && touched.newPassword && errors.newPassword}
          <button type="submit">
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default withLayout(ChangePassword);