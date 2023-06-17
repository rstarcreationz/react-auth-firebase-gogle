import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate();
    function logoutHandler () {
        localStorage.clear("userToken");
        navigate('/login')
    }

    return (
        <React.Fragment>
            <div className="text-center">
                <h5>Welcome </h5>
                <Button type="button" onClick={logoutHandler}>Logout</Button>
            </div>
        </React.Fragment>
    )
}