import { useState } from "react";

import request from "./../../../database/request";

import s from "./ProfileStatus.module.scss";

const ProfileStatus = ({ status, onEnterStatus, userId, setUserStatus, authId }) => {
  const [edit, setEdit] = useState(false);
  const [statusText, setNewStatus] = useState(status);

  const handleChangeStatus = () => {
    if (userId === authId) {
      setEdit((prevState) => !prevState);
    }
  };

  const handleUpdateStatus = (newStatusText) => {
    if (!newStatusText) {
      newStatusText = statusText;
    }
    setNewStatus(newStatusText);
    setEdit((prevState) => !prevState);

    request.updateUserStatus(newStatusText, setUserStatus);
  };

  return (
    <div className={s.wrapper}>
      {edit ? (
        <input
          autoFocus={true}
          placeholder={statusText}
          onBlur={(e) => {
            handleUpdateStatus(e.target.value);
          }}
          onChange={(e) => {
            onEnterStatus(e.target.value);
          }}
        />
      ) : (
        <span onDoubleClick={userId === authId && handleChangeStatus} style={userId === authId ? { cursor: "pointer" } : null}>
          {statusText || "no status"}
        </span>
      )}
    </div>
  );
};

export default ProfileStatus;
