import React from "react";

import ProfilePost from "./ProfilePost/ProfilePost";
import { UpdateState } from "./../../redux/state";

import s from "./Profile.module.scss";

const Profile = ({ POSTDATA, USERINFO }) => {
  const update = new UpdateState();

  const handleAddPost = () => {
    if (newPostContent.current.value) {
      update.updatePostdata(newPostContent.current.value);
      newPostContent.current.value = "";
    }
  };

  const newPostContent = React.createRef();

  return (
    <>
      <div className={s.profileWrap}>
        <div className={s.head}>
          <div className={s.name}>wldzimerz</div>
          <button className={s.subscribeBtn}>SUBSCRIBE</button>
        </div>
        <div className={s.profilePosts}>
          <div className={s.question}>What's new?</div>
          <div className={s.newPost}>
            <textarea type="text" placeholder="Write something..." ref={newPostContent} />
            <button className={s.addPostBtn} onClick={handleAddPost}>
              Add post
            </button>
          </div>
          <div className={s.earlyPosts}>
            {POSTDATA.map((obj, index) => (
              <ProfilePost text={obj.text} time={obj.time} likes={obj.likes} key={index} />
            ))}
          </div>
        </div>
        {USERINFO.map((obj, index) => (
          <div className={s.about} key={index}>
            {/* <img src={obj.photo} className={s.photo} /> */}
            <div className={s.item}>Location: {obj.location}</div>
            <div className={s.item}>Born: {obj.born}</div>
            <div className={s.item}>Friends: {obj.friends}</div>
            <div className={s.item}>
              Website:&nbsp;
              <a href={obj.website} target="_blank" rel="noopener noreferrer">
                Visit website
              </a>
            </div>
            <div className={s.edit}>Edit</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
