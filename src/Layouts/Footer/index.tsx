import { GithubOutlined, InfoCircleOutlined, WechatOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';
import { Tooltip } from 'antd';
import wechat from '@/assets/wechat.png';
import styles from './index.module.scss';

export default () => {
  return (
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
          href: 'https://github.com/summmer-is-hot/wuxi_worker',
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
          href: '#!',
          // blankTarget: true,
        },
        {
          key: 'Disclaimer',
          title: (
            <Tooltip title="本站所有资源均来源于网络，仅供参考，如有不当之处，请立即联系作者删除!">
              <InfoCircleOutlined />
              <span className={styles.title}>免责申明</span>
            </Tooltip>
          ),
          href: '#!',
        },
      ]}
      // copyright="2022 无锡IT小眷村 | 苏ICP备19026706号-2"
      copyright="2022 无锡IT小眷村 | 暂未备案~~~~"
    />
  );
};
