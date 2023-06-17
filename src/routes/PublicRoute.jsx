import { Navigate } from "react-router-dom";

function PublicRoute({ children }) {
    const auth = localStorage.getItem("userToken");
    return !auth ? children : <Navigate to="/" />;
  }

export default PublicRoute;