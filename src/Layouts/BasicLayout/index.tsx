import { createElement } from 'react';
import ProLayout from '@ant-design/pro-layout';
import { Link } from 'ice';
import { asideMenuConfig } from './menuConfig';
import RightContent from '../RightContent';
import Footer from '../Footer';


const loopMenuItem = (menus: any) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }));

export default function BasicLayout({ children, location }) {
  console.log('location :>> ', location);
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
