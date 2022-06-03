import React from 'react';
import { useParams } from 'react-router-dom';
import { MainLayout } from 'src/components';

const UserProfile: React.FC = () => {
  const { userId } = useParams();

  return (
    <MainLayout>
      <div>Current user id: {userId}</div>
    </MainLayout>
  );
};

export default UserProfile;
