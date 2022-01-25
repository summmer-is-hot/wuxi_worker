import { Col, Row, Space } from 'antd';
import LineChart from './components/Charts';
import styles from './index.module.scss';


export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Row justify="space-between">
        <Col span={7}>
          <span>公司数量</span>
          <div className={styles.chartDiv}>
            <LineChart />
          </div>
        </Col>
        <Col span={7}>
          <span>评论数量</span>
          <div className={styles.chartDiv}>
            <LineChart />
          </div>
        </Col>
        <Col span={7}>
          <span>访问量</span>
          <div className={styles.chartDiv}>
            <LineChart />
          </div>
        </Col>
      </Row>
    </div>
  );
}
