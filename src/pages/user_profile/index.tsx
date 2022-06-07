import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { MainLayout, Post } from 'src/components';
import { api } from 'src/services';
import { useNotification } from 'src/hooks';
import dayjs from 'dayjs';
import cn from 'classnames';
import Profile from 'src/models/Profile';

const MOCK_POSTS = [
  {
    content:
      'Obsessing with “clean code” and removing duplication is a phase many of us go through. When we don’t feel confident in our code, it is tempting to attach our sense of self-worth and professional pride to something that can be measured. A set of strict lint rules, a naming schema, a file structure, a lack of duplication.',
    datetime: '2021-03-05T14:48:00.000Z',
  },
  {
    content:
      'Coding is a journey. Think how far you came from your first line of code to where you are now. I reckon it was a joy to see for the first time how extracting a function or refactoring a class can make convoluted code simple. If you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while.',
    datetime: '2022-03-03T18:48:00.000Z',
  },
  {
    content:
      'Using the children prop to split up components usually makes the data flow of your application easier to follow and reduces the number of props plumbed down through the tree. Improved performance in cases like this is a cherry on top, not the end goal.',
    datetime: '2021-03-05T16:48:00.000Z',
  },
  {
    content:
      'Wait, what?! If the attacker can modify my app’s source code, they’ll probably just put a bitcoin miner in it. Why would they add SVG files into my app, unless you can mine bitcoins with SVG? Again, this doesn’t make any sense.',
    datetime: '2022-01-22T07:48:00.000Z',
  },
];

const UserProfile: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<Profile>(new Profile({}));
  const { userId } = useParams();
  const navigate = useNavigate();

  const { sendNotification, levels } = useNotification();

  const loadCurrentUser = async () => {
    if (!userId) return;

    try {
      setCurrentUser(currentUser);
      const { data } = await api.profile.get({ userId: +userId });
      if (data) {
        setCurrentUser(data);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  // const handleFollowClick = async (
  //   userId: User['id'],
  //   followed: User['followed'],
  // ) => {
  //   try {
  //     if (!followed) {
  //       const { data } = await api.profile.follow({ userId });
  //       if (data.resultCode === 0) {
  //         loadCurrentUser();
  //       } else {
  //         sendNotification(levels.ERROR, data.messages[0]);
  //       }
  //     } else {
  //       const { data } = await api.profile.unfollow({ userId });
  //       if (data.resultCode === 0) {
  //         loadCurrentUser();
  //       } else {
  //         sendNotification(levels.ERROR, data.messages[0]);
  //       }
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    loadCurrentUser();
  }, []);

  return (
    <MainLayout>
      <Button
        type="link"
        className="mb-2"
        onClick={() => navigate('/community')}
      >
        <ArrowLeftOutlined className="text-xs !align-middle mb-0.5" />
        Back to community
      </Button>
      <div className="flex items-start justify-between">
        <div className="w-[60%] mr-2">
          {!!MOCK_POSTS.length &&
            MOCK_POSTS.sort((a, b) =>
              dayjs(a.datetime).isBefore(dayjs(b.datetime)) ? 1 : -1,
            ).map(({ datetime, content }, i) => (
              <div className={cn({ 'mt-3': i !== 0 })} key={datetime}>
                <Post
                  author={currentUser.fullName!}
                  content={content}
                  datetime={datetime}
                  avatar={currentUser.photos.small!}
                />
              </div>
            ))}
        </div>
        <div className="w-[35%] border-2">
          <div className="border-2 p-2">user info</div>
          <div className="border-2 p-2 mt-2">some info</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfile;
