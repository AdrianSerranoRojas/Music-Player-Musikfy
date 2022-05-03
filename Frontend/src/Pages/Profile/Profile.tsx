import { useContext, useState, useEffect } from "react";
import withLayout from "../../hoc/withLayout";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiCake } from "react-icons/bi";
import { BsHouseDoor, BsGenderAmbiguous } from "react-icons/bs";

import { useGetUserQuery, useUpdateUserMutation } from "../../services/userApi";
import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import "./profile.scss";

function Profile() {
  const currentUser = useContext(AuthContext);
  const uid = currentUser.uid;

  const [updateUser, result] = useUpdateUserMutation();

  const { data, error, isLoading, isSuccess } = useGetUserQuery(
    currentUser.uid
  );

  const [editUser, setEditUser] = useState({});

  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);

  const insertFile = async () => {
    // const newFile = new FormData()
    // newFile.append("file", file, file.name);
    // newFile.append("type", file[0].type);
    // newFile.append("title", "my_title");
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      console.log(reader.result);
      setImage(reader.result);
      updateUser({ uid, editUser, image });
    };
    console.log(file);
    console.log(image);
    // addBanner(newFile).unwrap().then( () => ...
    //   };
  };

  return (
    <>
      {isSuccess && (
        <div className="mainProfile sketchy">
          <h1 className="h2">Log in</h1>
          <hr />
          <div className="pageProfile">
            <section className="editProfile">
              <h3 className="profileTitle">
                <AiOutlineUser /> Username
              </h3>
              <EditInfo
                value={
                  editUser.userName ? editUser.userName : data.data.userName
                }
                setEditUser={setEditUser}
                control="userName"
              />
              <hr />
              <h3 className="profileTitle">
                <BiCake /> Birthday
              </h3>
              <EditInfo
                value={
                  editUser.birthday ? editUser.birthday : data.data.birthday
                }
                setEditUser={setEditUser}
                control="birthday"
              />
              <hr />
              <h3 className="profileTitle">
                <BsHouseDoor /> Country
              </h3>
              <EditInfo
                value={editUser.country ? editUser.country : data.data.country}
                setEditUser={setEditUser}
                control="country"
              />
              <hr />
              <h3 className="profileTitle">
                <BsGenderAmbiguous /> Gender
              </h3>
              <div className="gridFixer">
                <Form.Select aria-label="Default select example">
                  <option>Select your gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                  <option value="O">Other</option>
                </Form.Select>
                <button>
                  <MdOutlineEdit />
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
              {/* <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Change your image</Form.Label>
                <Form.Control type="file" />
              </Form.Group> */}
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
