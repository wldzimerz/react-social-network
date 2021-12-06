import { connect } from "react-redux";

import Messages from "./Messages";

import { handleChangeMessage, handleSendMessage } from "./../../redux/messagesReducer";

const stateDataToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const dispatchers = {
  handleChangeMessage,
  handleSendMessage,
};

const MessagesContainer = connect(stateDataToProps, dispatchers)(Messages);

export default MessagesContainer;
