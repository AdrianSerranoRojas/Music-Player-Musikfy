import { useContext, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";

import SelectField from "../../components/SelectField/SelectField";
import SelectFieldMulty from "../../components/SelectFieldMulty/SelectFieldMulty";

import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

import { useDropzone } from "react-dropzone";

import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addSongFile, updateSongFile } from "../../features/song/songsSlice";

const songSchema = Yup.object().shape({
  songName: Yup.string()
    .min(2, "The songName is too short!")
    .max(50, "The songName is too long!")
    .required("The songName is required"),
  songArtist: Yup.string()
    .min(2, "The songArtist is too short!")
    .max(50, "The songArtist is too long!"),
});

function AddDetailsSongForm() {
  const dispatch = useDispatch();
  let signUpError = false;

  const optionsGenre = [
    { value: "Rock", label: "Rock" },
    { value: "Rap", label: "Rap" },
    { value: "Pop", label: "Pop" },
  ];

  const handleSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    songName: "",
    songArtist: "",
    genre: "",
    songAlbum: "",
  };

  const [image, setImage] = useState([]);
  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImage((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
      console.log("el reader", reader);
    });

    console.log("acceptedFiles", acceptedFiles);
    console.log("rejectFiles", rejectFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

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
                      id="songName"
                      name="songName"
                      label="songName"
                      value={values.songName}
                      onChange={handleChange}
                      error={touched.songName && Boolean(errors.songName)}
                      helperText={touched.songName && errors.songName}
                    />
                    <TextField
                      id="songArtist"
                      name="songArtist"
                      label="songArtist"
                      value={values.songArtist}
                      onChange={handleChange}
                      onBlur={submitForm}
                      error={touched.songArtist && Boolean(errors.songArtist)}
                      helperText={touched.songArtist && errors.songArtist}
                    />
                    <TextField
                      id="songAlbum"
                      name="songAlbum"
                      label="songAlbum"
                      value={values.songAlbum}
                      onChange={handleChange}
                      onBlur={submitForm}
                      error={touched.songAlbum && Boolean(errors.songAlbum)}
                      helperText={touched.songAlbum && errors.songAlbum}
                    />
                    <SelectField
                      name="gender"
                      options={optionsGenre}
                      placeholder={"Gender"}
                      submitForm={submitForm}
                    />
                  </Box>
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isValidating || !isValid}
                >
                  Submit Details
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

export default AddDetailsSongForm;
