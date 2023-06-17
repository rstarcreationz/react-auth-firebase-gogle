import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/AuthContextWrapper";

export default function Register (){
    const navigate = useNavigate();
    const {setLoginDetail, loginDetail, signUp} = useUserAuth();
    const [showPass, setShowPass] = useState(false)
    const handleSubmit = async(e)=> {
        e.preventDefault();

        try {
            await signUp();
            navigate("/login")
        } catch (error) {
         console.log("error", error)   
        }
    }

    function clickHandler () {
        setShowPass(!showPass)
    }

    return (
        <React.Fragment>
            <Container className="my-5 px-5">
                <Row className="justify-content-center align-items-center">
                    <Col lg={6}>
                        <Card>
                            <Card.Header>
                                <h5>Signup with firebase</h5>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={(e)=> handleSubmit(e)}>
                                    <Form.Group>
                                        <label htmlFor="email">Email Address</label>
                                        <Form.Control id="email" type="email" name="email" placeholder="Enter Your Email" 
                                        onChange={(e)=> setLoginDetail({
                                            ...loginDetail,
                                            email: e.target.value
                                        }) }
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <label htmlFor="password">Password</label>
                                        <div className="d-flex justify-content-between">
                                        <Form.Control id="password" type={showPass ? "text" : "password"}  name="password" placeholder="Enter Password"  onChange={(e)=> setLoginDetail({
                                            ...loginDetail,
                                            password: e.target.value
                                        }) } />
                                       <span className="p-2">
                                       <i onClick={clickHandler} class={showPass ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
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
                                    <p>Already have an account <Link to="/signup"> Login </Link> </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}