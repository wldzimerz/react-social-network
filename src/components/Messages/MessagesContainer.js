import { connect } from "react-redux";

import Messages from "./Messages";

const stateDataToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    handleChangeMessage: (text) => {
      dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", value: text });
    },
    handleSendMessage: () => {
      dispatch({ type: "SEND-MESSAGE" });
    },
  };
};

const MessagesContainer = connect(stateDataToProps, dispatchToProps)(Messages);

export default MessagesContainer;
