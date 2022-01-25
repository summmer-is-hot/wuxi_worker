import { Space } from 'antd';
import React from 'react';
import Avatar from './AvatarDropdown';
import styles from './index.module.scss';

const GlobalHeaderRight: React.FC = () => {
  return (
    <Space className={styles.right}>
      <Avatar menu />
    </Space>
  );
};

export default GlobalHeaderRight;
