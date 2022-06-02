import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginForm } from './LoginForm';

const LoginPage: React.FC = () => {
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
