const messagesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-TEXT":
      state.newMessageText = action.value;
      return state;
    case "SEND-MESSAGE":
      if (state.newMessageText) {
        const newMessage = {
          text: state.newMessageText,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
        };

        state.MESSAGES.push(newMessage);
        state.newMessageText = "";
      }
      return state;
    default:
      return state;
  }
};

export default messagesReducer;
