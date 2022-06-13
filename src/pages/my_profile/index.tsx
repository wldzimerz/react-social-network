import React from 'react';
import { Helmet } from 'react-helmet';
import { MainLayout } from 'src/components';
import { Tab, Tablist } from 'src/components/TabList';
import { ProfileTab, EditProfileTab } from './Tabs';

const TABS: Tab[] = [
  {
    title: 'Profile info',
    content: <ProfileTab />,
  },
  {
    title: 'Edit info',
    content: <EditProfileTab />,
  },
];

const MyProfile: React.FC = () => {
  return (
    <MainLayout>
      <Helmet title="IN TOUCH | Profile" />
      <Tablist tabs={TABS} type="card" className="!-mt-3" />
    </MainLayout>
  );
};

export default MyProfile;
