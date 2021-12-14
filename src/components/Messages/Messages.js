import UserMessage from "./UserMessage/UserMessage";
import UserChat from "./UserChat/UserChat";

import s from "./Messages.module.scss";
import { Field, Form, Formik } from "formik";

const Messages = ({ dialogsPage: state, handleChangeMessage, handleSendMessage }) => {
  return (
    <div className={s.dialogs}>
      <div className={s.head}>
        <input className={s.search} placeholder="Search..." />
        <div className={s.leftSide}>
          <button className={s.addChatBtn}>+ Add new</button>
          <img src="https://image.flaticon.com/icons/png/512/88/88042.png" alt="messages" className={s.icon} />
          <img src="https://image.flaticon.com/icons/png/512/77/77682.png" alt="notifications" className={s.icon} />
        </div>
      </div>
      <div className={s.chat}>
        <div className={s.users}>
          <div className={s.blockname}>Chat</div>
          {state.USERS.map((obj, index) => (
            <UserChat to={`/messages/`} img={obj.img} time={obj.time} name={obj.name} msg={obj.msg} key={index} index={index} />
          ))}
        </div>
        <div className={s.messages}>
          <div className={s.blockname}>NAME</div>
          <div className={s.messagesContainer}>
            {state.MESSAGES.map((obj, index) => (
              <UserMessage text={obj.text} key={index} />
            ))}
          </div>
          <div className={s.sendMessageArea}>
            <Formik
              initialValues={{ message: state.newMessageText }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  setSubmitting(false);
                  resetForm({ message: state.newMessageText });
                }, 200);
              }}
            >
              {({ isSubmitting }) => (
                <Form className={s.loginForm}>
                  <Field
                    component="input"
                    name="message"
                    type="text"
                    placeholder="Write a message..."
                    className={s.textInput}
                    value={state.newMessageText}
                    onChange={(e) => {
                      handleChangeMessage(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={s.sendMsgBtn}
                    onClick={() => {
                      if (state.newMessageText) {
                        handleSendMessage();
                      }
                    }}
                  >
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
