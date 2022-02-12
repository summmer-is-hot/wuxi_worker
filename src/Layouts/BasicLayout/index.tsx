import { createElement, useEffect } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'ice';
import { asideMenuConfig } from './menuConfig';
import RightContent from '../RightContent';
import Footer from '../Footer';
import userService from '@/services/userService';
import store from '@/store';


const loopMenuItem = (menus: any) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }));

export default function BasicLayout({ children, location }) {
  console.log('location :>> ', location);
  const [, userDispatchers] = store.useModel('user');
  const getUserInfo = async () => {
    const userInfoRes = await userService.getUserInfo();
    if (userInfoRes) {
      userDispatchers.saveUser({ currentUser: userInfoRes.result });
    } else {
      userDispatchers.saveUser({ currentUser: {} });
    }
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <ProLayout
      fixedHeader
      fixSiderbar
      logo={<img alt="logo" src="/favicon.png" />}
      title="无锡IT小眷村"
      style={{
        minHeight: '100vh',
      }}
      location={{
        pathname: location.pathname,
      }}
      menuDataRender={() => loopMenuItem(asideMenuConfig)}
      menuItemRender={(item, defaultDom) => {
        if (!item.path) {
          return defaultDom;
        }
        return <Link to={item.path}>{defaultDom}</Link>;
      }}
      rightContentRender={() => <RightContent />}
      footerRender={() => (
        <Footer />
      )}
    >
      <div style={{ minHeight: '60vh' }}>{children}</div>
    </ProLayout >
  );
}
