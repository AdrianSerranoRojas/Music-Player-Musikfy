import withLayout from "../../hoc/withLayout"

import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { RiEdit2Fill } from 'react-icons/ri';

import "./profile.scss"

function Profile() {
    return(
        <>
            <div className="pageProfile">
                <section className="editProfile">
                    <h2 className="profileTitle">Edit profile</h2>
                    <h3 className="profileSubtitle">Email</h3>
                        <h4 className="profileData">admin@gmail.com</h4>
                        <RiEdit2Fill />
                    <h3 className="profileSubtitle">Password</h3>
                        <h4 className="profileData">**********</h4>
                        <RiEdit2Fill />
                    <h3 className="profileSubtitle">Username</h3>
                        <h4 className="profileData">RogerMateu2001</h4>
                        <RiEdit2Fill />
                    <h3 className="profileSubtitle">Birthday</h3>
                        <h4 className="profileData">20-04-2001</h4>
                        <RiEdit2Fill />
                    <h3 className="profileSubtitle">Country</h3>
                        <h4 className="profileData">Spain</h4>
                        <RiEdit2Fill />
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
                    <div className="profileButtons">
                        <Button id="profileCancel "variant="danger">Cancel</Button>
                        <Button variant="success">Accept</Button>{' '}
                    </div>

                </section>
            </div>
        </>
    )
}

export default withLayout(Profile);
