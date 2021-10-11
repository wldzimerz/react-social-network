import s from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.firstlane}>
          <p className={s.greeting}>Hello, wldzimerz! What's new?</p>
          <div className={s.navbar}>
            <img src="https://image.flaticon.com/icons/png/512/88/88042.png" alt="messages" className={s.icon} />
            <img src="https://image.flaticon.com/icons/png/512/77/77682.png" alt="notifications" className={s.icon} />
            <input type="text" placeholder="Search..." className={s.search} />
          </div>
        </div>
        <div className={s.noteadd}>
          <input name="note" className={s.noteinput} placeholder="Add a note..." />
        </div>
        <div className={s.categories}>
          <img src="https://image.flaticon.com/icons/png/512/622/622669.png" alt="" className={s.icon} />
          <div className={s.selector}>Photos</div>
          <div className={s.selector}>Videos</div>
          <div className={s.selector}>Friends</div>
          <div className={s.selector}>Recommended</div>
          <div className={s.selector}>Sort by rating</div>
        </div>
      </header>
    </>
  );
};

export default Header;
