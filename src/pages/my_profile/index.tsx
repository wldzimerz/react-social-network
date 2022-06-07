import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'src/components';
import { useNotification } from 'src/hooks';
import Profile from 'src/models/Profile';
import { api } from 'src/services';

const MyProfile: React.FC = () => {
  const [myProfile, setMyProfile] = useState<Profile>();
  // eslint-disable-next-line no-console
  console.log('🚀🚀🚀 ~ myProfile', myProfile);
  const myId = 21050;

  const { levels, sendNotification } = useNotification();
  const loadMyProfile = async () => {
    try {
      const { data } = await api.profile.get({ userId: myId });
      if (data) setMyProfile(data);
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  useEffect(() => {
    loadMyProfile();
  }, []);

  return (
    <MainLayout>
      <Helmet title="IN TOUCH | Profile" />
      <div>This is my profile page</div>
    </MainLayout>
  );
};

export default MyProfile;
