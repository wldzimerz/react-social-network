function Header() {
  return (
    <header className="header">
      <div className="firstlane">
        <p className="greeting">Hello, wldzimerz! What's new?</p>
        <div className="navbar">
          <img src="https://image.flaticon.com/icons/png/512/88/88042.png" alt="messages" className="icon" />
          <img src="https://image.flaticon.com/icons/png/512/77/77682.png" alt="notifications" className="icon" />
          <input type="text" placeholder="Search..." className="search" />
        </div>
      </div>
      <div className="noteadd">
        <input name="note" className="noteinput" placeholder="Add a note..." />
      </div>
      <div className="categories">
        <img
          src="https://w7.pngwing.com/pngs/605/56/png-transparent-search-icon-computer-icons-android-desktop-search-button-internet-share-icon-search-button-thumbnail.png"
          alt=""
          className="icon"
        />
        <div className="selector">Photos</div>
        <div className="selector">Videos</div>
        <div className="selector">Friends</div>
        <div className="selector">Recommendation</div>
        <div className="selector">Sort by rating</div>
      </div>
    </header>
  );
}

export default Header;
