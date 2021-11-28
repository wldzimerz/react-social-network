const initialState = {
  data: {
    id: null,
    login: null,
    email: null,
  },
  isAuth: false,
  messages: [],
  fieldsErrors: [],
  resultCode: 0,
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DATA": {
      return {
        ...state,
        data: action.data,
        isAuth: true,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (data) => ({ type: "SET_USER_DATA", data });

export default authReducer;
