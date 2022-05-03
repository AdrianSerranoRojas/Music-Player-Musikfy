import { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import withLayout from "../../hoc/withLayout";
import { createUser, usersSelector } from "../../features/users/usersSlice";
import { getCurrentUserToken } from "../../firebase/firebase";
import { useGetSongsQuery } from "../../services/songApi";
import "./home.scss";
import { useDropzone } from "react-dropzone";

async function fetchUserToken(
  setUserToken: any,
  setLoading: any,
  setError: any
): Promise<void> {
  setLoading(true);
  try {
    const token = await getCurrentUserToken();
    setUserToken(token);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
}
const Home = () => {
  const [userToken, setUserToken] = useState();
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [userFake, setuserFake] = useState({
    email: "",
  });
  const dispatch = useDispatch();
  const use = useSelector(usersSelector);
  console.log(use);
  const { data } = useGetSongsQuery();
  console.log(data);
  const [imaeValuue, setImaeValuue] = useState();
  const [file, setFile] = useState(null);
  const [data2, setData] = useState({ email: "", uid: "" });

  // const currentUser = useContext(AuthContext);

  // const insertFile = async (filesss) => {
  //   setFile(filesss);
  //   console.log("joder con la imagen", file);
  //   const f = new FormData();
  //   f.append("image", file);
  //   console.log(f);
  // await axios.post("http://localhost:4000/sign-up").then(response()=>{console.log(response.data)}).catch(error=>{console.log(error)});
  // await axios.post("http://localhost:4000/sign-up",f,{headers:{'Content-Type':'multipart/form-data'}}).then(response()=>{console.log(response.data)}).catch(error=>{console.log(error)});
  // };
  // const uploadFiles = (e) => {
  //   setFile(e);
  // };
  // const uploadData = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  const [images, setImages] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevState) => [...prevState, reader.result]);
      };
      reader.readAsDataURL(file);
      console.log("el reader",reader);
    });
    
    console.log("acceptedFiles", acceptedFiles);
    console.log("rejectFiles", rejectFiles);
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
  });

  const handleUpload = async () => {
    console.log("estoy de cerca de conseguirlo");
    await axios
      .post("http://localhost:4000/uploadimage", { images })
      .then((response) => console.log(response.data))
      .catch((error) => {
        console.log(error);
      });

    // ,{headers:{'Content-Type':'multipart/form-data'}}).then(response()=>{console.log(response.data)}).catch(error=>{console.log(error)});
    // }
  };

  return (
    <div>
      <div className="dropzone" {...getRootProps()}>
        <input type="text" placeholder="as" {...getInputProps()} />
        {isDragActive ? "Drag active" : "You can drop your files"}
      </div>
      {images.length > 0 && (
        <div>
          {" "}
          {images.map((image, index) => (
            <img src={image} key={index} />
          ))}
        </div>
      )}
      {images.length > 0 && <button onClick={handleUpload}> submit</button>}
      {/* <input
        type="text"
        placeholder="email"
        name="email"
        onChange={(e) => {
          uploadData(e);
        }}
      />
      <input
        type="text"
        placeholder="uid"
        name="uid"
        onChange={(e) => {
          uploadData(e);
        }}
      />
      <input
        type="file"
        name="file"
        onChange={(e) => uploadFiles(e.target.file)}
      />
      <button type="submit" onClick={insertFile}>
        uploadimage
      </button> */}
      {/* <button
        type="submit"
        onClick={() => dispatch(createUser({ username: "pepito" }))}
      >
        click
      </button> */}
    </div>
  );
};
export default withLayout(Home);
