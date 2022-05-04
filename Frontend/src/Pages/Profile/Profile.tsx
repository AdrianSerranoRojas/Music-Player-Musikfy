import { useContext, useState, useEffect, useCallback } from "react";
import withLayout from "../../hoc/withLayout";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { useDropzone } from "react-dropzone";

import EditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LockIcon from "@mui/icons-material/Lock";
import CakeIcon from "@mui/icons-material/Cake";
import HomeIcon from "@mui/icons-material/Home";
import TransgenderIcon from "@mui/icons-material/Transgender";

import { useGetUserQuery, useUpdateUserMutation } from "../../services/userApi";
import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import "./profile.scss";

function Profile() {
  const currentUser = useContext(AuthContext);
  const uid = currentUser.uid;

  const [updateUser, result] = useUpdateUserMutation();

  const { data, isSuccess } = useGetUserQuery(currentUser.uid);

  const [editUser, setEditUser] = useState({});
  const [file, setFile] = useState(null);
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
    //   const newFile = new FormData();
    //   newFile.append("file", file, file.name);
    //   newFile.append("type", file.type);
    //   newFile.append("title", "my_title");
    //   await setImage(newFile);
    //   console.log(file);
    //   updateUser({ uid, editUser, image });
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImage((prevState) => [...prevState, reader.result]);
    };
    // addBanner(newFile).unwrap().then( () => ...
    //   };
    updateUser({ uid, editUser, image });
  };

  useEffect(() => {
    console.log(image);
  }, [image]);

  return (
    <>
      {isSuccess && (
        <div className="mainProfile sketchy">
          <h1 className="h2">Log in</h1>
          <hr />
          <div className="pageProfile">
            <section className="editProfile">
              <h3 className="profileTitle">
                <PersonOutlineIcon /> Username
              </h3>
              <EditInfo
                value={editUser.userName ? editUser.userName : data.data.userName}
                setEditUser={setEditUser}
                control="userName" editUser={undefined}              />
              <hr />
              <h3 className="profileTitle">
                <CakeIcon /> Birthday
              </h3>
              <EditInfo
                value={editUser.birthday ? editUser.birthday : data.data.birthday}
                setEditUser={setEditUser}
                control="birthday" editUser={undefined}              />
              <hr />
              <h3 className="profileTitle">
                <HomeIcon /> Country
              </h3>
              <EditInfo
                value={editUser.country ? editUser.country : data.data.country}
                setEditUser={setEditUser}
                control="country" editUser={undefined}              />
              <hr />
              <h3 className="profileTitle">
                <TransgenderIcon /> Gender
              </h3>
              <div className="gridFixer">
                <Form.Select aria-label="Default select example">
                  <option>Select your gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Form.Select>
                <button>
                  <EditOutlinedIcon />
                </button>
              </div>
            </section>
            <section className="ProfileEditImg">
              <Image
                className="profileImg"
                roundedCircle={true}
                src={image ? image : data.data.image.url}
                alt="profile image"
              />
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit" onClick={insertFile}>
                uploadimage
              </button> 

              {/* <div>
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
                {image.length > 0 && (
                  <button onClick={insertFile}> submit</button>
                )}
              </div> */}


              <button onClick={() => updateUser({ uid, editUser, image })}>
                Confirm Changes
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default withLayout(Profile);
