import InterviewCard from './components/InterviewCard';
import { useEffect, useState } from 'react';
import { PlusOutlined, RocketOutlined, SearchOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Button, Card, Empty, Form, Input, List, Radio } from 'antd';
import { deBounce } from '@/utils/utils';
import AddInterview from './components/AddInterview';
import interviewService from '@/services/interviewService';
import store from '@/store';
import { PAGE_SIZE } from '@/utils/const';


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
  const initValue = { companyName: '', sort: 'updateTime' };
  const [searchParams, setSearchParams] = useState<any>({ page: 1, pageSize: 12, ...initValue });
  const [loading, setLoading] = useState<boolean>(true);
  const [form] = Form.useForm();
  const [addInterviewModal, setAddInterviewModal] = useState(false);
  const [interviewState, interviewDispatchers] = store.useModel('interview')
  const [total, setTotal] = useState<number>(0);

  const handleSearch = async (params?: any) => {
    if (!params) {
      params = searchParams;
    }
    setLoading(true);
    console.log('handleSearch :>> ', form.getFieldsValue());
    const interviewListRes = await interviewService.getInterviewList(params);
    if (interviewListRes) {
      setLoading(false);
      interviewDispatchers.saveInterview({ interviewList: interviewListRes.result.data });
      setTotal(interviewListRes.result.total)
    }
  }

  useEffect(() => {
    handleSearch();
  }, [])

  const handleValuesChange = (changedValues: any) => {
    console.log('changedValues :>> ', changedValues);
    const params = { ...searchParams, ...changedValues, page: 1, pageSize: 12 };
    setSearchParams(params);
    handleSearch(params);
  };

  const onSearch = () => {
    handleSearch(searchParams);
  };

  const addInterviewClick = () => {
    setAddInterviewModal(true);
  };

  const hideModal = () => {
    setAddInterviewModal(false);
  };

  return (
    <>
      <AddInterview addInterviewModal={addInterviewModal} hideModal={hideModal} />
      <Card bordered={false} >
        <Form
          {...formItemLayout}
          form={form}
          onValuesChange={deBounce(handleValuesChange, 500)}
          initialValues={{
            ...initValue
          }}
          labelAlign="left"
        >
          <Form.Item
            label={
              <>
                <SearchOutlined /> <span style={{ marginLeft: 8 }}>搜索</span>
              </>
            }
            name="companyName"
            labelAlign="left"
          >
            <Input.Search enterButton onSearch={deBounce(onSearch, 500)} style={{ maxWidth: '540px' }} />
          </Form.Item>

          <Form.Item
            label={
              <>
                <SortDescendingOutlined /> <span style={{ marginLeft: 8 }}>排序</span>
              </>
            }
            name="sort"
          >
            <Radio.Group >
              <Radio.Button value="updateTime">时间</Radio.Button>
              <Radio.Button value="rate">评分</Radio.Button>
              <Radio.Button value="likeNum">点赞量</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            style={{ marginBottom: 0 }}
            label={
              <>
                <RocketOutlined /> <span style={{ marginLeft: 8 }}>操作</span>
              </>
            }
          >
            <Button type="primary" icon={<PlusOutlined />} onClick={addInterviewClick}>
              {'写面经'}
            </Button>
          </Form.Item>
        </Form>
      </Card>
      <br />
      <List
        rowKey="id"
        loading={loading}
        dataSource={interviewState.interviewList}
        grid={listGrid}
        pagination={{
          pageSize: searchParams.pageSize ?? PAGE_SIZE,
          current: searchParams.page ?? 1,
          showSizeChanger: false,
          total,
          onChange(pageNum, pageSize) {
            const params = {
              ...searchParams,
              pageSize,
              page: pageNum,
            };
            setSearchParams(params);
            handleSearch(params);
          },
        }}
        locale={{
          emptyText: (
            <Empty description="暂无内容哦~~">
              <Button type="primary" size="large" onClick={addInterviewClick}>
                抢个沙发~
              </Button>
            </Empty>
          ),
        }}
        renderItem={(item) => {
          return (
            <List.Item key={item.id}>
              <InterviewCard
                resource={item}
                loading={loading}
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

