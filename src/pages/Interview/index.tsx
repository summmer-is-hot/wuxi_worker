import InterviewCard from '@/components/InterviewCard';
import { PlusOutlined, SearchOutlined, SettingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, List, Radio } from 'antd';
import { resources } from '@/utils/testdata';
import styles from './index.module.scss';
import { deBounce } from '@/utils/utils';
import { useState } from 'react';
import AddInterview from '@/components/AddInterview';

const listGrid = {
  gutter: 16,
  xs: 1,
  sm: 1,
  md: 2,
  lg: 2,
  xl: 3,
  xxl: 3,
};

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

const Interview = () => {
  const [form] = Form.useForm();
  const [addInterviewModal, setAddInterviewModal] = useState(false);

  const handleValuesChange = (changedValues: any) => {
    console.log('changedValues :>> ', changedValues);
    // const params = { ...searchParams, ...changedValues, pageNum: 1 };
    // setSearchParams(params);
    // deBounce(handleSearch());
  };

  const onSearch = () => {
    console.log('params :>> ', 111);
  };

  const addInterviewClick = () => {
    setAddInterviewModal(true)
  };

  const hideModal = () => {
    setAddInterviewModal(false)
  };

  return (
    <>
      <AddInterview addInterviewModal={addInterviewModal} hideModal={hideModal} />
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
                <SearchOutlined /> <span style={{ marginLeft: 8 }}>搜索</span>
              </>
            }
            name="tags"
            labelAlign="left"
          >
            <Input.Search enterButton onSearch={onSearch} style={{ maxWidth: '540px' }} />
          </Form.Item>
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
              <Radio.Button value="rate">评分</Radio.Button>
            </Radio.Group>
            <Button type="primary" icon={<PlusOutlined />} style={{ float: 'right' }} onClick={addInterviewClick}>
              写面经
            </Button>
          </Form.Item>
        </Form>
        {/* <Button type="primary" icon={<SearchOutlined />} style={{ float: 'right' }}>
          Search
        </Button> */}
      </Card>
      <br />
      <List
        rowKey="_id"
        // loading={loading}
        dataSource={resources}
        grid={listGrid}
        pagination={{
          pageSize: 12,
          current: 1,
          showSizeChanger: false,
          total: 100,
          onChange(pageNum, pageSize) {
            // const params = {
            //   ...searchParams,
            //   pageSize,
            //   pageNum,
            // };
            // setSearchParams(params);
            // doSearch(params);
          },
        }}
        // pagination={{
        //   pageSize: searchParams.pageSize ?? PAGE_SIZE,
        //   current: searchParams.pageNum ?? 1,
        //   showSizeChanger: false,
        //   total,
        //   onChange(pageNum, pageSize) {
        //     const params = {
        //       ...searchParams,
        //       pageSize,
        //       pageNum,
        //     };
        //     setSearchParams(params);
        //     doSearch(params);
        //   },
        // }}
        // locale={{
        //   emptyText: (
        //     <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="暂无资源">
        //       <Link to="/addResource">
        //         <Button type="primary" size="large">
        //           推荐资源得积分
        //         </Button>
        //       </Link>
        //     </Empty>
        //   ),
        // }}
        renderItem={(item) => {
          return (
            <List.Item key={item._id}>
              <InterviewCard
                resource={item}
                loading={false}
                prePageState={1}
                keyword={11}
              />
            </List.Item>
          );
        }}
      />
    </>
  );
};

export default Interview;

