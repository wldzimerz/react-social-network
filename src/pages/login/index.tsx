import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import { useColorScheme, useStorage } from 'src/hooks';
import { LoginForm } from './LoginForm';

const LoginPage: React.FC = () => {
  // const { writeStorage, readStorage } = useStorage();
  // const { scheme } = useColorScheme();

  useEffect(() => {}, []);

  return (
    <>
      <Helmet title="IN TOUCH | SIGN IN" />
      <div className="flex items-center justify-center min-w-screen min-h-screen bg-slate-100">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
