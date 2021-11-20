import s from "./Community.module.scss";

const Community = ({ communityPage: state, handleChangeFollowing, setUsers }) => {
  const usersData = [
    { id: 87, img: "../../../assets/Denis.jpg", name: "Denis", status: "focused on study", location: "Berlin, Germany", isFollowed: false },
    { id: 16, img: "../../../assets/Anya.jpg", name: "Anya", status: "on vacation", location: "Moscow, Russia", isFollowed: true },
    { id: 18, img: "../../../assets/Dmitry.jpg", name: "Dmitry", status: "don't worry, be happy", location: "Barnaul, Russia", isFollowed: false },
    { id: 15, img: "../../../assets/Anastasia.jpg", name: "Anastasia", status: "video production, dm", location: "Riga, Latvia", isFollowed: false },
  ];

  if (state.USERS.length === 0) {
    setUsers(usersData);
  }

  return (
    <div className={s.community}>
      <div className={s.heading}>USERS</div>
      <div className={s.usersList}>
        {state.USERS.map(({ id, img, isFollowed, name, status, location }) => (
          <div className={s.userWrap} key={id}>
            <div className={s.leftSide}>
              <div className={s.photo}>
                <img src={img} alt="avatar" />
              </div>
              <div className={s.followBtn}>
                <button
                  onClick={() => {
                    handleChangeFollowing(id);
                  }}
                >
                  {isFollowed ? "Follow" : "Unfollow"}
                </button>
              </div>
            </div>
            <div className={s.rightSide}>
              <div className={s.name}>{name}</div>
              <div className={s.status}>{status}</div>
              <div className={s.location}>{location}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.showMoreBtn}>
        <button>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Community;
