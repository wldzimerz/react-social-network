import React from 'react';
import { AimOutlined } from '@ant-design/icons';

export const Preloader: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-100">
      <span className="text-main_blue">
        <AimOutlined className="fill-current text-6xl animate-spin" />
      </span>
    </div>
  );
};
