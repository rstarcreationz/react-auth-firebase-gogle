import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/AuthContextWrapper";

export default function Login() {
    const navigate = useNavigate();
    const { loginDetail, setLoginDetail, logIn } = useUserAuth();
    const [showPass, setShowPass] = useState();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await logIn();
            navigate('/')
        } catch (error) {
            console.log("error", error);
        }
    }

    function clickHandler () {
        setShowPass(!showPass)
    }

    return (
        <React.Fragment>
            <div className="h-100 py-5">
                <Container>
                    <Row className="justify-content-center align-items-center">
                        <Col lg={6}>
                            <Card>
                                <Card.Header>
                                    <h5>Login with firebase</h5>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={(e) => submitHandler(e)}>
                                        <Form.Group>
                                            <label className="py-2" htmlFor="email">Email Address</label>
                                            <Form.Control id="email" type="email" name="email" placeholder="Enter Your Email" onChange={(e) => setLoginDetail({
                                                ...loginDetail,
                                                email: e.target.value
                                            })} />
                                        </Form.Group>

                                        <Form.Group>
                                            <label className="py-2" htmlFor="password">Password</label>
                                            <div className="d-flex justify-content-between">

                                                <Form.Control id="password" type={showPass ? "text" : "password"}  name="password" placeholder="Enter Password" onChange={(e) => setLoginDetail({
                                                    ...loginDetail,
                                                    password: e.target.value
                                                })} />

                                                <span className="p-2">
                                                    <i onClick={clickHandler} class={!showPass ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                                                </span>
                                            </div>
                                        </Form.Group>

                                        <Form.Group className="pt-3">
                                            <Button type="submit" className="btn btn-primary">
                                                Submit
                                            </Button>
                                        </Form.Group>
                                    </Form>

                                    <div className="text-center">
                                        <p>Don't have an account <Link to="/signup"> Sign Up </Link> </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}