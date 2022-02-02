/* eslint-disable no-nested-ternary */
import React, { useRef, useState } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown, Modal } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { request } from 'ice';
import CommentDetail from './compoents/CommentDetail';
import AddComment from './compoents/AddComment';

const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
interface CompanyItem {
  id: number;
  name: string;
  comment: string;
  score: number;
}

const CompanyComment = () => {
  const columns: Array<ProColumns<CompanyItem>> = [
    {
      title: '小眷村',
      dataIndex: 'name',
      width: 200,
      formItemProps: {
        rules: [
          {
            required: true,
            message: '此项为必填项',
          },
        ],
      },
    },
    {
      title: '最新点评',
      width: 600,
      dataIndex: 'comment',
      search: false,
    },
    {
      title: '综合评分',
      width: 100,
      sorter: true,
      dataIndex: 'score',
      search: false,
      render: (_, record) => (
        <Space>
          <Tag
            color={record.score > 6 ? 'success' : record.score > 3 ? 'processing' : record.score > 0 ? 'warning' : record.score <= 0 ? 'error' : ''}
          >
            {record.score}
          </Tag>
        </Space>
      ),
    },
    {
      title: '操作',
      width: 200,
      valueType: 'option',
      render: (text, record, _, action) => [
        <a key={record.id} type="primary" onClick={showDetailModal}>
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


  const showDetailModal = () => {
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
      <ProTable<CompanyItem>
        columns={columns}
        actionRef={actionRef}
        request={async (params = {}, sort) => {
          console.log(sort);
          return request<{
            data: CompanyItem[];
            // }>('https://proapi.azurewebsites.net/github/issues', {
          }>('/api/getCoCommentList', {
            params,
          });
        }}
        editable={{
          type: 'multiple',
          onSave: async (rowKey, data, row) => {
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onDelete: async (key, row) => {
            console.log(key, row);
            await waitTime(2000);
          },
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
        <CommentDetail />
      </Modal>
      <Modal footer={null} title="添加评论" visible={addCommentVisible} onOk={handleAddCommentOk} onCancel={handleAddCommentCancel}>
        <AddComment />
      </Modal>
    </>
  );
};
export default CompanyComment;
