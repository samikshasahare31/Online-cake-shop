import React from 'react'
import "../style/contact.css"
import img from "../images/newcake.avif"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contactContainer'>
      <div className='contactImgContainer'>
        <img src={img} />
      </div>
      <div className='contactBox'>
      <Container fluid="md" className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <Form>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formSubject" className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Enter the subject" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mb-4">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Contact