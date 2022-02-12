import { useEffect } from 'react';
import { Table, Tag } from 'antd';
import store from '@/store';
import commentService from '@/services/commentService';
import { getAddProvidentFund, getAddSocialSecurity, getDiscount, getProvidentFundLevel, getSalaryLevel, getSocialSecurityLevel } from '@/utils/const';

const columns = [
  {
    title: '评论',
    dataIndex: 'comment',
    width: 600,
    key: 'comment',
    render: (text: any) => (
      <div style={{ wordWrap: 'break-word', wordBreak: 'break-word' }}>
        {text}
      </div>
    ),
  },
  {
    title: '评分',
    dataIndex: 'score',
    key: 'score',
    render: (score: any) => (
      <Tag color={score > 6 ? 'success' : score > 3 ? 'warning' : score > 0 ? 'error' : 'error'}>
        {score}
      </Tag >
    )
  },
  {
    title: '工资',
    dataIndex: 'salaryLevel',
    key: 'salaryLevel',
    render: (salaryLevel: any) => (
      <Tag color={salaryLevel > 3 ? 'error' : salaryLevel > 2 ? 'warning' : salaryLevel > 0 ? 'success' : 'error'}>
        {getSalaryLevel(salaryLevel)}
      </Tag>
    )
  },
  {
    title: '试用期打折',
    key: 'discount',
    dataIndex: 'discount',
    render: (discount: any) => (
      <Tag color={discount == 1 ? 'success' : discount == 2 ? 'warning' : 'error'} >
        {getDiscount(discount)}
      </Tag>
    )
  },
  {
    title: '社保',
    dataIndex: 'socialSecurityLevel',
    key: 'socialSecurityLevel',
    render: (socialSecurityLevel: any) => (
      <Tag color={socialSecurityLevel > 4 ? 'error' : socialSecurityLevel > 2 ? 'warning' : socialSecurityLevel > 0 ? 'success' : 'error'}>
        {getSocialSecurityLevel(socialSecurityLevel)}
      </Tag>
    )
  },
  {
    title: '补充商业险',
    dataIndex: 'addSocialSecurity',
    key: 'addSocialSecurity',
    render: (addSocialSecurity: any) => (
      <Tag color={addSocialSecurity == 1 ? 'success' : 'error'} >
        {getAddSocialSecurity(addSocialSecurity)}
      </Tag>
    )
  },
  {
    title: '公积金',
    key: 'providentFundLevel',
    dataIndex: 'providentFundLevel',
    render: (providentFundLevel: any) => (
      <Tag color={providentFundLevel > 4 ? 'error' : providentFundLevel > 2 ? 'warning' : providentFundLevel > 0 ? 'success' : 'error'}>
        {getProvidentFundLevel(providentFundLevel)}
      </Tag>
    )
  },
  {
    title: '补充公积金',
    key: 'addProvidentFund',
    dataIndex: 'addProvidentFund',
    render: (addProvidentFund: any) => (
      <Tag color={addProvidentFund == 1 ? 'success' : 'error'} >
        {getAddProvidentFund(addProvidentFund)}
      </Tag>
    )
  },
];

const CommentDetail = (props: any) => {
  const { commentId } = props;
  const [commentState, commentDispatchers] = store.useModel('comment');
  const getCommentById = async () => {
    const param = {
      id: commentId,
    };
    const res = await commentService.getCommentById(param);
    if (res) {
      commentDispatchers.saveCommentItem({ commentItemList: res.result });
    }
  };

  useEffect(() => {
    getCommentById();
  }, [commentId]);
  return (
    <Table rowKey="id" columns={columns} dataSource={commentState.commentItemList} />
  );
};

export default CommentDetail;
