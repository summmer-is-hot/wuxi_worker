import { Card, Col, Row, Space } from 'antd';
import LineChart from './components/Charts';
import styles from './index.module.scss';


export default function AboutUs() {
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
    </div>
  );
}
