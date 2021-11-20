import { connect } from "react-redux";

import Community from "./Community";

const stateDataToProps = (state) => {
  return {
    communityPage: state.communityPage,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    handleChangeFollowing: (userId) => {
      dispatch({ type: "TOGGLE_FOLLOW", id: userId });
    },
    setUsers: (usersData) => {
      dispatch({ type: "SET_USERS", users: usersData });
    },
  };
};

const CommunityContainer = connect(stateDataToProps, dispatchToProps)(Community);

export default CommunityContainer;
