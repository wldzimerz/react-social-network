import s from "./Menu.module.scss";

const Menu = () => {
  return (
    <>
      <div className={s.menu}>
        <li>Profile</li>
        <li>Feed</li>
        <li>News</li>
      </div>
    </>
  );
};

export default Menu;
