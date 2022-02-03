/* eslint-disable max-len */
import { List, Avatar, Space, Button, Card, Typography, Row, Col, Form, Radio } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined, SortDescendingOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import AddCompany from '@/components/AddCompany';
import AddAdvice from '@/components/AddAdvice';
import { deepCopyJSON } from '@/utils/utils';

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

const listData: any[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://joeschmoe.io/api/v1/random',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Advice = () => {
  const [addAdviceModal, setAddAdviceModal] = useState(false);
  const [star, setStar] = useState<Number>(0);
  const [form] = Form.useForm();

  const hideModal = () => {
    setAddAdviceModal(false);
  };
  const onAdviceClick = () => {
    setAddAdviceModal(true);
  };
  const toStar = () => {
    const dpStar = deepCopyJSON(star);
    setStar(Number(dpStar) + 1);
  };
  return (
    <>
      {
        addAdviceModal && <AddAdvice addAdviceModal={addAdviceModal} hideModal={hideModal} />
      }
      <Card bordered={false} bodyStyle={{ paddingBottom: 0 }}>
        <Form
          {...formItemLayout}
          form={form}
          // onValuesChange={deBounce(handleValuesChange, 500)}
          // initialValues={{
          //   orderKey: '_createTime',
          //   ...searchParams,
          // }}
          labelAlign="left"
        >
          <Form.Item
            label={
              <>
                <SortDescendingOutlined /> <span style={{ marginLeft: 8 }}>排序</span>
              </>
            }
            name="orderKey"
          >
            <Radio.Group>
              {/* <Radio.Button value="normal">默认</Radio.Button> */}
              <Radio.Button value="updateTime">时间</Radio.Button>
              <Radio.Button value="star">点赞</Radio.Button>
            </Radio.Group>
            <Button type="primary" icon={<PlusOutlined />} style={{ float: 'right' }} onClick={onAdviceClick}>
              写留言
            </Button>
          </Form.Item>
        </Form>
        {/* <Button type="primary" icon={<SearchOutlined />} style={{ float: 'right' }}>
          Search
        </Button> */}
      </Card>
      <Card style={{ marginTop: '20px' }}>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                <a onClick={toStar}>
                  <IconText icon={LikeOutlined} text={star} key="list-vertical-like-o" />
                </a>,
                // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
              ]}
            // extra={
            //   <img
            //     width={272}
            //     alt="logo"
            //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            //   />
            // }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
              // description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </Card>
    </>
  );
};

export default Advice;
