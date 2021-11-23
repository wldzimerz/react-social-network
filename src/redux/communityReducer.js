const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 32, // default 0
  currentPage: 1,
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
        users: action.users, // if [...state.USERS, ...action.users] - 2x users on community page
        // totalUsersCount: action.value, // set total users count to state
      };
    }

    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.value,
      };
    }

    case "INCREASE_PAGE_SIZE": {
      return {
        ...state,
        pageSize: action.value,
      };
    }

    default:
      return state;
  }
};

export default communityReducer;
