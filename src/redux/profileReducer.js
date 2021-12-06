const initialState = {
  POSTDATA: [
    { text: "Lorem, ipsum.", time: "07:45", likes: 112 },
    { text: "Lorem ipsum dolor sit amet.", time: "19:03", likes: 54 },
    { text: "Lorem ipsum dolor sit.", time: "17:59", likes: 23 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing.", time: "13:10", likes: 5 },
    { text: "Nihil, accusantium.", time: "14:54", likes: 14 },
    { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", time: "09:15", likes: 0 },
  ],
  newPostText: "",
  userProfileData: "",
  userStatus: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_POST_TEXT":
      return {
        ...state,
        newPostText: action.value,
      };

    case "ADD_POST":
      const newPost = {
        text: state.newPostText,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        likes: 0,
      };
      return {
        ...state,
        POSTDATA: [...state.POSTDATA, newPost],
        newPostText: "",
      };

    case "SET_USER_PROFILE_DATA": {
      return {
        ...state,
        userProfileData: action.data,
      };
    }

    case "CHANGE_USER_STATUS": {
      return {
        ...state,
        userStatus: action.body,
      };
    }

    case "SET_USER_STATUS": {
      return {
        ...state,
        userStatus: action.value,
      };
    }

    default:
      return state;
  }
};

export const handleChangeTextArea = (text) => ({ type: "UPDATE_NEW_POST_TEXT", value: text });
export const handleAddPost = () => ({ type: "ADD_POST" });
export const setUserProfile = (data) => ({ type: "SET_USER_PROFILE_DATA", data });
export const setUserStatus = (body) => ({ type: "SET_USER_STATUS", body });
export const handleEnterStatus = (text) => ({ type: "CHANGE_USER_STATUS", value: text });

export default profileReducer;
