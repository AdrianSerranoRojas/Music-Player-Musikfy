import { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { useCreateSongMutation } from "../../services/songApi";
import { CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const Widget = styled("div")(({ theme }) => ({
  overflowX: "hidden",
  padding: 16,
  borderRadius: 16,
  width: "80%",
  maxWidth: "100%",
  marginTop: "4%",
  marginLeft: "12.5%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function AddSongForm() {

  const [image, setImage] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage((prevState) => [...prevState, reader.result]);
      };
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
    await createSong(image);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <h1 className="h1 h1SingUp">Upload Song</h1>
      </Box>
      {/* DROPZONE */}
      <div>
        <Widget className="dropzone" {...getRootProps()}>
          <input type="text" placeholder="as" {...getInputProps()} />
          {isDragActive ? "Drag active" : "You can drop your files"}
        </Widget>
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
      {result.isSuccess && (
        <section className="row row-cols-1 mb-3 border py-3 bg-light">
          <div className="col">
            <h2 className="h2 h2SignUp">Congrats</h2>
            <hr />
          </div>
        </section>
      )}
    </>
  );
}

export default AddSongForm;

// const UploadComponent = (props) => {
//   const { setFieldValue, setImage } = props;

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: {
//       "audio/*": [".mp3"],
//     },
//     onDrop: (acceptedFiles) => {
//       acceptedFiles.forEach((file) => {
//         const reader = new FileReader();
//         reader.onload = () => {
//           setImage((prevState) => [...prevState, reader.result]);
//         };
//         reader.readAsDataURL(file);
//         console.log("el reader", reader);
//       });
//       setFieldValue("files", acceptedFiles);
//     },
//   });
