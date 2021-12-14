import { useEffect } from "react";
import { useMatch } from "react-router-dom";

import request from "./../../database/request";
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import Preloader from "./../common/Preloader/Preloader";

import defaultUserPhoto from "./../../assets/user-profile-avatar.png";
import s from "./Profile.module.scss";
import { Field, Form, Formik } from "formik";

const Profile = ({
  profilePage: state,
  userProfileData,
  setUserProfile,
  handleChangeTextArea,
  handleAddPost,
  authData,
  userStatus,
  setUserStatus,
  handleEnterStatus,
}) => {
  const match = useMatch("/profile/:id");
  let userId;

  if (match) {
    userId = match.params.id;
  }

  if (!userId) {
    userId = authData.id;
  }

  useEffect(() => {
    request.getUserProfile(userId, setUserProfile);
    request.getUserStatus(userId, setUserStatus);
  }, [match, setUserProfile, setUserStatus, userId]);

  const handleLogOutClick = () => {
    request.logoutUser();
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  if (!userProfileData) {
    return <Preloader />;
  }

  return (
    <>
      <div className={s.profileWrap}>
        <div className={s.head}>
          <div className={s.name}>{userProfileData.fullName}</div>
          {userId !== authData.id ? <button>FOLLOW</button> : <button onClick={handleLogOutClick}>LOG OUT</button>}
        </div>
        <div className={s.profilePosts}>
          <ProfileStatus status={userStatus} onEnterStatus={handleEnterStatus} userId={userId} setUserStatus={setUserStatus} authId={authData.id} />
          <div className={s.question}>What's new?</div>
          <div className={s.newPost}>
            <Formik
              initialValues={{ post: state.newPostText }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                  resetForm({ post: state.newPostText });
                }, 200);
              }}
            >
              {({ isSubmitting }) => (
                <Form className={s.loginForm}>
                  <Field
                    component="textarea"
                    name="post"
                    type="text"
                    placeholder="Write something..."
                    className={s.textInput}
                    value={state.newPostText}
                    onChange={(e) => {
                      handleChangeTextArea(e.target.value);
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => {
                      if (state.newPostText) {
                        handleAddPost();
                      }
                    }}
                  >
                    Add post
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className={s.earlyPosts}>
            {state.POSTDATA.map((obj, index) => (
              <ProfilePost text={obj.text} time={obj.time} likes={obj.likes} key={index} />
            ))}
          </div>
        </div>
        <div className={s.about}>
          <div className={s.photo}>
            <img src={userProfileData.photos.large ? userProfileData.photos.large : defaultUserPhoto} alt="avatar" />
          </div>
          {userId !== authData.id && <div className={s.item}>Status: {"_status"}</div>}
          <div className={s.item}>Location: {"_location"}</div>
          <div className={s.item}>Born: {"_born"}</div>
          <div className={s.item}>Friends: {"_friends"}</div>
          <div className={s.item}>
            Contacts:&nbsp;
            <a href={userProfileData.contacts.vk} target="_blank" rel="noopener noreferrer">
              Visit website
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
