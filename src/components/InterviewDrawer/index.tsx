/* eslint-disable array-callback-return */
import { IInterviewItem } from '@/interfaces/interview';
import interviewService from '@/services/interviewService';
import store from '@/store';
import { Drawer, Button, Space, List } from 'antd';
import { useEffect, useState } from 'react';
import InterviewItem from '../InterviewItem';
import styles from './index.module.scss';

const InterviewDrawer = (props: any) => {
  const { resource, drawerVisible, closeDrawer } = props;
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [interviewState, interviewDispatcher] = store.useModel('interview')
  const cpInterviewItemList = interviewState.interviewItemList;

  const getInterviewItemListById = async () => {
    const param = {
      id: resource.id,
      page
    }
    const res = await interviewService.getInterviewItemListById(param);
    if (res) {
      setLoading(false);
      if (page === 1) {
        interviewDispatcher.saveInterviewItem({ interviewItemList: res.result.data })

      } else {
        interviewDispatcher.saveInterviewItem({ interviewItemList: cpInterviewItemList.concat(res.result.data) })

      }
      if (res.result.nextPage) {
        setPage(res.result.nextPage)
      } else {
        setHasNextPage(false)
      }
    }
  };

  useEffect(() => {
    getInterviewItemListById();
  }, [])

  const onLoadMore = () => {
    setLoading(true);
    getInterviewItemListById();
  };
  const loadMore =
    hasNextPage ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore} loading={loading}>加载更多</Button>
      </div>
    ) : null;


  return (
    <>
      <Drawer
        title={resource.companyName}
        width={'auto'}
        // closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        <List<IInterviewItem>
          itemLayout="vertical"
          loadMore={loadMore}
          dataSource={interviewState.interviewItemList}
          renderItem={(item: IInterviewItem, index) => (
            <div className={index > 0 ? styles.listItem : undefined}>
              <InterviewItem interviewItem={item} />
            </div>
          )}
        />
      </Drawer>
    </>
  );
};
export default InterviewDrawer;
