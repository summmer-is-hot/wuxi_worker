import { addProvidentFund, addSocialSecurity, discount, providentFundLevel, salaryLevel, scoreArray, socialSecurityLevel } from '@/utils/const';
import { Form, Input, Button, Select, Space, message } from 'antd';
import CompanySelect from '@/components/CompanySelect';
import styles from './index.module.scss';
import commentService from '@/services/commentService';
import { deBounce } from '@/utils/utils';
import store from '@/store';

const { TextArea } = Input;
const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { offset: 17, span: 7 },
};

const AddComment = (props: any) => {
  const [userState, userStateDispatchers] = store.useModel('user')
  const { hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const param = {
      ...values,
      userId: userState.currentUser.userId
    }
    const res = await commentService.addComment(param);
    if (res) {
      message.success('添加成功！');
      form.resetFields();
      hideModal();
    }
  };

  const onReset = () => {
    form.resetFields();
  };
  const getCompanyId = (value: any) => {
    form.setFieldsValue({
      companyId: value.value,
    });
  };

  return (
    <Form {...layout} form={form} name="newComment" onFinish={deBounce(onFinish, 500)}>
      <Form.Item name="companyId" label="公司名称" rules={[{ required: true, message: '请选择公司名称' }]}>
        <CompanySelect getCompanyId={getCompanyId} />
      </Form.Item>
      <Form.Item name="salaryLevel" label="工资水平" rules={[{ required: true, message: '请选择您认为的该公司工资水平' }]}>
        <Select
          placeholder="请选择您认为的该公司工资水平"
        >
          {
            salaryLevel.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="discount" label="试用期打折" rules={[{ required: true, message: '请选择试用期打折比例' }]}>
        <Select
          placeholder="请选择试用期打折比例"
        >
          {
            discount.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="socialSecurityLevel" label="社保基数" rules={[{ required: true, message: '请选择社保缴纳基数' }]}>
        <Select
          placeholder="请选择社保缴纳基数"
        >
          {
            socialSecurityLevel.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="addSocialSecurity" label="补充商业险" rules={[{ required: true, message: '请选择是否有补充商业险' }]}>
        <Select
          placeholder="请选择是否有补充商业险"
        >
          {
            addSocialSecurity.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="providentFundLevel" label="公积金比例" rules={[{ required: true, message: '请选择公积金缴纳比例' }]}>
        <Select
          placeholder="请选择公积金缴纳比例"
        >
          {
            providentFundLevel.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="addProvidentFund" label="补充公积金" rules={[{ required: true, message: '请选择是否有补充公积金' }]}>
        <Select
          placeholder="请选择是否有补充公积金"
        >
          {
            addProvidentFund.map((item) => {
              return <Option key={item.value} value={item.value}>{item.name}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="score" label="评分" rules={[{ required: true, message: '请选择一个您心中的分数吧~~' }]}>
        <Select
          placeholder="请选择一个您心中的分数吧~~"
        >
          {
            scoreArray.map((item) => {
              return <Option key={item} value={item}>{item}</Option>;
            })
          }
        </Select>
      </Form.Item>
      <Form.Item name="comment" label="点评" rules={[{ required: true, message: '来都来了，对于该公司就随便说两句吧~~' }]}>
        <TextArea placeholder="来都来了，对于该公司就随便说两句吧(100字内)~~" maxLength={100} />
      </Form.Item>
      <Form.Item {...tailLayout} className={styles.formItem}>
        <Space className={styles.space}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddComment;
