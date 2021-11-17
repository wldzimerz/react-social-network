const profileReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-POST-TEXT":
      state.newPostText = action.value;
      return state;
    case "ADD-POST":
      if (state.newPostText) {
        const newPost = {
          text: state.newPostText,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          likes: 0,
        };

        state.POSTDATA.push(newPost);
        state.newPostText = "";
      }
      return state;
    default:
      return state;
  }
};

export default profileReducer;
