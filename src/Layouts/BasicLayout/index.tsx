/* eslint-disable no-script-url */
import { createElement } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link } from 'ice';
import { asideMenuConfig } from './menuConfig';
import RightContent from '../RightContent';
import { GithubOutlined, InfoCircleOutlined, WechatOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from './index.module.scss';
import wechat from '@/assets/wechat.png';


const loopMenuItem = (menus) =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: createElement(icon),
    children: children && loopMenuItem(children),
  }));

export default function BasicLayout({ children, location }) {
  return (
    <ProLayout
      title="无锡IT之家"
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
        <DefaultFooter
          links={[
            {
              key: 'GitHub',
              title: (
                <Tooltip title="查看本站源码，欢迎 star">
                  <GithubOutlined />
                  <span className={styles.title}>GitHub</span>
                </Tooltip>
              ),
              href: 'https://github.com/ice-lab/icejs',
              blankTarget: true,
            },
            {
              key: 'Contact author',
              title: (
                <Tooltip title={<img src={wechat} width="200" />} >
                  <WechatOutlined />
                  <span className={styles.title}>联系作者</span>
                </Tooltip>
              ),
              href: 'https://github.com/ice-lab/icejs',
              blankTarget: true,
            },
            {
              key: 'Disclaimer',
              title: (
                <Tooltip title="本站所有资源均来源于网络，仅供学习参考，如有侵权，非常抱歉，请立即联系作者删除!">
                  <InfoCircleOutlined />
                  <span className={styles.title}>免责申明</span>
                </Tooltip>
              ),
              href: '#',
            },
          ]}
          // copyright="2022 无锡IT之家 | 苏ICP备19026706号-2"
          copyright="2022 无锡IT之家 | 暂未备案~~~~"
        />
      )}
    >
      <div style={{ minHeight: '60vh' }}>{children}</div>
    </ProLayout >
  );
}
