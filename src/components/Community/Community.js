import React from "react";
import axios from "axios";

import defaultUserPhoto from "../../assets/user-profile-avatar.png";

import s from "./Community.module.scss";

class CommunityClass extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => {
      this.props.setUsers(res.data.items);
    });
  }

  render() {
    return (
      <div className={s.community}>
        <div className={s.heading}>USERS</div>
        <div className={s.usersList}>
          {this.props.communityPage.USERS.map(({ id, photos, followed, name, status, location }) => (
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
          <button>SHOW MORE</button>
        </div>
      </div>
    );
  }
}

export default CommunityClass;
