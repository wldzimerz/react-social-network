import React from 'react';
import { Navigate } from 'react-router-dom';
import { useStorage } from 'src/hooks';

interface Props {
  children: React.ReactNode;
}

export const PrivateRouter: React.FC<Props> = ({ children }) => {
  const { isAuth } = useStorage();

  if (!isAuth) return <Navigate to="/login" />;

  return <>{children}</>;
};
