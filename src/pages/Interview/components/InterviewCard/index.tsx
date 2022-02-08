import { Avatar, Card, Space, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import {
  LikeOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import styles from './index.module.scss';
import InterviewDrawer from '../InterviewDrawer';
import { companyImg } from '@/utils/const';
import { deBounce, numConvert } from '@/utils/utils';
import { cloneDeep } from 'lodash';
import store from '@/store';
import interviewService from '@/services/interviewService';

const { Paragraph } = Typography;
const IconText = ({ icon, text }) => (
  <Space style={{ fontSize: '16px' }}>
    {React.createElement(icon)}
    {text}
  </Space>
);

const InterviewCard = (props: any) => {
  const {
    resource = {},
    loading,
    showActions = true,
  } = props;

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [interviewState, interviewDispatchers] = store.useModel('interview');
  const cpInterviewList = cloneDeep(interviewState.interviewList);

  const onLikeClick = () => {
    cpInterviewList.map((item) => {
      if (item.id === resource.id) {
        item.likeNum += 1;
        const param = {
          likeNum: item.likeNum,
        }
        interviewService.updateInterviewLikeNum(param);
      }
    })
    interviewDispatchers.saveInterview({ interviewList: cpInterviewList })
  };


  const toDetail = () => {
    setDrawerVisible(true);
  };

  const actions = showActions
    ? [
      <Tooltip title="点赞">
        <div onClick={deBounce(onLikeClick, 200)}>
          <IconText icon={LikeOutlined} text={numConvert(resource.likeNum)} key="list-vertical-like-o" />
        </div>
      </Tooltip>,
      <Tooltip title="访问">
        <LoginOutlined onClick={toDetail} />
      </Tooltip>,
    ]
    : [];

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      {
        drawerVisible &&
        <InterviewDrawer resource={resource} drawerVisible={drawerVisible} closeDrawer={closeDrawer} />
      }
      <Card
        className={styles.card}
        hoverable
        actions={actions}
        loading={loading}
        style={{ borderColor: resource.reviewStatus === 1 ? 'red' : '' }}
      >
        <div onClick={toDetail}>
          <Card.Meta
            avatar={
              <Avatar src={companyImg(resource.companyImage || 0)} alt={'aaa'} />
            }
            className={styles.cardMeta}
            title={
              <Tooltip
                title={
                  <Paragraph style={{ color: '#fff', marginBottom: 0 }}>
                    <span dangerouslySetInnerHTML={{ __html: resource.companyName ?? '' }} />
                  </Paragraph>
                }
              >
                <Paragraph ellipsis={{ rows: 1 }} style={{ marginBottom: 0 }}>
                  <span dangerouslySetInnerHTML={{ __html: resource.companyName ?? '' }} />
                </Paragraph>
              </Tooltip>
            }
            description={
              <Paragraph ellipsis={{ rows: 3 }} type="secondary" style={{ marginBottom: 0 }}>
                <span dangerouslySetInnerHTML={{ __html: resource.introduction ?? '' }} />
              </Paragraph>
            }
          />
        </div>
      </Card>
    </>
  );
};

export default InterviewCard;
