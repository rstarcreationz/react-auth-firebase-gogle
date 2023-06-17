import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Components/AuthPages/Login";
import Register from "../Components/AuthPages/Register";
import Home from "../Components/MainPages/Home";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function TheRoutes () {
    return (
        <React.Fragment>
            <BrowserRouter>
            <Routes>
                <Route path="/" exact="true" element={<PrivateRoute> <Home/> </PrivateRoute>} />
                <Route path="/login" exact="true" element={<PublicRoute>
                    <Login/>
                </PublicRoute>} />
                <Route path="/signup" exact="true" element={<PublicRoute>
                    <Register />
                </PublicRoute>} />
            </Routes>
            </BrowserRouter>
        </React.Fragment>
    )
}