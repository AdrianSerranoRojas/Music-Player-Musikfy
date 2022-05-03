import { useContext, useState, useEffect } from "react";
import withLayout from "../../hoc/withLayout";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import EditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import LockIcon from '@mui/icons-material/Lock';
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import TransgenderIcon from '@mui/icons-material/Transgender';



import { useGetUserQuery, useUpdateUserMutation } from "../../services/userApi";
import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import "./profile.scss";

function Profile() {
  const currentUser = useContext(AuthContext);
  const uid = currentUser.uid;
  console.log(uid);

  const [updateUser, result] = useUpdateUserMutation();
  console.log(result);

  const { data, error, isLoading, isSuccess } = useGetUserQuery(
    currentUser.uid
  );

  const [editUser, setEditUser] = useState({});
  console.log(editUser);

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
                control="userName"
              />
              <hr />
              <h3 className="profileTitle">
                <CakeIcon /> Birthday
              </h3>
              <EditInfo
                value={editUser.birthday ? editUser.birthday : data.data.birthday}
                setEditUser={setEditUser}
                control="birthday"
              />
              <hr />
              <h3 className="profileTitle">
                <HomeIcon /> Country
              </h3>
              <EditInfo
                value={editUser.country ? editUser.country : data.data.country}
                setEditUser={setEditUser}
                control="country"
              />
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
                src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
                alt="profile image"
              />
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Change your image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <button onClick={() => updateUser({ uid, editUser })}>
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
