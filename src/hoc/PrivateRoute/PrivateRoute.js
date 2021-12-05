import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuth = localStorage.getItem("userAuth");

  if (isAuth !== "true") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
