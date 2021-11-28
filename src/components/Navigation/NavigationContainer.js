import { connect } from "react-redux";

import Navigation from "./Navigation";
import { setAuthUserData } from "./../../redux/authReducer";

const stateDataToProps = (state) => {
  return {
    authData: state.auth.data,
    isAuth: state.auth.isAuth,
  };
};

const dispatchers = {
  setAuthUserData,
};

const NavigationContainer = connect(stateDataToProps, dispatchers)(Navigation);

export default NavigationContainer;
