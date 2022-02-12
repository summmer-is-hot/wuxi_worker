import { useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Modal } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import CommentDetail from './components/CommentDetail';
import AddComment from './components/AddComment';
import { IComment } from '@/interfaces/comment';
import commentService from '@/services/commentService';


const CompanyComment = () => {
  const columns: Array<ProColumns<IComment>> = [
    {
      title: '小眷村',
      dataIndex: 'name',
      width: 200,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请填写小眷村（即公司简称）',
          },
        ],
      },
    },
    {
      title: '最新点评',
      width: 600,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请填写最新点评',
          },
        ],
      },
      dataIndex: 'comment',
      search: false,
    },
    {
      title: '综合评分',
      width: 100,
      sorter: true,
      dataIndex: 'score',
      formItemProps: {
        rules: [
          {
            required: true,
            message: '请填写综合评分',
          },
          {
            pattern: /^((0\.[1-9]{1})|10|(([1-9]{1})(\.\d{1})?))$/,
            message: '填写0-10的整数，可保留一位小数',
          },
        ],
      },
      editable: false,
      search: false,
      render: (_, record) => (
        <Space>
          <Tag
            color={record.score > 6 ? 'success' : record.score > 3 ? 'warning' : record.score > 0 ? 'error' : 'error'}
          >
            {record.score}
          </Tag >
        </Space >
      ),
    },
    {
      title: '操作',
      width: 200,
      valueType: 'option',
      render: (text, record, _, action) => [
        <a key={record.id} type="primary" onClick={() => showDetailModal(record.id)}>
          详情
        </a>,
        <a
          type="primary"
          key={record.id}
          onClick={() => { action?.startEditable?.(record.id); }}
        >
          编辑
        </a>,
      ],
    },
  ];
  const actionRef = useRef<ActionType>();
  const [detailVisible, setDetailVisible] = useState(false);
  const [addCommentVisible, setAddCommentVisible] = useState(false);
  const [commentId, setCommentId] = useState<number>(0);


  const showDetailModal = (id: number) => {
    console.log('id :>> ', id);
    setCommentId(id);
    setDetailVisible(true);
  };

  const handleDetailOk = () => {
    setDetailVisible(false);
  };

  const handleDetailCancel = () => {
    setDetailVisible(false);
  };

  const showAddCommentModal = () => {
    setAddCommentVisible(true);
  };

  const handleAddCommentOk = () => {
    setAddCommentVisible(false);
  };

  const handleAddCommentCancel = () => {
    setAddCommentVisible(false);
  };

  return (
    <>
      <ProTable<IComment>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort) => {
          console.log('requestobject :>> ', params, sort);
          const res = await commentService.getCoCommentList({
            name: params.name || '',
            page: params.current,
            pageSize: params.pageSize,
          });
          return {
            data: res.result.data,
            // success 请返回 true，
            // 不然 table 会停止解析数据，即使有数据
            success: true,
            // 不传会使用 data 的长度，如果是分页一定要传
            total: res.result.total,
          };
        }}
        editable={{
          type: 'multiple',
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await commentService.updateCommentById(data);
          },
          actionRender: (row, config, defaultDom) => [defaultDom.save, defaultDom.cancel],
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
          autoFocusFirstInput: false,
        }}
        pagination={{
          pageSize: 10,
        }}
        dateFormatter="string"
        headerTitle="网友点评"
        toolBarRender={() => [
          <Button key="button" icon={<PlusOutlined />} type="primary" onClick={showAddCommentModal}>
            添加
          </Button>,
        ]}
      />
      <Modal title="历史点评" width={1400} visible={detailVisible} onOk={handleDetailOk} onCancel={handleDetailCancel}>
        <CommentDetail commentId={commentId} />
      </Modal>
      <Modal footer={null} title="添加评论" visible={addCommentVisible} onOk={handleAddCommentOk} onCancel={handleAddCommentCancel}>
        <AddComment hideModal={handleAddCommentOk} />
      </Modal>
    </>
  );
};
export default CompanyComment;
