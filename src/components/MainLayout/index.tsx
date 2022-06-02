import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

type MenuItem = {
  icon: React.ReactNode;
  label: string;
  path: string;
};

const MENU_DATA: MenuItem[] = [
  {
    icon: <UserOutlined />,
    label: 'Profile',
    path: '/profile',
  },
  {
    icon: <TeamOutlined />,
    label: 'Community',
    path: '/community',
  },
];

export const MainLayout: React.FC<Props> = ({ children }) => {
  const { pathname } = useLocation();

  const memoizedChildren = useMemo(() => {
    return children;
  }, []);

  const MENU = MENU_DATA.map(({ icon, label, path }: MenuItem) => ({
    label: <Link to={path}>{label}</Link>,
    key: path,
    icon,
  }));

  return (
    <Layout>
      <Layout.Sider>
        <div className="logo" />
        <Menu
          theme="light"
          mode="inline"
          items={MENU}
          selectedKeys={[MENU.find(el => el.key === pathname)?.key!]}
        />
      </Layout.Sider>
      <Layout.Content className="bg-white">
        <div className="p-4">{memoizedChildren}</div>
      </Layout.Content>
    </Layout>
  );
};
