import React from "react";
import axios from "axios";
import cn from "classnames";

import defaultUserPhoto from "../../assets/user-profile-avatar.png";

import s from "./Community.module.scss";

class CommunityClass extends React.Component {
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
      // this.props.setUsers(res.data.items, res.data.totalCount); // set total users count to state
    });
  }

  handleChangePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
    });
  };

  putUserOnPage = () => {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return pages.map((elem, index) => (
      <span
        key={index}
        className={cn({ [s.selected]: this.props.currentPage === elem })}
        onClick={() => {
          this.handleChangePage(elem);
        }}
      >
        {elem}
      </span>
    ));
  };

  handleChangePageSize = () => {
    let addUsersOnPageCount = 5;
    this.props.increasePageSize(this.props.pageSize + addUsersOnPageCount);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize + addUsersOnPageCount}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {
    return (
      <div className={s.community}>
        <div className={s.heading}>USERS</div>
        <div className={s.pages}>{this.putUserOnPage()}</div>
        <div className={s.usersList}>
          {this.props.users.map(({ id, photos, followed, name, status, location }) => (
            <div className={s.userWrap} key={id}>
              <div className={s.leftSide}>
                <div className={s.photo}>
                  <img src={photos.small ? photos.small : defaultUserPhoto} alt="avatar" />
                </div>
                <div className={s.followBtn}>
                  <button
                    onClick={() => {
                      this.props.handleChangeFollowing(id);
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
          <button onClick={this.handleChangePageSize}>SHOW MORE</button>
        </div>
      </div>
    );
  }
}

export default CommunityClass;
