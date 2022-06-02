import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStorage } from 'src/hooks';

interface Props {
  children: React.ReactNode;
}

export const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { checkStorage } = useStorage();
  const isAuth = checkStorage('in_touch_auth_id');

  if (!isAuth) return <Navigate to="/login" />;

  return <>{children}</>;
};
