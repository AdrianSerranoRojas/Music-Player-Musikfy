import { useContext, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useDropzone } from "react-dropzone";

import withLayout from "../../hoc/withLayout";

import { useGetUserQuery, useUpdateUserMutation } from "../../services/userApi";

import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import LockIcon from "@mui/icons-material/Lock";

// import "./profile.scss";

const Widget = styled("div")(({ theme }) => ({
  overflowX: "hidden",
  padding: 16,
  borderRadius: 16,
  width: "80%",
  maxWidth: "100%",
  marginTop: "2%",
  marginLeft: "12.5%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

function Profile() {
  const currentUser = useContext(AuthContext);
  const uid = currentUser.uid;
  const [updateUser, result] = useUpdateUserMutation();
  const { data: user, isSuccess } = useGetUserQuery(currentUser.uid);
  const [editUser, setEditUser] = useState({});
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

  const insertFile = async () => {
    updateUser({ uid, editUser, image });
  };

  return (
    <>
      {isSuccess && (
        <Widget>
          <h1>Profile</h1>
          <hr />
          <h3>User name</h3>
          <EditInfo
            value={editUser?.userName ? editUser.userName : user.data.userName}
            setEditUser={setEditUser}
            control="userName"
            editUser={undefined}
          />
          <hr />
          <h3>Image</h3>
          {user?.data?.image?.url &&
            (image.length > 0 && (
              <Image
                className="profileImg"
                roundedCircle={true}
                src={image.length > 0 ? image : user?.data?.image?.url}
                alt="profile image"
              />
            ))}
          <div>
            <Widget className="dropzone" {...getRootProps()}>
              <input type="text" placeholder="as" {...getInputProps()} />
              {isDragActive ? "Drag active" : "You can drop your files"}
            </Widget>
          </div>
          <hr />
          <h3>Submit</h3>
          <Button variant="contained" color="primary" onClick={insertFile}>
            Submit
          </Button>
          <hr />
          <h3>Password</h3>
          <section>
            <Button variant="contained" color="primary">
              <Link style={{ textDecoration: "none" }} to="/changePassword">
                <LockIcon />
                Change Password
              </Link>
            </Button>
          </section>
        </Widget>
      )}
    </>
  );
}

export default withLayout(Profile);
