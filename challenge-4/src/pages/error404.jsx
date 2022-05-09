import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";
import error404Image from '../assets/images/404_error.jpg'


function Page404() {
    return (
            <React.Fragment>
                <Container fluid className="">
                    <Row className="vh-100 d-flex justify-content-center align-items-center p-0 m-0">
                        <Col xs="lg" className="d-flex justify-content-center ">
                            <img src={error404Image} className="img-error" alt="" />
                        </Col>
                        <Col xs="lg" className="d-flex flex-column align-items-center">
                            <h1 className="error-text">ERROR</h1>
                            <Link to={"/"}><Button color="primary" className="rounded-pill px-4 py-2 mt-4">Back To Home</Button></Link>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }

export default Page404;