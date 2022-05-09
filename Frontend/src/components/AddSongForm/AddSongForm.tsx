import { useState, useCallback, useEffect } from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";

import { useDropzone } from "react-dropzone";

import { useCreateSongMutation } from "../../services/songApi";

import { CardMedia } from "@mui/material";
import Uicontrols from "../../components/UIcontrols/UIcontrols"

function AddSongForm() {
  let signUpError = false;

  const handleSubmit = (values) => {
    console.log(values);
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
      "audio/*": [".mp3"],
    },
    maxFiles: 1,
  });

  const [createSong, result] = useCreateSongMutation();

  const insertFile = async () => {
    await createSong({ image });
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="h1 h1SingUp">Upload Song</h1>
      </Box>
      {/* DROPZONE */}
      <div>
        <div className="dropzone" {...getRootProps()}>
          <input type="text" placeholder="as" {...getInputProps()} />
          {isDragActive ? "Drag active" : "You can drop your files"}
        </div>
        {image.length > 0 && (
          <div>
            {image.map((image, index) => (
              <CardMedia
                component="img"
                height="140"
                image={image}
                key={index}
                alt="green iguana"
              />
              // <img src={image} key={index} />
            ))}
          </div>
        )}
        {image.length > 0 ? (
          <Button onClick={insertFile} variant="contained" color="primary">
            Upload Song
          </Button>
        ) : (
          <Button
            onClick={insertFile}
            variant="contained"
            color="primary"
            disabled
          >
            Upload Song
          </Button>
        )}
      </div>
      {signUpError && (
        <section className="row row-cols-1 mb-3 border py-3 bg-light">
          <div className="col">
            <h2 className="h2 h2SignUp">Something went wrong</h2>
            <hr />
            <p className="mt-3">{signUpError}</p>
          </div>
        </section>
      )}
    </>
  );
}

export default AddSongForm;
