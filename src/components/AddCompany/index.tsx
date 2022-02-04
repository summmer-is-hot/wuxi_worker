import { companySize } from '@/utils/const';
import { Form, Input, Button, Modal, Select } from 'antd';
import styles from './index.module.scss';

const { Option } = Select;

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddCompany = (props: any) => {
  const { addCompanyModal, hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Modal title="添加公司" visible={addCompanyModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-company" onFinish={onFinish}>
        <Form.Item name="name" label="公司名称" rules={[{ required: true }]}>
          <Input placeholder="请填写公司名称" />
        </Form.Item>
        <Form.Item name="companySize" label="公司规模" rules={[{ required: true, message: '请选择公司规模' }]}>
          <Select
            placeholder="请选择公司规模"
          >
            {
              companySize.map((item) => {
                return <Option key={item.value} value={item.value}>{item.name}</Option>;
              })
            }
          </Select>
        </Form.Item>
        <Form.Item name="introduction" label="公司简介" rules={[{ required: true, message: '请填写公司简介' }]}>
          <Input.TextArea placeholder="请填写公司简介" />
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

export default AddCompany;
