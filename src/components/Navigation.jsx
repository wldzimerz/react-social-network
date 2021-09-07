import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes.navigation}>
      <h4 className={classes.sitename}>IN TOUCH</h4>
      <div className={classes.info}>
        <div className={classes.avatar}>
          <img src="https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg" alt="avatar" />
        </div>
        <div className={classes.username}>wldzimerz</div>
      </div>
      <div className={classes.links}>
        <li>My profile</li>
        <li>News</li>
        <li>Friends</li>
        <li>Messages</li>
        <li>Community</li>
        <li>Photo</li>
        <li>Video</li>
        <li>Audio</li>
        <li>Settings</li>
      </div>
    </nav>
  );
}

export default Navigation;
