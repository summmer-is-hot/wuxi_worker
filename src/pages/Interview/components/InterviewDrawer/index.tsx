import { IInterviewItem } from '@/interfaces/interview';
import interviewService from '@/services/interviewService';
import store from '@/store';
import { PlusOutlined } from '@ant-design/icons';
import { Drawer, Button, List } from 'antd';
import { useEffect, useState } from 'react';
import AddInterview from '../AddInterview';
import InterviewItem from '../InterviewItem';
import styles from './index.module.scss';

const InterviewDrawer = (props: any) => {
  const { resource, drawerVisible, closeDrawer } = props;
  const [addInterviewModal, setAddInterviewModal] = useState(false);
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

  const addInterviewClick = () => {
    setAddInterviewModal(true);
  };

  const hideModal = () => {
    setAddInterviewModal(false);
  };

  const loadMore =
    hasNextPage ? (
      <div className={styles.loadMore}>
        <Button onClick={onLoadMore} loading={loading}>加载更多</Button>
      </div>
    ) : (
      <div className={styles.loadMore}>
        <Button disabled>暂无更多~</Button>
      </div>
    );


  return (
    <>
      <AddInterview addInterviewModal={addInterviewModal} hideModal={hideModal} company={resource} />
      <Drawer
        title={resource.companyName}
        width={'550'}
        // closable={false}
        onClose={closeDrawer}
        visible={drawerVisible}
        extra={
          <Button type="primary" icon={<PlusOutlined />} onClick={addInterviewClick}>
            {'写面经'}
          </Button>
        }
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
