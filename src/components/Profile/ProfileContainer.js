// import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Profile from "./Profile";
import { handleChangeTextArea, handleAddPost, setUserProfile } from "./../../redux/profileReducer";

const stateDataToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userProfileData: state.profilePage.userProfileData,
    authData: state.auth.data,
    isAuth: state.auth.isAuth,
  };
};

const dispatchers = {
  handleChangeTextArea,
  handleAddPost,
  setUserProfile,
};

// const ProfileContainer = connect(stateDataToProps, dispatchers)(withRouter(Profile)); // for add match and this params, location, history on props

const ProfileContainer = connect(stateDataToProps, dispatchers)(Profile);

export default ProfileContainer;
