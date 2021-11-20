const initialState = {
  USERS: [],
};

const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FOLLOW":
      return {
        ...state,
        USERS: state.USERS.map((obj) => {
          if (obj.id === action.id) {
            return {
              ...obj,
              isFollowed: !obj.isFollowed,
            };
          }
          return obj;
        }),
      };

    case "SET_USERS": {
      return {
        ...state,
        USERS: [...action.users], // if [...state.USERS, ...action.users] - 2x users on community page
      };
    }

    default:
      return state;
  }
};

export default communityReducer;
