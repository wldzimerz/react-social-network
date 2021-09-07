import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.firstlane}>
        <p className={classes.greeting}>Hello, wldzimerz! What's new?</p>
        <div className={classes.navbar}>
          <img src="https://image.flaticon.com/icons/png/512/88/88042.png" alt="messages" className={classes.icon} />
          <img src="https://image.flaticon.com/icons/png/512/77/77682.png" alt="notifications" className={classes.icon} />
          <input type="text" placeholder="Search..." className={classes.search} />
        </div>
      </div>
      <div className={classes.noteadd}>
        <input name="note" className={classes.noteinput} placeholder="Add a note..." />
      </div>
      <div className={classes.categories}>
        <img src="https://image.flaticon.com/icons/png/512/622/622669.png" alt="" className={classes.icon} />
        <div className={classes.selector}>Photos</div>
        <div className={classes.selector}>Videos</div>
        <div className={classes.selector}>Friends</div>
        <div className={classes.selector}>Recommendation</div>
        <div className={classes.selector}>Sort by rating</div>
      </div>
    </header>
  );
}

export default Header;
