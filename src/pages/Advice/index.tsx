import { List, Avatar, Space, Button, Card, Form, Radio, Typography, Empty } from 'antd';
import { LikeOutlined, SortDescendingOutlined, PlusOutlined, RocketOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import AddAdvice from '@/components/AddAdvice';
import { deBounce, numConvert } from '@/utils/utils';
import { cloneDeep } from 'lodash';
import styles from './index.module.scss';
import store from '@/store';
import adviceService from '@/services/adviceService';
import { headImg, PAGE_SIZE } from '@/utils/const';


const formItemLayout = {
  labelCol: {
    sm: {
      span: 4,
    },
    lg: {
      span: 3,
    },
    xl: {
      span: 2,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
  },
};

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Advice = () => {
  const [addAdviceModal, setAddAdviceModal] = useState(false);
  const [form] = Form.useForm();
  const [adviceState, adviceDispatchers] = store.useModel('advice');
  const [params, setParams] = useState({ page: 1, pageSize: 12, sort: 'updateTime' });
  const [loading, setLoading] = useState<boolean>(true);
  const [total, setTotal] = useState<number>(0);
  const cpAdviceList = cloneDeep(adviceState.adviceList);

  const getAdviceList = async (param?: any) => {
    if (!param) {
      param = params
    }
    const res = await adviceService.getInterviewList(param);
    if (res) {
      setLoading(false);
      adviceDispatchers.saveAdvice({ adviceList: res.result.data });
      setTotal(res.result.total)
    }
  }

  useEffect(() => {
    getAdviceList();
  }, [])

  const handleValuesChange = (changedValues: any) => {
    console.log('changedValues :>> ', changedValues);
    const param = { ...params, ...changedValues, page: 1, pageSize: 12, };
    setParams(param);
    getAdviceList(param);
  };

  const hideModal = () => {
    setAddAdviceModal(false);
  };
  const onAdviceClick = () => {
    setAddAdviceModal(true);
  };
  const toLike = (id: number) => {
    cpAdviceList.map((item) => {
      if (item.id === id) {
        item.likeNum += 1;
        const param = {
          likeNum: item.likeNum,
        }
        adviceService.updateAdviceLikeNum(param);
      }
    })
    adviceDispatchers.saveAdvice({ adviceList: cpAdviceList })
  };
  return (
    <>
      {
        addAdviceModal && <AddAdvice addAdviceModal={addAdviceModal} hideModal={hideModal} />
      }
      <Card bordered={false} >
        <Form
          {...formItemLayout}
          form={form}
          onValuesChange={deBounce(handleValuesChange, 500)}
          initialValues={{
            ...params,
          }}
          labelAlign="left"
        >
          <Form.Item
            label={
              <>
                <SortDescendingOutlined /> <span style={{ marginLeft: 8 }}>排序</span>
              </>
            }
            name="sort"
          >
            <Radio.Group>
              <Radio.Button value="updateTime">时间</Radio.Button>
              <Radio.Button value="like">点赞</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 0 }}
            label={
              <>
                <RocketOutlined /> <span style={{ marginLeft: 8 }}>操作</span>
              </>
            }
          >
            <Button type="primary" icon={<PlusOutlined />} onClick={onAdviceClick}>
              {'写留言'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <List
          loading={loading}
          itemLayout="vertical"
          size="large"
          pagination={{
            pageSize: params.pageSize ?? PAGE_SIZE,
            current: params.page ?? 1,
            showSizeChanger: false,
            total,
            onChange(pageNum, pageSize) {
              const param = {
                ...params,
                page: pageNum,
                pageSize
              };
              setParams(param);
              getAdviceList(param);
            },
          }}
          locale={{
            emptyText: (
              <Empty description="暂无建议哦~~">
                <Button type="primary" size="large" onClick={onAdviceClick}>
                  抢个沙发~
                </Button>
              </Empty>
            ),
          }}
          dataSource={adviceState.adviceList}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              actions={[
                <a onClick={deBounce(() => toLike(item.id), 200)}>
                  <IconText icon={LikeOutlined} text={numConvert(item.likeNum)} key="list-vertical-like-o" />
                </a>,
              ]}
            >
              <List.Item.Meta
                className={styles.meta}
                avatar={<Avatar src={headImg(item.head)} size={'large'} />}
                title={
                  <div className={styles.metaLayout}>
                    <p className={styles.title}>{item.nickName}</p>
                    <Typography.Text className={styles.time} type='secondary'> {item.createTime}</Typography.Text>
                  </div>
                }
              />
              {item.adviceDetail}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default Advice;
