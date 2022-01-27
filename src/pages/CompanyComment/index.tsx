/* eslint-disable no-nested-ternary */
import React, { useRef } from 'react';
import { PlusOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Button, Tag, Space, Menu, Dropdown } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import { request } from 'ice';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

type CompanyItem = {
  id: number;
  name: string;
  comment: string;
  score: number;
};

const columns: Array<ProColumns<CompanyItem>> = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '小眷村',
    dataIndex: 'name',
    width: 200,
    // copyable: true,
    // ellipsis: true,
    // tip: '即公司名称',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    // 第一行不允许编辑
    // editable: (text, record, index) => {
    //   return index !== 0;
    // },
  },
  {
    title: '最新点评',
    width: 600,
    dataIndex: 'comment',
    search: false,
    // filters: true,
    // onFilter: true,
    // valueType: 'select',
    // valueEnum: {
    //   all: { text: '全部', status: 'Default' },
    //   open: {
    //     text: '未解决',
    //     status: 'Error',
    //   },
    //   closed: {
    //     text: '已解决',
    //     status: 'Success',
    //     disabled: true,
    //   },
    //   processing: {
    //     text: '解决中',
    //     status: 'Processing',
    //   },
    // },
  },
  {
    title: '综合评分',
    width: 100,
    sorter: true,
    dataIndex: 'score',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_);
    },
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
  // {
  //   title: '创建时间',
  //   key: 'showTime',
  //   dataIndex: 'created_at',
  //   valueType: 'dateTime',
  //   sorter: true,
  //   hideInSearch: true,
  // },
  // {
  //   title: '创建时间',
  //   dataIndex: 'created_at',
  //   valueType: 'dateRange',
  //   hideInTable: true,
  //   search: {
  //     transform: (value) => {
  //       return {
  //         startTime: value[0],
  //         endTime: value[1],
  //       };
  //     },
  //   },
  // },
  {
    title: '操作',
    width: 200,
    valueType: 'option',
    render: (text, record, _, action) => [
      <a href={'#'} target="_blank" rel="noopener noreferrer" key="view">
        查看详情
      </a>,
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      // <TableDropdown
      //   key="actionGroup"
      //   onSelect={() => action?.reload()}
      //   menus={[
      //     { key: 'copy', name: '复制' },
      //     { key: 'delete', name: '删除' },
      //   ]}
      // />,
    ],
  },
];

// const menu = (
//   <Menu>
//     <Menu.Item key="1">1st item</Menu.Item>
//     <Menu.Item key="2">2nd item</Menu.Item>
//     <Menu.Item key="3">3rd item</Menu.Item>
//   </Menu>
// );

export default () => {
  const actionRef = useRef<ActionType>();
  return (
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
        <Button key="button" icon={<PlusOutlined />} type="primary">
          添加
        </Button>,
        // <Dropdown key="menu" overlay={menu}>
        //   <Button>
        //     <EllipsisOutlined />
        //   </Button>
        // </Dropdown>,
      ]}
    />
  );
};
