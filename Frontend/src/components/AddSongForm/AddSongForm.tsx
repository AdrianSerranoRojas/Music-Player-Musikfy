import { useState, useCallback, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectField from "../../components/SelectField/SelectField";
import SelectFieldMulty from "../../components/SelectFieldMulty/SelectFieldMulty";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { CardMedia } from "@mui/material";
import { TextField } from "@mui/material";

import { useDropzone } from "react-dropzone";

// import useData from "./useData";

import { useDispatch } from "react-redux";
import { addSongFile, updateSongFile } from "../../features/song/songsSlice";
import { useCreateSongMutation } from "../../services/songApi";

const songSchema = Yup.object().shape({
  files: Yup.mixed().required(),
  songName: Yup.string()
    .min(2, "The songName is too short!")
    .max(50, "The songName is too long!")
    .required("The songName is required"),
  songArtist: Yup.string()
    .min(2, "The songArtist is too short!")
    .max(50, "The songArtist is too long!"),
});

const optionsGenre = [
  { value: "Rock", label: "Rock" },
  { value: "Rap", label: "Rap" },
  { value: "Pop", label: "Pop" },
];

const initialValues = {
  files: null,
  songName: "",
  songArtist: "",
  genre: "",
  songAlbum: "",
};

const UploadComponent = (props) => {
  const { setFieldValue, setImage } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "audio/*": [".mp3"],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setImage((prevState) => [...prevState, reader.result]);
        };
        reader.readAsDataURL(file);
        console.log("el reader", reader);
      });
      setFieldValue("files", acceptedFiles);
    },
  });
  return (
    <div>
      {}
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};

function AddSongForm() {
  let signUpError = false;
  const [image, setImage] = useState([]);
  const [createSong, result] = useCreateSongMutation();

  const handleSubmit = async (values) => {
    console.log(values);
    await createSong(image);
  };

  const insertFile = async () => {
    await createSong(image);
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
              setFieldValue,
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
                  {/* dropzone */}
                  <div className="form-group">
                    <label htmlFor="file">Multiple files upload</label>

                    <UploadComponent
                      setFieldValue={setFieldValue}
                      setImage={setImage}
                    />
                    {values.files &&
                      values.files.map((file, i) => (
                        <li key={i}>
                          {`File:${file.name} Type:${file.type} Size:${file.size} bytes`}{" "}
                        </li>
                      ))}
                  </div>
                  {/* dropzone */}
                  {values.files && (
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
                        placeholder={values.files[0].name}
                        error={touched.songName && Boolean(errors.songName)}
                        helperText={touched.songName && errors.songName}
                      />
                      <TextField
                        id="songArtist"
                        name="songArtist"
                        label="songArtist"
                        value={values.songArtist}
                        onChange={handleChange}
                        // onBlur={submitForm}
                        error={touched.songArtist && Boolean(errors.songArtist)}
                        helperText={touched.songArtist && errors.songArtist}
                      />
                      <TextField
                        id="songAlbum"
                        name="songAlbum"
                        label="songAlbum"
                        value={values.songAlbum}
                        onChange={handleChange}
                        // onBlur={submitForm}
                        error={touched.songAlbum && Boolean(errors.songAlbum)}
                        helperText={touched.songAlbum && errors.songAlbum}
                      />
                      <SelectField
                        name="gender"
                        options={optionsGenre}
                        placeholder={"Gender"}
                        // submitForm={submitForm}
                      />
                    </Box>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isValidating || !isValid || !values.files}
                >
                  Submit Details
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}

export default AddSongForm;
