import { TrophyOutlined } from '@ant-design/icons';
import { Avatar, Card, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { MainLayout, Preloader } from 'src/components';
import { useNotification } from 'src/hooks';
import User from 'src/models/User';
import { api } from 'src/services';

interface LocalPaginationSettings {
  page: number;
  count: number;
  total: number | null;
}

const CommunityPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const initialPaginationSettings: LocalPaginationSettings = {
    page: 1,
    count: 5,
    total: null,
  };

  const [paginationSettings, setPaginationSettings] =
    useState<LocalPaginationSettings>(initialPaginationSettings);

  const navigate = useNavigate();
  const { levels, sendNotification } = useNotification();

  const loadUsers = async () => {
    try {
      const { data } = await api.users.get(paginationSettings);
      if (!data.error) {
        setUsers(data.items.map(u => new User(u)));
        if (!paginationSettings.total) {
          setPaginationSettings(prev => ({ ...prev, total: data.totalCount }));
        }
      } else {
        sendNotification(levels.ERROR, data.error);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [paginationSettings]);

  return (
    <MainLayout>
      <>
        <Helmet title="IN TOUCH | Community" />
        <div className="pb-6">
          <span className="text-xl font-thin inline-flex items-center">
            List of students of the course
            <span className="font-medium">
              &nbsp;&#39;ReactJS - The way of samurai&#39;&nbsp;
            </span>
            <TrophyOutlined className="ml-2 text-main_blue" />
          </span>
          {loading && (
            <Preloader fullScreen={false} className="text-center block mt-16" />
          )}
          {!!users.length &&
            users?.map(({ id, name, status, followed, photos }: User) => {
              return (
                <div className="my-2" key={id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`${id}`)}
                    title={
                      <div className="flex items-center">
                        <Avatar src={photos.small} className="!bg-main_blue">
                          {name[0].toUpperCase()}
                        </Avatar>
                        <span className="ml-2 font-bold capitalize">
                          {name}
                        </span>
                      </div>
                    }
                    extra={
                      <span className="text-main_blue">
                        {followed && 'Your friend'}
                      </span>
                    }
                  >
                    <div className="font-thin">{status ?? 'No status'}</div>
                  </Card>
                </div>
              );
            })}
          {!loading && (
            <Pagination
              showQuickJumper
              showSizeChanger
              showLessItems
              total={paginationSettings.total!}
              showTotal={t => (
                <span className="font-bold">
                  Total <span className="text-main_blue">{t}</span> users
                </span>
              )}
              defaultCurrent={paginationSettings.page}
              defaultPageSize={5}
              onChange={page =>
                setPaginationSettings(prev => ({ ...prev, page }))
              }
              onShowSizeChange={(page, count) =>
                setPaginationSettings(prev => ({ ...prev, page, count }))
              }
            />
          )}
        </div>
      </>
    </MainLayout>
  );
};

export default CommunityPage;
