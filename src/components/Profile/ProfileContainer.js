import { connect } from "react-redux";

import Profile from "./Profile";

const stateDataToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    handleChangeTextArea: (text) => {
      dispatch({ type: "UPDATE-NEW-POST-TEXT", value: text });
    },
    handleAddPost: () => {
      dispatch({ type: "ADD-POST" });
    },
  };
};

const ProfileContainer = connect(stateDataToProps, dispatchToProps)(Profile);

export default ProfileContainer;
