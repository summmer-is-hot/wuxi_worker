import { useEffect } from 'react';
import { Table } from 'antd';
import store from '@/store';
import commentService from '@/services/commentService';

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
  },
  {
    title: '工资',
    dataIndex: 'salaryLevel',
    key: 'salaryLevel',
  },
  {
    title: '试用期打折',
    key: 'discount',
    dataIndex: 'discount',
  },
  {
    title: '社保',
    dataIndex: 'socialSecurityLevel',
    key: 'socialSecurityLevel',
  },
  {
    title: '补充商业险',
    dataIndex: 'addSocialSecurity',
    key: 'addSocialSecurity',
  },
  {
    title: '公积金',
    key: 'providentFundLevel',
    dataIndex: 'providentFundLevel',
  },
  {
    title: '补充公积金',
    key: 'addProvidentFund',
    dataIndex: 'addProvidentFund',
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
    <Table columns={columns} dataSource={commentState.commentItemList} />
  );
};

export default CommentDetail;
