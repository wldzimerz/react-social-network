import React, { memo, useCallback, useState } from 'react';
import { Avatar, Comment } from 'antd';
import dayjs from 'dayjs';
import {
  CommentOutlined,
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@ant-design/icons';
import cn from 'classnames';

export interface IPost {
  content: string;
  datetime: string;
  marks: {
    likes: number;
    dislikes: number;
    comments: number;
  };
}
interface Props {
  author: string;
  post: IPost;
  avatar: string | null;
}

export const Post: React.FC<Props> = memo(({ author, post, avatar }) => {
  const { content, datetime, marks } = post;

  const [marksState, setMarks] = useState<{
    action: 'like' | 'dislike' | null;
    marksCount: number;
    comments: number;
  }>({
    action: null,
    marksCount: marks.likes - marks.dislikes,
    comments: marks.comments,
  });

  const { action, marksCount, comments } = marksState;

  const like = useCallback(() => {
    switch (action) {
      case 'like':
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount - 1,
          action: null,
        }));

      case 'dislike':
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount + 2,
          action: 'like',
        }));

      default:
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount + 1,
          action: 'like',
        }));
    }
  }, [action, marksCount]);

  const dislike = useCallback(() => {
    switch (action) {
      case 'dislike':
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount + 1,
          action: null,
        }));
      case 'like':
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount - 2,
          action: 'dislike',
        }));

      default:
        return setMarks(prev => ({
          ...prev,
          marksCount: marksCount - 1,
          action: 'dislike',
        }));
    }
  }, [action, marksCount]);

  const actions = [
    <span
      onClick={like}
      className={cn('inline-flex items-center', {
        '!text-main_blue': action === 'like',
      })}
    >
      {action === 'like' ? (
        <LikeFilled className="fill-current" />
      ) : (
        <LikeOutlined />
      )}
    </span>,
    <span>{marksCount}</span>,
    <span
      onClick={dislike}
      className={cn('inline-flex items-center', {
        '!text-red-500': action === 'dislike',
      })}
    >
      {action === 'dislike' ? (
        <DislikeFilled className="fill-current" />
      ) : (
        <DislikeOutlined />
      )}
    </span>,
    <span className="inline-flex items-center ml-2">
      <CommentOutlined />
      <span className="ml-1 mt-1">{comments}</span>
    </span>,
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
});
