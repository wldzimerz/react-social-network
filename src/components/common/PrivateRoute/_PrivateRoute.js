import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />;
};

export default PrivateRoute;
