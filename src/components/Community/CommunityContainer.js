import { connect } from "react-redux";

import Community from "./Community";

const stateDataToProps = (state) => {
  return {
    users: state.communityPage.users,
    pageSize: state.communityPage.pageSize,
    totalUsersCount: state.communityPage.totalUsersCount,
    currentPage: state.communityPage.currentPage,
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
    // setUsers: (usersData, totalCount) => { // set total users count to state
    //   dispatch({ type: "SET_USERS", users: usersData, value: totalCount });
    // },
    setCurrentPage: (pageNumber) => {
      dispatch({ type: "SET_CURRENT_PAGE", value: pageNumber });
    },
    increasePageSize: (number) => {
      dispatch({ type: "SET_PAGE_SIZE", value: number });
    },
  };
};

const CommunityContainer = connect(stateDataToProps, dispatchToProps)(Community);

export default CommunityContainer;
