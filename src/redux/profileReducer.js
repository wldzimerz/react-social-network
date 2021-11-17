const initialState = {
  POSTDATA: [
    { text: "Lorem, ipsum.", time: "07:45", likes: 112 },
    { text: "Lorem ipsum dolor sit amet.", time: "19:03", likes: 54 },
    { text: "Lorem ipsum dolor sit.", time: "17:59", likes: 23 },
    { text: "Lorem ipsum dolor sit amet consectetur adipisicing.", time: "13:10", likes: 5 },
    { text: "Nihil, accusantium.", time: "14:54", likes: 14 },
    { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", time: "09:15", likes: 0 },
  ],
  USERINFO: [
    {
      photo: "https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg",
      location: "Russia, Saint-Petersburg",
      born: "August 21, 1996",
      website: "https://github.com/wldzimerz",
      friends: 463,
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
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
