import request from "./../../database/request";

import ProfilePost from "./ProfilePost/ProfilePost";
import Preloader from "./../common/Preloader/Preloader";

import defaultUserPhoto from "./../../assets/user-profile-avatar.png";
import s from "./Profile.module.scss";
import { useRouteMatch } from "react-router-dom";
import { useEffect } from "react";

const Profile = ({ profilePage: state, userProfileData, setUserProfile, handleChangeTextArea, handleAddPost }) => {
  const match = useRouteMatch();

  let userId = match.params.userId;

  if (!userId) {
    userId = 29;
  }

  useEffect(() => {
    request.getUserProfile(userId, setUserProfile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  if (!userProfileData) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s.profileWrap}>
        <div className={s.head}>
          <div className={s.name}>{userProfileData.fullName}</div>
          <button>FOLLOW</button>
        </div>
        <div className={s.profilePosts}>
          <div className={s.question}>What's new?</div>
          <div className={s.newPost}>
            <textarea
              type="text"
              placeholder="Write something..."
              value={state.newPostText}
              onChange={(e) => {
                handleChangeTextArea(e.target.value);
              }}
            />
            <button
              onClick={() => {
                if (state.newPostText) {
                  handleAddPost();
                }
              }}
            >
              Add post
            </button>
          </div>
          <div className={s.earlyPosts}>
            {state.POSTDATA.map((obj, index) => (
              <ProfilePost text={obj.text} time={obj.time} likes={obj.likes} key={index} />
            ))}
          </div>
        </div>
        <div className={s.about}>
          <div className={s.photo}>
            <img src={userProfileData.photos.large ? userProfileData.photos.large : defaultUserPhoto} alt="avatar" />
          </div>
          <div className={s.item}>Status: {"_status"}</div>
          <div className={s.item}>Location: {"_location"}</div>
          <div className={s.item}>Born: {"_born"}</div>
          <div className={s.item}>Friends: {"_friends"}</div>
          <div className={s.item}>
            Contacts:&nbsp;
            <a href={userProfileData.contacts.vk} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
