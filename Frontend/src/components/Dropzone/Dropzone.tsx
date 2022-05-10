import { useContext, useState, useEffect, useCallback } from "react";

import { useDropzone } from "react-dropzone";

function Dropzone() {

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
    <div>
      <div className="dropzone" {...getRootProps()}>
        <input type="text" placeholder="as" {...getInputProps()} />
        {isDragActive ? "Drag active" : "You can drop your files"}
      </div>
      {image.length > 0 && (
        <div>
          {" "}
          {image.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </div>
      )}
      {image.length > 0 && <button onClick={insertFile}> submit</button>}
    </div>
  );
}
