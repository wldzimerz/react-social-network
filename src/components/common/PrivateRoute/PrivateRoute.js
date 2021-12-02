import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("userAuth");

  return <Route {...rest} render={(props) => (isAuth === "true" ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
