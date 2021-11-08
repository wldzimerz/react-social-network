import s from "./ProfilePost.module.scss";

const ProfilePost = ({ text, time, likes }) => {
  return (
    <div className={s.postWrap}>
      <div className={s.text}>
        {text}
        <div className={s.time}>{time}</div>
      </div>

      <div className={s.likes}>
        {likes} <img className={s.icon} src="https://svgsilh.com/svg_v2/24037.svg" alt="like" />
      </div>
    </div>
  );
};

export default ProfilePost;
