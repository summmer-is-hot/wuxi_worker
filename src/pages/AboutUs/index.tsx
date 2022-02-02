import { Card, Col, Divider, Row, Typography } from 'antd';
import LineChart from './components/Charts';
import styles from './index.module.scss';

const { Text, Link } = Typography;

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="公司数量" bordered={false}>
            <LineChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="评论数量" bordered={false}>
            <LineChart />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="访问量" bordered={false}>
            <LineChart />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Divider orientation="left" orientationMargin="0">关于网站</Divider>
          <Text type="warning">
            开设此网站的旨在为无锡从事互联网行业工作的朋友提供求职指南~~
            此网站由网友们提供了无锡部分互联网企业的一些基本资料，福利待遇等等信息...<br />
            欢迎各位老铁补充和完善~~~~<br />
            如果觉得不错~~欢迎点击下方Github链接给我的开源项目<Text type="danger">点点star</Text>~~,当然也可以
            <Link href="https://github.com/summmer-is-hot/wuxi_worker" target="_blank">
              点击这里
            </Link>
            。
          </Text>
          <Divider orientation="left" orientationMargin="0">关于作者</Divider>
          <Text type="success">
            技术栈：JavaScript、TypeScript、React.js、Vue.js、Node.js、Java...<br />
            以上技术略懂一二，欢迎大佬指点~~<br />
            如有疑问和建议，请点击底部联系作者~~~
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
