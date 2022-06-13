import { Tabs, TabsProps } from 'antd';
import React from 'react';

export type Tab = {
  title: string;
  content: React.ReactNode;
};

interface Props extends TabsProps {
  tabs: Tab[];
  defaultActive?: string;
}

export const Tablist: React.FC<Props> = ({
  tabs,
  defaultActive = '1',
  ...props
}) => {
  return (
    <Tabs {...props} defaultActiveKey={defaultActive}>
      {tabs.map(({ title, content }: Tab, i: number) => (
        <Tabs.TabPane tab={title} key={(i + 1).toString()}>
          {content}
        </Tabs.TabPane>
      ))}
    </Tabs>
  );
};
