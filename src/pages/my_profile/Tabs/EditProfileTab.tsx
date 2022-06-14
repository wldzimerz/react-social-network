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

  if (loading)
    return (
      <Preloader
        fullScreen={false}
        size="large"
        className="text-center mt-20"
      />
    );

  return (
    <>
      <Helmet title="IN TOUCH | Edit Profile" />

      <div className="flex items-center">
        <Input
          value={userStatus}
          onChange={e => setUserStatus(e.target.value)}
          size="large"
          maxLength={300}
          className="mr-20"
          allowClear
          showCount
        />
        <Button type="ghost" onClick={handleUpdateStatus} size="large">
          Update status
        </Button>
      </div>

      <Form
        initialValues={profileFields}
        onFinish={handleSubmitForm}
        size="middle"
        layout="vertical"
      >
        <div className="flex justify-between mt-3">
          <div className="w-[48%]">
            <span className="font-bold text-xl text-center block">
              General Info
            </span>
            <Form.Item
              name="fullName"
              label="Full name"
              rules={[{ required: true, message: 'Name is required!' }]}
            >
              <Input placeholder="Full name" />
            </Form.Item>
            <Form.Item name="aboutMe" label="About">
              <Input.TextArea
                size="middle"
                placeholder="About me"
                className="resize-none"
              />
            </Form.Item>
            <Form.Item name="lookingForAJob" valuePropName="checked">
              <Checkbox>Looking for a Job</Checkbox>
            </Form.Item>
            <Form.Item
              name="lookingForAJobDescription"
              label="Looking for a job description"
              rules={[{ required: true, message: 'Description is required!' }]}
            >
              <Input.TextArea
                placeholder="Pleasе type a transmittal letter"
                className="resize-none"
              />
            </Form.Item>
          </div>

          <div className="w-[48%]">
            <span className="font-bold text-xl text-center block">
              Your Contacts
            </span>
            <Form.Item name={['contacts', 'mainLink']} label="Main link">
              <Input
                prefix={<GlobalOutlined className="text-xl mr-2" />}
                placeholder="https://main-link.com/"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'website']} label="Personal website">
              <Input
                prefix={<GlobalOutlined className="text-xl mr-2" />}
                placeholder="https://ws.com/"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'github']} label="Github">
              <Input
                prefix={<GithubOutlined className="text-xl mr-2" />}
                placeholder="https://github.com/user"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'vk']} label="VKontakte">
              <Input
                prefix={<VKIcon className="mr-2" />}
                placeholder="https://vk.com/id00000001"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'facebook']} label="Facebook">
              <Input
                prefix={<FacebookOutlined className="text-xl mr-2" />}
                placeholder="https://facebook.com/user"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'twitter']} label="Twitter">
              <Input
                prefix={<TwitterOutlined className="text-xl mr-2" />}
                placeholder="https://twitter.com/user"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'instagram']} label="Instagram">
              <Input
                prefix={<InstagramOutlined className="text-xl mr-2" />}
                placeholder="https://instagram.com/user"
              />
            </Form.Item>
            <Form.Item name={['contacts', 'youtube']} label="YouTube">
              <Input
                prefix={<YoutubeOutlined className="text-xl mr-2" />}
                placeholder="https://youtube.com/user"
              />
            </Form.Item>

            <Button
              htmlType="submit"
              type="primary"
              className="mx-auto"
              size="large"
            >
              Update profile
            </Button>
          </div>
        </div>
      </Form>
    </>
  );
};
