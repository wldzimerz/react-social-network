import React, { useCallback, useState } from 'react';
import { Avatar, Comment, Tooltip } from 'antd';
import dayjs from 'dayjs';
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@ant-design/icons';
import cn from 'classnames';

interface Props {
  author: string;
  content: string;
  datetime: string;
  avatar: string | null;
}

export const Post: React.FC<Props> = ({
  author,
  content,
  datetime,
  avatar,
}) => {
  const [marks, setMarks] = useState<{ likes: number; dislikes: number }>({
    likes: 0,
    dislikes: 0,
  });
  const { likes, dislikes } = marks;

  const like = useCallback(() => {
    setMarks(prev => ({ likes: prev.likes === 0 ? 1 : 0, dislikes: 0 }));
  }, []);

  const dislike = useCallback(() => {
    setMarks(prev => ({ likes: 0, dislikes: prev.dislikes === 0 ? 1 : 0 }));
  }, []);

  const actions = [
    <Tooltip title="Like">
      <span
        onClick={like}
        className={cn('inline-flex items-center', {
          '!text-main_blue': likes !== 0,
        })}
      >
        {likes ? <LikeFilled className="fill-current" /> : <LikeOutlined />}
        <span className="ml-1">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip title="Dislike">
      <span
        onClick={dislike}
        className={cn('inline-flex items-center', {
          '!text-red-500': dislikes !== 0,
        })}
      >
        {dislikes ? (
          <DislikeFilled className="fill-current" />
        ) : (
          <DislikeOutlined />
        )}
        <span className="ml-1">{dislikes}</span>
      </span>
    </Tooltip>,
  ];

  return (
    <div className="bg-white shadow-md px-4 py-1">
      <Comment
        actions={actions}
        author={<span className="capitalize">{author}</span>}
        content={<p className="text-justify mr-4">{content}</p>}
        avatar={
          <Avatar src={avatar} alt={author} className="!bg-main_blue">
            {author[0]?.toUpperCase() ?? ''}
          </Avatar>
        }
        datetime={dayjs(datetime).format('DD-MM-YYYY')}
      />
    </div>
  );
};
