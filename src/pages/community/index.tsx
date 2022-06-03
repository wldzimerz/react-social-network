import { Avatar, Button, Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { MainLayout, Preloader } from 'src/components';
import { useNotification } from 'src/hooks';
import User from 'src/models/User';
import { api } from 'src/services';

const CommunityPage: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<User[]>([]);

  const navigate = useNavigate();
  const { levels, sendNotification } = useNotification();

  const loadUsers = async () => {
    try {
      const { data } = await api.users.get({ page: 1, count: 5 });
      if (!data.error) {
        setUsers(data.items.map(u => new User(u)));
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

  const handleFollowClick = async (
    userId: User['id'],
    followed: User['followed'],
  ) => {
    try {
      if (!followed) {
        const { data } = await api.profile.follow({ userId });
        if (data.resultCode === 0) {
          loadUsers();
        } else {
          sendNotification(levels.ERROR, data.messages[0]);
        }
      } else {
        const { data } = await api.profile.unfollow({ userId });
        if (data.resultCode === 0) {
          loadUsers();
        } else {
          sendNotification(levels.ERROR, data.messages[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <MainLayout>
      <>
        <Helmet title="IN TOUCH | Community" />
        <div>
          <span>Users</span>
          {loading && (
            <Preloader fullScreen={false} className="text-center block mt-16" />
          )}
          {users.length &&
            users?.map(({ id, name, followed }: User) => {
              return (
                <div className="my-2" key={id}>
                  <Card
                    hoverable
                    onClick={() => navigate(`${id}`)}
                    title={
                      <div className="flex items-center">
                        <Avatar />
                        <span className="ml-2 font-bold capitalize">
                          {name}
                        </span>
                      </div>
                    }
                    extra={
                      <Button
                        type="ghost"
                        onClick={e => {
                          e.stopPropagation();
                          handleFollowClick(id, followed);
                        }}
                      >
                        {!followed ? 'Follow' : 'Unfollow'}
                      </Button>
                    }
                  >
                    <div>info, </div>
                  </Card>
                </div>
              );
            })}
        </div>
      </>
    </MainLayout>
  );
};

export default CommunityPage;
