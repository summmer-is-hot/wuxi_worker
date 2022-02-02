import { Form, Input, Button, Modal } from 'antd';
import styles from './index.module.scss';

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
        <Form.Item name="gender" label="公司简称" rules={[{ required: true, message: '请填写公司简称' }]}>
          <Input.TextArea placeholder="请填写公司简称" />
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submit}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddCompany;
