import { NavLink, useRouteMatch } from "react-router-dom";
import s from "./Messages.module.css";

const USERS = [
  { img: "../../../assets/Denis.jpg", name: "Denis", time: "12:51", msg: "OK, got it!" },
  { img: "../../../assets/Anya.jpg", name: "Anya", time: "09:55", msg: "How are you" },
  { img: "../../../assets/Dmitry.jpg", name: "Dmitry", time: "08:15", msg: "HB 2 U" },
  { img: "../../../assets/Anastasia.jpg", name: "Anastasia", time: "04:10", msg: "do you have some.." },
  { img: "../../../assets/Alex.jpg", name: "Alex", time: "18:50", msg: "good luck" },
];

const MESSAGES = [
  { text: "Hi", time: "" },
  { text: "How are you", time: "" },
  { text: "I`m dev the social media network", time: "" },
  { text: "that's cool!", time: "" },
  { text: "good luck", time: "" },
];

const UserChat = ({ to, img, time, name, msg, index }) => {
  return (
    <>
      <NavLink to={to} key={index} className={s.user} activeClassName={s.active}>
        <img src={img} className={s.photo} alt="avatar" />
        <div className={s.time}>{time}</div>
        <div className={s.name}>{name}</div>
        <div className={s.msg}>{msg}</div>
      </NavLink>
    </>
  );
};

const UserMessage = ({ text }) => {
  return (
    <>
      <div className={s.message}>{text}</div>
    </>
  );
};

const Messages = () => {
  const match = useRouteMatch();

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
          {USERS.map((obj, index) => (
            <UserChat to={`${match.url}/${index + 1}`} img={obj.img} time={obj.time} name={obj.name} msg={obj.msg} key={index} index />
          ))}
        </div>
        <div className={s.messages}>
          <div className={s.blockname}>NAME</div>
          {MESSAGES.map((obj, index) => (
            <UserMessage text={obj.text} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;
