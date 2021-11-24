import { connect } from "react-redux";

import CommunityClass from "./Community";

const stateDataToProps = (state) => {
  return {
    users: state.communityPage.users,
    pageSize: state.communityPage.pageSize,
    totalUsersCount: state.communityPage.totalUsersCount,
    currentPage: state.communityPage.currentPage,
    isLoading: state.communityPage.isLoading,
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
    increasePageSize: (count) => {
      dispatch({ type: "INCREASE_PAGE_SIZE", value: count });
    },
    toggleLoading: (boolean) => {
      dispatch({ type: "TOGGLE_FETCHING_DATA", value: boolean });
    },
  };
};

const CommunityContainer = connect(stateDataToProps, dispatchToProps)(CommunityClass);

export default CommunityContainer;
