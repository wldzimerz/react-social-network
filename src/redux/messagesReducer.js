const initialState = {
  MESSAGES: [
    { text: "Hi", time: "" },
    { text: "How are you", time: "" },
    { text: "I`m dev the social media network", time: "" },
    { text: "that's cool!", time: "" },
    { text: "accusantium", time: "" },
    { text: "consectetur", time: "" },
    { text: "media network", time: "" },
    { text: "How", time: "" },
    { text: "good luck", time: "" },
  ],
  USERS: [
    { img: "../../../assets/Denis.jpg", name: "Denis", time: "12:51", msg: "OK, got it!" },
    { img: "../../../assets/Anya.jpg", name: "Anya", time: "09:55", msg: "How are you" },
    { img: "../../../assets/Dmitry.jpg", name: "Dmitry", time: "08:15", msg: "HB 2 U" },
    { img: "../../../assets/Anastasia.jpg", name: "Anastasia", time: "04:10", msg: "do you have some.." },
    { img: "../../../assets/Alex.jpg", name: "Alex", time: "18:50", msg: "good luck" },
  ],
  newMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      return {
        ...state,
        newMessageText: action.value,
      };

    case "SEND-MESSAGE":
      const newMessage = {
        text: state.newMessageText,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      return {
        ...state,
        MESSAGES: [...state.MESSAGES, newMessage],
        newMessageText: "",
      };

    default:
      return state;
  }
};

export default messagesReducer;
