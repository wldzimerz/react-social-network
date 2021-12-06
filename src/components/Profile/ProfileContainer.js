import { connect } from "react-redux";
import Profile from "./Profile";
import { handleChangeTextArea, handleAddPost, setUserProfile, setUserStatus, handleEnterStatus } from "./../../redux/profileReducer";

const stateDataToProps = (state) => {
  return {
    profilePage: state.profilePage,
    userProfileData: state.profilePage.userProfileData,
    userStatus: state.profilePage.userStatus,
    authData: state.auth.data,
  };
};

const dispatchers = {
  handleChangeTextArea,
  handleAddPost,
  setUserProfile,
  setUserStatus,
  handleEnterStatus,
};

// const ProfileContainer = connect(stateDataToProps, dispatchers)(withRouter(Profile)); // for add match and this params, location, history on props

const ProfileContainer = connect(stateDataToProps, dispatchers)(Profile);

export default ProfileContainer;
