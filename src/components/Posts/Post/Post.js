import s from "./Post.module.css";

const Post = ({ groupname, text, postimage }) => {
  return (
    <div className={s.post}>
      <div className={s.group}>
        <img src="https://i.pinimg.com/originals/58/f1/19/58f119ba1015a04f4fae147ccf34b55f.jpg" alt="groupphoto" className={s.groupphoto} />
        <div className={s.groupinfo}>
          <div className={s.groupname}>{groupname}</div>
          <div className={s.posttime}>7 minutes ago</div>
        </div>
      </div>
      <div className={s.text}>
        {text} &nbsp;
        <span className={s.more}>READ MORE</span>
        <img src={postimage} alt="postimage" className={s.postimage} />
      </div>
      <div className={s.activities}>
        <img src="https://svgsilh.com/svg_v2/24037.svg" alt="like" className={s.icon} />
        <p>268</p>
        <img src="https://image.flaticon.com/icons/png/512/134/134718.png" alt="comment" className={s.icon} />
        <p>30</p>
        <img src="https://image.flaticon.com/icons/png/512/159/159604.png" alt="watchers" className={s.icon} />
        <p>2.2k</p>
      </div>
    </div>
  );
};

export default Post;
