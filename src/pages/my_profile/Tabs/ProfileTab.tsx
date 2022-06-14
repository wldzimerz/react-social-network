import React, { useEffect, useState } from 'react';
import { useNotification } from 'src/hooks';
import { Helmet } from 'react-helmet';
import Profile from 'src/models/Profile';
import { api } from 'src/services';

// const MY_POSTS_MOCK = [
//   {
//     content:
//       'Obsessing with “clean code” and removing duplication is a phase many of us go through. When we don’t feel confident in our code, it is tempting to attach our sense of self-worth and professional pride to something that can be measured. A set of strict lint rules, a naming schema, a file structure, a lack of duplication.',
//     datetime: '2021-03-05T14:48:00.000Z',
//   },
//   {
//     content:
//       'Coding is a journey. Think how far you came from your first line of code to where you are now. I reckon it was a joy to see for the first time how extracting a function or refactoring a class can make convoluted code simple. If you find pride in your craft, it is tempting to pursue cleanliness in code. Do it for a while.',
//     datetime: '2022-03-03T18:48:00.000Z',
//   },
//   {
//     content:
//       'Using the children prop to split up components usually makes the data flow of your application easier to follow and reduces the number of props plumbed down through the tree. Improved performance in cases like this is a cherry on top, not the end goal.',
//     datetime: '2021-03-05T16:48:00.000Z',
//   },
//   {
//     content:
//       'Wait, what?! If the attacker can modify my app’s source code, they’ll probably just put a bitcoin miner in it. Why would they add SVG files into my app, unless you can mine bitcoins with SVG? Again, this doesn’t make any sense.',
//     datetime: '2022-01-22T07:48:00.000Z',
//   },
// ];

export const ProfileTab: React.FC = () => {
  const [myProfile, setMyProfile] = useState<Profile>();
  const { levels, sendNotification } = useNotification();
  // eslint-disable-next-line no-console
  console.log('🚀🚀🚀 ~ myProfile', myProfile);
  const myId = 21050; // TODO from global state

  const loadMyProfile = async () => {
    try {
      const { data } = await api.profile.get({ userId: myId });
      if (data) setMyProfile(data);
    } catch (error) {
      console.error(error);
      sendNotification(levels.ERROR);
    }
  };

  useEffect(() => {
    loadMyProfile();
  }, []);

  return (
    <>
      <Helmet title="IN TOUCH | Profile" />
      <div>ProfileTab</div>
    </>
  );
};
