import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useStorage, useNotification } from 'src/hooks';
import { api } from 'src/services';

// TODO: inputs validation

export const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { writeStorage, isAuth } = useStorage();
  const { levels, sendNotification } = useNotification();

  const initialValues = {
    email: 'free@samuraijs.com',
    password: 'free',
    rememberMe: false,
  };

  const login = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      const { data } = await api.auth.login(values);
      if (data.resultCode === 0) {
        writeStorage.auth(data.data.userId);
        sendNotification(levels.SUCCESS);
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        sendNotification(levels.WARNING, data.messages[0]);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR, 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-gray-400 shadow-lg px-8 py-4 rounded-xl">
      <h3 className="uppercase text-2xl text-center mb-5 text-main_blue">
        Sign in
      </h3>
      <Form<typeof initialValues>
        initialValues={initialValues}
        onFinish={login}
        layout="horizontal"
        size="large"
        className="flex flex-col items-center min-w-full"
      >
        {!isAuth ? (
          <>
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please enter your email' }]}
            >
              <Input
                type="email"
                placeholder="E-mail"
                style={{ width: 360 }}
                allowClear
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter your password' },
              ]}
            >
              <Input.Password placeholder="Password" style={{ width: 360 }} />
            </Form.Item>

            <Form.Item name="rememberMe" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button
              type="primary"
              loading={loading}
              htmlType="submit"
              className="w-32"
            >
              Sign in
            </Button>
          </>
        ) : (
          <>
            <span className="text-xl mb-10 p-12 font-thin">
              You already logged in!
            </span>
            <Button type="primary" onClick={() => navigate('/community')}>
              Go to our community
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};
