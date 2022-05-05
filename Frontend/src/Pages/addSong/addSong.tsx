import withLayout from "../../hoc/withLayout"

import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import InputSong from "../../components/InputSong/inputSong";

import EditInfo from "../../components/EditInfo/EditInfo";

import "./addSong.scss"

function addSong() {
    return(
        <>
            <div className="mainAddSong sketchy">
            <h1 className="h2">Add Songs!</h1>
            <hr />
            <section>
            <Container>
            <Row>
                <Col>
                    <form action="#">
                    <InputSong value="Enter your name"/>
                    <InputSong value="Enter yout artist name"/>
                    <InputSong value="Enter the musical genre"/>
                    <InputSong value="Enter the album name"/>
                    <InputSong value="Enter your country"/>
                    </form>
                </Col>
                <Col>
                    <img src="https://res.cloudinary.com/carapolla/image/upload/v1651140381/usersPictures/no_image_xselbo.png" alt="no image" className="imgAddSong" />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Select your image</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
                </Row>
                </Container>
                <hr />
                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button size="sm">Upload Song</Button>{' '}
                </Stack>
            </section>
            </div>
        </>
    )
}

export default withLayout(addSong);