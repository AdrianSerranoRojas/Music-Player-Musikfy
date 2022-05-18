import Select from "react-select";
import { useFormikContext, useField } from "formik";

export default function SelectField({
  options,
  submitForm = () => {},
  ...props
}) {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(props.name);

  function handleChange(selected) {
    setFieldValue(props.name, selected);
  }
  function handleBlur() {
    setFieldTouched(props.name, true);
  }
  
  return (
    <>
      <div className="mb-3">
        {/* <label className="form-label" htmlFor={props.name}>
          {props.placeholder}
        </label> */}
      <Select
        options={options}
        {...field}
        {...props}
        onChange={(event) => {
          handleChange(event), submitForm();
        }}
        onBlur={handleBlur}
        placeholder={props.placeholder}
        // submitForm={submitForm}
      />
      </div>
      {meta.touched && meta.error ? <span>{meta.error.value}</span> : null}
    </>
  );
}
