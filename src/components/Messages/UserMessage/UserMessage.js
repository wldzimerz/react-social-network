import s from "./UserMessage.module.scss";

const UserMessage = ({ text }) => {
  return (
    <>
      <div className={s.message}>{text}</div>
    </>
  );
};

export default UserMessage;
