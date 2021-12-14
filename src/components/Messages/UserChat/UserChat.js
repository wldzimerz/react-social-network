import { NavLink } from "react-router-dom";

import s from "./UserChat.module.scss";

const UserChat = ({ to, img, time, name, msg, index }) => {
  return (
    <div className={s.user}>
      <NavLink to={`${to}${index + 1}`} key={index} className={({ isActive }) => (isActive ? s.active : null)}>
        <img src={img} className={s.photo} alt="avatar" />
        <div className={s.time}>{time}</div>
        <div className={s.name}>{name}</div>
        <div className={s.msg}>{msg}</div>
      </NavLink>
    </div>
  );
};

export default UserChat;
