import React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'src/components';

const CommunityPage: React.FC = () => {
  return (
    <MainLayout>
      <Helmet title="IN TOUCH | Community" />
      <div>Community Page</div>
    </MainLayout>
  );
};

export default CommunityPage;
