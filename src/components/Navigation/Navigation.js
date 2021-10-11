import s from "./Navigation.module.css";

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
        <li>
          <a href="/profile">My profile</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/profile">Friends</a>
        </li>
        <li>
          <a href="/profile">Messages</a>
        </li>
        <li>
          <a href="/profile">Community</a>
        </li>
        <li>
          <a href="/profile">Photo</a>
        </li>
        <li>
          <a href="/profile">Video</a>
        </li>
        <li>
          <a href="/profile">Audio</a>
        </li>
        <li>
          <a href="/profile">Settings</a>
        </li>
      </div>
    </nav>
  );
};

export default Navigation;
