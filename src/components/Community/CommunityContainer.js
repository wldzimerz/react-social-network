import { connect } from "react-redux";

import Community from "./Community";
import { handleChangeFollowing, setUsers, setCurrentPage, increasePageSize, toggleLoading } from "./../../redux/communityReducer";

const stateDataToProps = (state) => {
  return {
    users: state.communityPage.users,
    pageSize: state.communityPage.pageSize,
    totalUsersCount: state.communityPage.totalUsersCount,
    currentPage: state.communityPage.currentPage,
    isLoading: state.communityPage.isLoading,
  };
};

const dispatchers = {
  handleChangeFollowing,
  setUsers,
  setCurrentPage,
  increasePageSize,
  toggleLoading,
};

const CommunityContainer = connect(stateDataToProps, dispatchers)(Community);

export default CommunityContainer;
