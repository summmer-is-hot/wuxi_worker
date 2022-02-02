import { Avatar, Card, message, Rate, Tooltip, Typography } from 'antd';
import React, { FC, useEffect, useState } from 'react';
// import { connect, Dispatch, history } from 'umi';
import {
  EditOutlined,
  HeartOutlined,
  HeartTwoTone,
  LoginOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
// import { ResourceType } from '@/models/resource';
// import { likeResource } from '@/services/resource';
// import { ConnectState } from '@/models/connect';
// import reviewStatusEnum from '@/constant/reviewStatusEnum';
// import { CurrentUser } from '@/models/user';
// import defaultPic from '@/assets/default.jpg';
// import TagList from '@/components/TagList';
// import { doShare } from '@/utils/businessUtils';
// import { LOGIN_STATUS, PRE_PAGE_STATE } from '@/constant';
// import { getRate } from '@/utils/utils';
// import Cookies from 'js-cookie';
// import { stringify } from 'querystring';
import styles from './index.module.scss';

const { Paragraph } = Typography;

// interface ResourceCardProps {
//   resource: ResourceType;
//   loading?: boolean;
//   showReview?: boolean; // 显示审核状态
//   showEdit?: boolean; // 显示修改
//   currentUser: CurrentUser;
//   showActions?: boolean; // 展示操作栏
//   prePageState?: any; // 记录上一页状态
//   keyword?: string; // 关键词
//   dispatch: Dispatch;
// }

const InterviewCard = (props: any) => {
  const {
    currentUser,
    resource = {},
    loading,
    showReview,
    showEdit,
    showActions = true,
    prePageState,
    keyword,
    dispatch,
  } = props;

  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likeNum, setLikeNum] = useState<number>(0);
  const rate = null;

  useEffect(() => {
    // if (resource) {
    //   setIsLike(currentUser?.likeResourceIds?.includes(resource._id) ?? false);
    //   setLikeNum(resource.likeNum ?? 0);
    //   // 关键词高亮
    //   if (keyword) {
    //     const reg = new RegExp(`(${keyword})`, 'ig');
    //     if (resource.name) {
    //       resource.name = resource.name.replace(reg, "<span style='color:#1890ff;'>$1</span>");
    //     }
    //     if (resource.desc) {
    //       resource.desc = resource.desc.replace(reg, "<span style='color:#1890ff;'>$1</span>");
    //     }
    //   }
    // }
  }, []);

  const doSearch = () => {
    // if (resource.link) {
    //   window.open(resource.link);
    // } else {
    //   window.open(`http://www.baidu.com/s?wd=${resource.name}`);
    // }
  };


  const toDetail = () => {
    // if (!showActions) {
    //   return;
    // }
    // if (prePageState) {
    //   localStorage.setItem(PRE_PAGE_STATE, JSON.stringify(prePageState));
    // }
    // history.push({
    //   pathname: '/rd/',
    //   query: {
    //     rid: resource._id,
    //   },
    // });
  };

  const actions = showActions
    ? [
      <Tooltip title="点赞">
        <div onClick={() => doSearch}>
          <ShareAltOutlined />
        </div>
      </Tooltip>,
      <Tooltip title="访问">
        <LoginOutlined onClick={doSearch} />
      </Tooltip>,
    ]
    : [];

  return (
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
            <>
              <Avatar src={resource.icon ? resource.icon : '---'} alt={resource.name} />
              {rate && (
                <Rate
                  disabled
                  allowHalf
                  count={rate}
                  defaultValue={rate}
                  className={styles.starRate}
                />
              )}
            </>
          }
          className={styles.cardMeta}
          title={
            <Tooltip
              title={
                <Paragraph style={{ color: '#fff', marginBottom: 0 }}>
                  <span dangerouslySetInnerHTML={{ __html: resource.name ?? '' }} />
                </Paragraph>
              }
            >
              <div dangerouslySetInnerHTML={{ __html: resource.name ?? '' }} />
            </Tooltip>
          }
          description={
            <Paragraph ellipsis={{ rows: 3 }} type="secondary" style={{ marginBottom: 0 }}>
              <span dangerouslySetInnerHTML={{ __html: resource.desc ?? '' }} />
            </Paragraph>
          }
        />
        {/* <TagList resource={resource} showReview={showReview} style={{ minHeight: 60 }} /> */}
      </div>
    </Card>
  );
};

export default InterviewCard;
