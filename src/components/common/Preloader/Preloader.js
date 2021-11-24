import s from "./Preloader.module.scss";

const Preloader = () => {
  return (
    <div className={s.container}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Preloader;
