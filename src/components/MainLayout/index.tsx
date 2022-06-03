import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { RocketFilled, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Header } from 'src/components';

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
  const isMain = pathname === '/';

  const memoizedChildren = useMemo(() => {
    return children;
  }, []);

  const MENU = MENU_DATA.map(({ icon, label, path }: MenuItem) => ({
    label: <Link to={path}>{label}</Link>,
    key: path,
    icon,
  }));

  return (
    <Layout style={{ background: 'none' }}>
      <Layout.Sider
        style={{
          overflow: 'auto',
          minHeight: '100vh',
          background: 'none',
        }}
      >
        <Link
          className={cn('p-2 cursor-pointer flex items-center justify-center', {
            'text-main_blue': isMain,
            'text-black': !isMain,
          })}
          to="/"
        >
          <RocketFilled className="fill-current text-2xl mr-2" />
          <span className="text-xl font-bold text-main_blue">IN TOUCH</span>
        </Link>
        <Menu
          theme="light"
          mode="inline"
          items={MENU}
          style={{ border: 'none' }}
          selectedKeys={[MENU.find(el => el.key === pathname)?.key!]}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Header style={{ background: 'none', padding: 0 }}>
          <Header />
        </Layout.Header>
        <Layout.Content>
          <div className="p-4">{memoizedChildren}</div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
