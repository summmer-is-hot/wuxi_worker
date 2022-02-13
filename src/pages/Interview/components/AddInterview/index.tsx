import interviewService from '@/services/interviewService';
import { Form, Input, Button, Modal, message, Select } from 'antd';
import CompanySelect from '@/components/CompanySelect';
import styles from './index.module.scss';
import store from '@/store';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddInterview = (props: any) => {
  const [userState, userStateDispatchers] = store.useModel('user');
  const { addInterviewModal, hideModal, company } = props;
  const [form] = Form.useForm();
  const initialValues = { id: company?.id }

  console.log('company :>> ', company);

  const onFinish = async (values: any) => {
    console.log(values);
    const params = {
      ...values,
      userId: userState.currentUser.userId
    }
    const res = await interviewService.addInterview(params);
    if (res) {
      message.success('添加成功！');
      form.resetFields();
      hideModal();
    }
  };

  const getCompanyId = (value: any) => {
    form.setFieldsValue({
      id: value.value,
    });
    console.log('getCompanyId :>> ', value);
  };

  return (
    <Modal title="添加面经" visible={addInterviewModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-interview" onFinish={onFinish} initialValues={initialValues}>
        {
          !company &&
          <Form.Item
            name="id"
            label="公司名称"
            rules={[
              {
                required: true,
                message: '请选择公司名称!'
              }
            ]}
          >
            <CompanySelect getCompanyId={getCompanyId} />
          </Form.Item>
        }
        {
          company &&
          <Form.Item
            name="id"
            label="公司名称"
            rules={[
              {
                required: true,
                message: '请选择公司名称!'
              }
            ]}
          >
            <Select disabled>
              <Select.Option value={company.id} >{company.companyName}</Select.Option>
            </Select>
          </Form.Item>
        }
        <Form.Item
          name="interview"
          label="面试经验"
          rules={[
            {
              required: true,
              message: '请填写面试经验（200字内）'
            }
          ]}>
          <Input.TextArea rows={5} placeholder="请填写面试经验" maxLength={200} />
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submit}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddInterview;
