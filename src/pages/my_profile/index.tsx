import React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'src/components';

const MyProfile: React.FC = () => {
  return (
    <MainLayout>
      <Helmet title="IN TOUCH | Profile" />
      <div>This is my profile page</div>
    </MainLayout>
  );
};

export default MyProfile;
