import { useContext, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useDropzone } from "react-dropzone";
import Typography from "@mui/material/Typography";
import withLayout from "../../hoc/withLayout";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { useGetUserQuery, useUpdateUserMutation } from "../../services/userApi";

import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

import LockIcon from "@mui/icons-material/Lock";
import "./profile.scss";

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
    theme.palette.mode === "dark" ? "#0000000" : "#ffffff0",

}));

function Profile() {
  const currentUser = useContext(AuthContext);
  const uid = currentUser.uid;
  const [updateUser, result] = useUpdateUserMutation();
  const { data: user, isSuccess, refetch } = useGetUserQuery(currentUser.uid);
  const [editUser, setEditUser] = useState({});
  const [image, setImage] = useState([]);
  const navigate = useNavigate();

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
    refetch();
    navigate("/");
  };

  return (
    <>
      {isSuccess && (
        <Widget>
          <Typography align="center" variant="h3">
            Profile
          </Typography>
          <hr />
          <Typography align="center" variant="h4">
            User name
          </Typography>

          <div className="centerdiv">
          <EditInfo
              value={editUser ? "UserName" : user.data.userName}
              setEditUser={setEditUser}
              control="userName"
              editUser={undefined}
              //
            />
          </div>
         


          <hr />
          <Typography align="center" variant="h4">
            Image
          </Typography>

          {user?.data?.image?.url && image.length > 0 && (
            <Image
              className="profileImg"
              roundedCircle={true}
              src={image.length > 0 ? image : user?.data?.image?.url}
              alt="profile image"
            />
          )}
          <div>
            <Widget className="dropzone" {...getRootProps()}>
              <input type="text" placeholder="as" {...getInputProps()} />
              {isDragActive ? "Drag active" : "You can drop your files"}
            </Widget>
          </div>
          <hr />
          <Typography align="center" variant="h4">
            Password
          </Typography>
          <Box sx={{ my: 1 }}textAlign="center">
            <Button variant="contained" color="primary">
              <Link style={{ textDecoration: "none" }} to="/changePassword">
                <LockIcon />
                Change Password
              </Link>
            </Button>
          </Box>
          <hr />
          <Typography align="center" variant="h4">
            Submit changed information
          </Typography>
          <Box sx={{ my: 1 }} textAlign="center">
          <Button variant="contained" color="primary" onClick={insertFile}>
            Submit
          </Button>
          </Box>
        </Widget>
      )}
    </>
  );
}

export default withLayout(Profile);
