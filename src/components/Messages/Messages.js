import { useRouteMatch } from "react-router-dom";

import UserMessage from "./UserMessage/UserMessage";
import UserChat from "./UserChat/UserChat";

import s from "./Messages.module.scss";

const Messages = ({ store }) => {
  const match = useRouteMatch();

  const stateGetter = store.getState().dialogs;

  const handleChangeMessage = (e) => {
    store.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", value: e.target.value });
  };

  const handleSendMessage = () => {
    store.dispatch({ type: "SEND-MESSAGE" });
  };

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
          {stateGetter.USERS.map((obj, index) => (
            <UserChat to={`${match.url}/${index + 1}`} img={obj.img} time={obj.time} name={obj.name} msg={obj.msg} key={index} index />
          ))}
        </div>
        <div className={s.messages}>
          <div className={s.blockname}>NAME</div>
          <div className={s.messagesContainer}>
            {stateGetter.MESSAGES.map((obj, index) => (
              <UserMessage text={obj.text} key={index} />
            ))}
          </div>
          <div className={s.sendMessageArea}>
            <textarea type="text" placeholder="Write a message..." value={stateGetter.newMessageText} onChange={handleChangeMessage} />
            <button className={s.sendMsgBtn} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
