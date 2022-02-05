import React, { useState } from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, message, Spin } from 'antd';
import store from '@/store';
import { stringify } from 'querystring';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.module.scss';
// import { outLogin } from '@/services/ant-design-pro/api';
import type { MenuInfo } from 'rc-menu/lib/interface';
import PersonalCenter from '@/components/PersonalCenter';
import { useHistory } from 'ice';
import { headImg } from '@/utils/const';
import { IUser } from '@/interfaces/user';


export type GlobalHeaderRightProps = {
  menu?: boolean;
};

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  // await outLogin();
  // const { query = {}, pathname } = history.location;
  // const { redirect } = query;
  // // Note: There may be security issues, please note
  // if (window.location.pathname !== '/user/login' && !redirect) {
  //   history.replace({
  //     pathname: '/user/login',
  //     search: stringify({
  //       redirect: pathname,
  //     }),
  //   });
  // }
};

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu }) => {
  const [userState, userDispatchers] = store.useModel('user');
  const [personalModal, setPersonalModal] = useState(false);
  const history = useHistory();
  const currentUser = {
    name: userState.currentUser.nickName,
    avatar: headImg(userState.currentUser.head),
  };
  // const { initialState, setInitialState } = useModel('@@initialState');

  // const onMenuClick = useCallback(
  //   (event: MenuInfo) => {
  //     const { key } = event;
  //     if (key === 'logout') {
  //       setInitialState((s) => ({ ...s, currentUser: undefined }));
  //       loginOut();
  //       return;
  //     }
  //     history.push(`/account/${key}`);
  //   },
  //   [setInitialState],
  // );

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8,
        }}
      />
    </span>
  );

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
    // document.title = '无锡IT小眷村';
    // history.replace('/login');
  };

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]}>
      {menu && (
        <Menu.Item key="center" onClick={onPersonalClick}>
          <UserOutlined />
          个人中心
        </Menu.Item>
      )}
      {/* {menu && (
        <Menu.Item key="settings">
          <SettingOutlined />
          个人设置
        </Menu.Item>
      )} */}
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
