const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 32, // default 0, max - res.items.totalCount on reqiest class
  currentPage: 1,
  isLoading: true,
};

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FOLLOW":
      return {
        ...state,
        users: state.users.map((obj) => {
          if (obj.id === action.id) {
            return {
              ...obj,
              followed: !obj.followed,
            };
          }
          return obj;
        }),
      };

    case "SET_USERS": {
      return {
        ...state,
        users: action.users,
      };
    }

    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.value,
        isLoading: true,
      };
    }

    case "INCREASE_PAGE_SIZE": {
      return {
        ...state,
        pageSize: action.value,
        isLoading: true,
      };
    }

    case "TOGGLE_FETCHING_DATA": {
      return {
        ...state,
        isLoading: action.value,
      };
    }

    default:
      return state;
  }
};

export const handleChangeFollowing = (userId) => ({ type: "TOGGLE_FOLLOW", id: userId });
export const setUsers = (usersData) => ({ type: "SET_USERS", users: usersData });
export const setCurrentPage = (pageNumber) => ({ type: "SET_CURRENT_PAGE", value: pageNumber });
export const increasePageSize = (count) => ({ type: "INCREASE_PAGE_SIZE", value: count });
export const toggleLoading = (boolean) => ({ type: "TOGGLE_FETCHING_DATA", value: boolean });

export default communityReducer;
