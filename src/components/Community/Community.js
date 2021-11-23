import { useEffect } from "react";
import cn from "classnames";

import request from "./../../database/request";
import defaultUserPhoto from "../../assets/user-profile-avatar.png";

import s from "./Community.module.scss";

const Community = ({ users, currentPage, pageSize, totalUsersCount, setUsers, setCurrentPage, increasePageSize, handleChangeFollowing }) => {
  const putUserOnPage = () => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages.map((elem, index) => (
      <span
        key={index}
        className={cn({ [s.selected]: currentPage === elem })}
        onClick={() => {
          setCurrentPage(elem);
          request.changePage(elem, pageSize, setUsers);
        }}
      >
        {elem}
      </span>
    ));
  };

  const handleShowMoreUsersClick = () => {
    let count = 5;
    let newPageSize = pageSize + count;
    increasePageSize(newPageSize);
    request.handleChangePageSize(currentPage, setUsers, newPageSize);
  };

  useEffect(() => {
    request.getUsers(currentPage, pageSize, setUsers);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={s.community}>
      <div className={s.heading}>USERS</div>
      <div className={s.pages}>{putUserOnPage()}</div>
      <div className={s.usersList}>
        {users.map(({ id, photos, followed, name, status, location }) => (
          <div className={s.userWrap} key={id}>
            <div className={s.leftSide}>
              <div className={s.photo}>
                <img src={photos.small ? photos.small : defaultUserPhoto} alt="avatar" />
              </div>
              <div className={s.followBtn}>
                <button
                  onClick={() => {
                    handleChangeFollowing(id);
                  }}
                >
                  {followed ? "Follow" : "Unfollow"}
                </button>
              </div>
            </div>
            <div className={s.rightSide}>
              <div className={s.name}>{name}</div>
              <div className={s.status}>{"status"}</div>
              <div className={s.location}>{"location"}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={s.showMoreBtn}>
        <button onClick={handleShowMoreUsersClick}>SHOW MORE</button>
      </div>
    </div>
  );
};

export default Community;
