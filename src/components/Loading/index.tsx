import { Spin } from 'antd';
import styles from './index.module.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      <Spin size="large" />
    </div>
  );
}

export default Loading;
