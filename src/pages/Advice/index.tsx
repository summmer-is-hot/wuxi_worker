/* eslint-disable max-len */
import { List, Avatar, Space, Button, Card, Typography, Row, Col } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import AddCompany from '@/components/AddCompany';
import AddAdvice from '@/components/AddAdvice';

const { Text, Link } = Typography;

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
  const hideModal = () => {
    setAddAdviceModal(false);
  };
  const onAdviceClick = () => {
    setAddAdviceModal(true);
  }
  return (
    <>
      {
        addAdviceModal && <AddAdvice addAdviceModal={addAdviceModal} hideModal={hideModal} />
      }
      <Card>
        <Row align="middle">
          <Col span={20} >
            <Text type="success">各位亲在这留下宝贵的意见吧~~</Text>
          </Col>
          <Col span={4}>
            <Button type="primary" style={{ float: 'right' }} onClick={onAdviceClick}>新增留言</Button>
          </Col>
        </Row>
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
                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
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
