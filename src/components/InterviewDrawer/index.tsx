/* eslint-disable array-callback-return */
import { Drawer, Button, Space, List } from 'antd';
import { useState } from 'react';
import InterviewItem from '../InterviewItem';
import styles from './index.module.scss';

const InterviewDrawer = (props: any) => {
  const { drawerVisible, closeDrawer } = props;
  const [initLoading, IsetnitLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const onLoadMore = () => {

  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;


  return (
    <>
      <Drawer
        title="Multi-level drawer"
        width={'auto'}
        closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        {/* <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button> */}
        {/* <Space>
          {
            num.map(() => {
              return <InterviewItem />;
            })
          }
        </Space> */}
        <List
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={num}
          renderItem={(item, index) => (
            <div className={index > 0 ? styles.listItem : undefined}>
              <InterviewItem />
            </div>
          )}
        />
      </Drawer>
    </>
  );
};
export default InterviewDrawer;
