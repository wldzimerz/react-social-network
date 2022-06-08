import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  ArrowLeftOutlined,
  EyeInvisibleFilled,
  FacebookOutlined,
  GithubOutlined,
  GlobalOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Button, Image, Tooltip } from 'antd';
import { MainLayout, Post } from 'src/components';
import { api } from 'src/services';
import { useNotification } from 'src/hooks';
import dayjs from 'dayjs';
import cn from 'classnames';
import Profile from 'src/models/Profile';
import { VKIcon } from 'src/assets/icons';

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
  const [userStatus, setUserStatus] = useState<string | null>(null);
  const [isFollowed, setFollowed] = useState<boolean | null>(null);
  const { aboutMe, fullName, photos, contacts } = currentUser;
  const navigate = useNavigate();
  const { userId } = useParams();
  const { sendNotification, levels } = useNotification();
  const [params] = useSearchParams();
  const fromPage = params.get('fromPage');
  const fromCount = params.get('fromCount');

  // eslint-disable-next-line no-console
  console.log('contact: ', Object.entries(contacts));

  const loadCurrentUser = async () => {
    if (!userId) return;

    try {
      const { data } = await api.profile.get({ userId: +userId });
      if (data) {
        setCurrentUser(data);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  const loadUserStatus = async () => {
    if (!userId) return;

    try {
      const { data } = await api.profile.get_status({ userId: +userId });
      if (data) {
        setUserStatus(data);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  const loadIsUserFollowed = async () => {
    try {
      const { data } = await api.users.get({
        page: +fromPage! ?? 1,
        count: +fromCount! ?? 100,
      });
      if (!data.error) {
        const userFollowed = data.items.find(u => u.id === +userId!)?.followed;
        setFollowed(userFollowed!);
      }
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  const handleFollowClick = async () => {
    try {
      if (!isFollowed) {
        const { data } = await api.profile.follow({ userId: +userId! });
        if (data.resultCode === 0) {
          loadIsUserFollowed();
        } else {
          sendNotification(levels.ERROR, data.messages[0]);
        }
      } else {
        const { data } = await api.profile.unfollow({ userId: +userId! });
        if (data.resultCode === 0) {
          loadIsUserFollowed();
        } else {
          sendNotification(levels.ERROR, data.messages[0]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const socialMediaIcon: { [key: string]: React.ReactElement } = {
    website: <GlobalOutlined className="text-2xl fill-current" />,
    mainLink: <GlobalOutlined className="text-2xl fill-current" />,
    github: <GithubOutlined className="text-2xl fill-current" />,
    facebook: <FacebookOutlined className="text-2xl fill-current" />,
    twitter: <TwitterOutlined className="text-2xl fill-current" />,
    instagram: <InstagramOutlined className="text-2xl fill-current" />,
    youtube: <YoutubeOutlined className="text-2xl fill-current" />,
    vk: <VKIcon className="text-2xl" color="currentColor" />,
  };

  useEffect(() => {
    loadCurrentUser();
    loadUserStatus();
    loadIsUserFollowed();
  }, []);

  return (
    <MainLayout>
      <Button
        type="link"
        className="mb-2"
        onClick={() =>
          navigate(`/community?page=${fromPage}&count=${fromCount}`)
        }
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
                  author={fullName!}
                  content={content}
                  datetime={datetime}
                  avatar={photos.small!}
                />
              </div>
            ))}
        </div>
        <div className="w-[37%]">
          <div className="w-full">
            <div className="bg-white rounded p-1 ml-10 max-w-min flex items-center">
              {photos.large && photos.small ? (
                <Image
                  width={200}
                  src={photos?.small}
                  preview={{
                    src: photos?.large,
                  }}
                />
              ) : (
                <div className="w-[200px] h-[200px] flex items-center justify-center bg-slate-200">
                  <span className="inline-flex items-center">
                    <EyeInvisibleFilled />
                    <span className="ml-2">NO PHOTO</span>
                  </span>
                </div>
              )}
            </div>
            <div className="bg-white -mt-24 pt-6 pr-4 pb-4 pl-11 w-full">
              <div className="flex items-end">
                <Button
                  onClick={handleFollowClick}
                  className="ml-auto mr-0"
                  type="primary"
                  size="small"
                >
                  {isFollowed ? 'Unfollow' : 'Follow'}
                </Button>
              </div>
              <div className="flex items-center justify-between whitespace-nowrap mt-20">
                <span className="block font-bold text-xl text-main_blue tracking-widest capitalize">
                  {fullName}
                </span>
                <Tooltip title={userStatus}>
                  <span className="text-md font-thin max-w-[30%] truncate">
                    {userStatus ?? 'No status'}
                  </span>
                </Tooltip>
              </div>
              <div className="my-4 text-lg">
                {aboutMe ?? 'About me description can be placed here...'}
              </div>
              <div>
                {Object.entries(contacts).filter(c => c[1] !== null).length !==
                0 ? (
                  <>
                    <span className="font-bold text-md">Contacts</span>
                    <div className="flex items-center justify-evenly flex-wrap mt-2">
                      {Object.entries(contacts).map(
                        ([resource, url]) =>
                          url && (
                            <a
                              key={resource}
                              href={
                                url.includes('https://')
                                  ? url
                                  : `https://${url}`
                              }
                              className="flex flex-col items-center text-black m-1"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              {socialMediaIcon[resource] ?? (
                                <GlobalOutlined className="text-base" />
                              )}
                              <span className="text-xs capitalize mt-1">
                                {resource}
                              </span>
                            </a>
                          ),
                      )}
                    </div>
                  </>
                ) : (
                  <span className="font-thin">No contacts</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfile;
