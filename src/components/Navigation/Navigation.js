import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";

const PAGES = [
  {
    page: "My profile",
    to: "/profile",
  },
  {
    page: "News",
    to: "/news",
  },
  {
    page: "Friedns",
    to: "/friedns",
  },
  {
    page: "Messages",
    to: "/messages",
  },
  {
    page: "Community",
    to: "/community",
  },
  {
    page: "Photo",
    to: "/photo",
  },
  {
    page: "Video",
    to: "/video",
  },
  {
    page: "Audio",
    to: "/audio",
  },
  {
    page: "Settings",
    to: "/settings",
  },
];

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <h4 className={s.sitename}>IN TOUCH</h4>
      <div className={s.info}>
        <div className={s.avatar}>
          <img src="https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg" alt="avatar" />
        </div>
        <div className={s.username}>wldzimerz</div>
      </div>
      <div className={s.links}>
        <ul>
          {PAGES.map(({ page, to }, index) => (
            <li key={index}>
              <NavLink to={to} activeClassName={s.active}>
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
