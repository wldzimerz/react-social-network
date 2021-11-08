import { NavLink } from "react-router-dom";

import s from "./UserChat.module.scss";

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

export default UserChat;
