import { Form, Input, Button, Modal } from 'antd';
import styles from './index.module.scss';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const AddAdvice = (props: any) => {
  const { addAdviceModal, hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Modal title="添加留言" visible={addAdviceModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-advice" onFinish={onFinish}>
        <Form.Item name="advice" label="意见与建议" rules={[{ required: true, message: '请填写意见与建议' }]}>
          <Input.TextArea placeholder="请填写意见与建议" />
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

export default AddAdvice;
