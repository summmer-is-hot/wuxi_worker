import store from '@/store';
import { Button, Space } from 'antd';
import React from 'react';
import Avatar from './AvatarDropdown';
import { useHistory } from 'ice';
// import qs from 'qs';
import styles from './index.module.scss';

const GlobalHeaderRight: React.FC = () => {
  const history = useHistory();
  const [userState] = store.useModel('user');
  console.log('userState.user :>> ', userState.currentUser);
  const onLoginClick = () => {
    const { pathname } = history.location;
    // Note: There may be security issues, please note
    if (window.location.pathname !== '/login') {
      history.replace({
        pathname: '/login',
        search: `redirect=${pathname}`,
      });
    }
  };

  return (
    <Space className={styles.right}>
      {
        userState.currentUser.userId ? <Avatar menu /> : <Button type="primary" onClick={onLoginClick}>登录</Button>
      }
    </Space>
  );
};

export default GlobalHeaderRight;
