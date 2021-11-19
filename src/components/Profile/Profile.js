import ProfilePost from "./ProfilePost/ProfilePost";

import s from "./Profile.module.scss";

const Profile = ({ profilePage: state, handleChangeTextArea, handleAddPost }) => {
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
            <textarea
              type="text"
              placeholder="Write something..."
              value={state.newPostText}
              onChange={(e) => {
                handleChangeTextArea(e.target.value);
              }}
            />
            <button
              className={s.addPostBtn}
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
        {state.USERINFO.map((obj, index) => (
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
