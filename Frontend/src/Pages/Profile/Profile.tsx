import { useContext } from "react";
import withLayout from "../../hoc/withLayout";

import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import { MdOutlineEdit } from "react-icons/md";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiCake } from "react-icons/bi";
import { BsHouseDoor, BsGenderAmbiguous } from "react-icons/bs";

import { useGetUserQuery } from "../../services/userApi";
import AuthContext from "../../context/AuthContext";

import EditInfo from "../../components/EditInfo/EditInfo";

import "./profile.scss";

function Profile() {
  const currentUser = useContext(AuthContext);
  if (currentUser != null) {
    const { data, error, isLoading } = useGetUserQuery(currentUser.uid);
    console.log(data);
  }
  return (
    <>
      <div className="mainProfile sketchy">
        <h1 className="h2">Log in</h1>
        <hr />
        <div className="pageProfile">
          <section className="editProfile">
            <h3 className="profileTitle">
              <AiOutlineMail /> Email
            </h3>
            <EditInfo value="caxon@maquina.es" />
            <hr />
            <h3 className="profileTitle">
              <RiLockPasswordLine /> Password
            </h3>
            <div className="gridFixer">
              <h4 className="profileData">*********</h4>
              <button>
                <MdOutlineEdit />
              </button>
            </div>
            <hr />
            <h3 className="profileTitle">
              <AiOutlineUser /> Username
            </h3>
            <EditInfo value="caxonpok" />
            <hr />
            <h3 className="profileTitle">
              <BiCake /> Birthday
            </h3>
            <EditInfo value="08-05-1996" />
            <hr />
            <h3 className="profileTitle">
              <BsHouseDoor /> Country
            </h3>
            <EditInfo value="Spain" />
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
              src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1"
              alt="profile image"
            />
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Change your image</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </section>
        </div>
      </div>
    </>
  );
}

export default withLayout(Profile);
