import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { userId } = useParams();

  return <div>Current user id: {userId}</div>;
};

export default UserProfile;
