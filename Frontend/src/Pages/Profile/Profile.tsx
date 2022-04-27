import withLayout from "../../hoc/withLayout"

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { MdOutlineEdit } from 'react-icons/md';
import EditInfo from "../../components/EditInfo/Editinfo";

import "./profile.scss"

function Profile() {
    return(
        <>
            <div className="pageProfile sketchy">
                <section className="editProfile">
                    <h2 className="profileTitle">Edit profile</h2>
                    <h3 className="profileSubtitle">Email</h3>
                    <EditInfo 
                    value= "caxon@maquina.es"
                    />
                    <h3 className="profileSubtitle">Password</h3>
                    <h4 className="profileData">*********</h4>
                    <button>
                    <MdOutlineEdit />
                    </button>
                    <h3 className="profileSubtitle">Username</h3>
                    <EditInfo 
                    value= "caxonpok"
                    />
                    <h3 className="profileSubtitle">Birthday</h3>
                    <EditInfo 
                    value= "08-05-1996"
                    />
                    <h3 className="profileSubtitle">Country</h3>
                    <EditInfo 
                    value= "Spain"
                    />
                    <h3 className="profileSubtitle">Gender</h3>
                    <Form.Select aria-label="Default select example">
                        <option>Select your gender</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="O">Other</option>
                    </Form.Select>
                </section>
                <section className="ProfileEditImg">
                    <Image className="profileImg" roundedCircle={true} src="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" alt="profile image" />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Change your image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </section>
            </div>
        </>
    )
}

export default withLayout(Profile);
