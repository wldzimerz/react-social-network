import s from "./Profile.module.css";

const POSTDATA = [
  { text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ", time: "09:15", likes: 0 },
  { text: "Nihil, accusantium.", time: "14:54", likes: 14 },
  { text: "Lorem ipsum dolor sit amet consectetur adipisicing.", time: "13:10", likes: 5 },
  { text: "Lorem ipsum dolor sit.", time: "17:59", likes: 23 },
  { text: "Lorem ipsum dolor sit amet.", time: "19:03", likes: 54 },
  { text: "Lorem, ipsum.", time: "07:45", likes: 112 },
];

const USERINFO = [
  {
    photo: "https://i.pinimg.com/236x/73/b0/c0/73b0c08a5d1578cb976a00d8665ffd77--all-blacks-rugby-wutang.jpg",
    location: "Russia, Saint-Petersburg",
    born: "August 21, 1996",
    website: "https://github.com/wldzimerz",
    friends: 463,
  },
];

const Post = ({ text, time, likes }) => {
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

const Profile = () => {
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
            <input type="text" />
            <button className={s.addPostBtn}>Add post</button>
          </div>
          <div className={s.earlyPosts}>
            {POSTDATA.map((obj, index) => (
              <Post text={obj.text} time={obj.time} likes={obj.likes} key={index} />
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
              <a href={obj.website} target="_blank">
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
