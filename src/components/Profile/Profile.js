import ProfilePost from "./ProfilePost/ProfilePost";

import s from "./Profile.module.scss";

const Profile = ({ store }) => {
  const stateGetter = store.getState().profile;

  const handleAddPost = () => {
    store.dispatch({ type: "ADD-POST" });
  };

  const handleTextareaChange = (e) => {
    store.dispatch({ type: "UPDATE-NEW-POST-TEXT", value: e.target.value });
  };

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
            <textarea onChange={handleTextareaChange} type="text" value={stateGetter.newPostText} />
            <button className={s.addPostBtn} onClick={handleAddPost}>
              Add post
            </button>
          </div>
          <div className={s.earlyPosts}>
            {stateGetter.POSTDATA.map((obj, index) => (
              <ProfilePost text={obj.text} time={obj.time} likes={obj.likes} key={index} />
            ))}
          </div>
        </div>
        {stateGetter.USERINFO.map((obj, index) => (
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
