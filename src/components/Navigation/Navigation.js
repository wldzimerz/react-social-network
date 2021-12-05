import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import request from "./../../database/request";

import s from "./Navigation.module.scss";

const PAGES = [
  {
    page: "Profile",
    to: "/profile",
  },
  {
    page: "Messages",
    to: "/messages",
  },
  {
    page: "News",
    to: "/news",
  },
  {
    page: "Community",
    to: "/community",
  },
  {
    page: "Settings",
    to: "/settings",
  },
];

const Navigation = ({ authData, isAuth, setAuthUserData }) => {
  useEffect(() => {
    request.userAuthentification(setAuthUserData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav className={s.navigation}>
      <h4 className={s.sitename}>IN TOUCH</h4>
      {isAuth ? (
        <div className={s.info}>
          <div className={s.avatar}>
            <img src="https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg" alt="avatar" />
          </div>
          <div className={s.username}>{authData.login}</div>
        </div>
      ) : (
        <div className={s.login}></div>
      )}
      <div className={s.links}>
        <ul>
          {PAGES.map(({ page, to }, index) => (
            <li key={index}>
              <NavLink to={to} activeclassname={s.active}>
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
