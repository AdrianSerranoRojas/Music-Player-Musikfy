import { useState } from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useDropzone } from "react-dropzone";

import { useCreateSongMutation } from "../../services/songApi";
import { CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";
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
      <Box>
        <Typography variant="h3" align="center">
          Upload Song
        </Typography>
      </Box>
      {/* DROPZONE */}

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
        />
      )}
    </>
  );
}

export default AddSongForm;
