import React from 'react';
import { AimOutlined } from '@ant-design/icons';
import cn from 'classnames';

interface Props {
  fullScreen?: boolean;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

export const Preloader: React.FC<Props> = ({
  fullScreen = true,
  size = 'large',
  className,
}) => {
  return (
    <div
      className={cn(className, {
        'flex items-center justify-center w-screen h-screen': fullScreen,
      })}
    >
      <span className="text-main_blue">
        <AimOutlined
          className={cn('fill-current animate-spin opacity-50', {
            'text-xl': size === 'small',
            'text-3xl': size === 'medium',
            'text-6xl': size === 'large',
          })}
        />
      </span>
    </div>
  );
};
