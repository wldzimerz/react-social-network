import {
  FacebookOutlined,
  GithubOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { VKIcon } from 'src/assets/icons';
import { Preloader } from 'src/components';
import { useNotification } from 'src/hooks';
import Profile from 'src/models/Profile';
import { api } from 'src/services';

export const EditProfileTab: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userStatus, setUserStatus] = useState<string>('');
  const [profileFields, setProfileFields] = useState<Profile | undefined>(
    undefined,
  );
  const userId = 21050; // TODO from global state

  const { sendNotification, levels } = useNotification();

  const loadUserStatus = async () => {
    try {
      const { data } = await api.profile.get_status({ userId });
      if (data) {
        setUserStatus(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateStatus = async () => {
    try {
      const { data } = await api.profile.set_status({ status: userStatus });
      if (data.resultCode === 0) {
        loadUserStatus();
        sendNotification(levels.SUCCESS, 'Status successfully updated!');
      } else {
        sendNotification(
          levels.ERROR,
          data.messages.length > 1
            ? data.messages.join(', ')
            : data.messages[0],
        );
      }
    } catch (error) {
      sendNotification(levels.ERROR, 'Failed to update status');
      console.error(error);
    }
  };

  const loadProfile = async () => {
    setLoading(true);
    if (!userId) {
      sendNotification(levels.ERROR);
      return setLoading(false);
    }

    try {
      const { data } = await api.profile.get({ userId });
      if (data) setProfileFields(data);
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR, 'Error when loading profile an occured');
    }

    return setLoading(false);
  };

  const handleSubmitForm = async (values: Partial<Profile>) => {
    try {
      const { data } = await api.profile.set(values);
      if (data.resultCode === 0) {
        loadProfile();
        sendNotification(levels.SUCCESS, 'Profile successfully updated!');
      } else {
        sendNotification(
          levels.ERROR,
          data.messages.length > 1
            ? data.messages.join(', ')
            : data.messages[0],
        );
      }
    } catch (error) {
      sendNotification(levels.ERROR, 'Error when update profile an occured');
      console.error(error);
    }
  };

  useEffect(() => {
    loadProfile();
    loadUserStatus();
  }, []);

  if (loading) return <Preloader fullScreen={false} size="medium" />;

  return (
    <>
      <Helmet title="IN TOUCH | Edit Profile" />
      <div className="font-medium text-2xl">Edit profile</div>

      <Input
        value={userStatus}
        onChange={e => setUserStatus(e.target.value)}
        allowClear
      />
      <Button type="ghost" onClick={handleUpdateStatus}>
        Update status
      </Button>

      <Form
        initialValues={profileFields}
        onFinish={handleSubmitForm}
        size="small"
        layout="horizontal"
      >
        <Form.Item name="fullName">
          <Input placeholder="Full name" size="small" />
        </Form.Item>
        <Form.Item name="aboutMe">
          <Input.TextArea size="middle" placeholder="About me" />
        </Form.Item>

        <span>Your contacts</span>
        <Form.Item name={['contacts', 'mainLink']}>
          <Input placeholder="Main link" prefix={<GlobalOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'website']}>
          <Input placeholder="Personal website" prefix={<GlobalOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'github']}>
          <Input placeholder="Github" prefix={<GithubOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'vk']}>
          <Input placeholder="VKontakte" prefix={<VKIcon />} />
        </Form.Item>
        <Form.Item name={['contacts', 'facebook']}>
          <Input placeholder="Facebook" prefix={<FacebookOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'twitter']}>
          <Input placeholder="Twitter" prefix={<TwitterOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'instagram']}>
          <Input placeholder="Instagram" prefix={<InstagramOutlined />} />
        </Form.Item>
        <Form.Item name={['contacts', 'youtube']}>
          <Input placeholder="YouTube" prefix={<YoutubeOutlined />} />
        </Form.Item>
        <Form.Item name="lookingForAJob" valuePropName="checked">
          <Checkbox>Looking for a Job</Checkbox>
        </Form.Item>
        <Form.Item name="lookingForAJobDescription">
          <Input.TextArea placeholder="Pleasе type a transmittal letter" />
        </Form.Item>

        <Button htmlType="submit">Update profile</Button>
      </Form>
    </>
  );
};
