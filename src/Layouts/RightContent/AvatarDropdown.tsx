import React, { useState } from 'react';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, message } from 'antd';
import store from '@/store';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.module.scss';
import PersonalCenter from './components/PersonalCenter';
import { headImg } from '@/utils/const';
import { IUser } from '@/interfaces/user';


export type GlobalHeaderRightProps = {
  menu?: boolean;
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const [userState, userDispatchers] = store.useModel('user');
  const [personalModal, setPersonalModal] = useState(false);
  const currentUser = {
    name: userState.currentUser.nickName,
    avatar: headImg(userState.currentUser.head),
  };

  const onPersonalClick = () => {
    setPersonalModal(true);
  };

  const hideModal = () => {
    setPersonalModal(false);
  };

  const onLogOutClick = () => {
    const usr = {} as IUser;
    userDispatchers.saveUser({ currentUser: usr });
    message.success('您已退出登录');
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]}>
      {menu && (
        <Menu.Item key="center" onClick={onPersonalClick}>
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout" style={{ color: 'red' }} onClick={onLogOutClick}>
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>
      <PersonalCenter personalModal={personalModal} hideModal={hideModal} />
    </>
  );
};

export default AvatarDropdown;
