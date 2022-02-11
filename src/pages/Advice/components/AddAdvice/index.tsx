import adviceService from '@/services/adviceService';
import store from '@/store';
import { Form, Input, Button, Modal, message } from 'antd';
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
  const [userState, userStateDispatchers] = store.useModel('user')
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const params = {
      ...values,
      userId: userState.currentUser.userId
    }
    const res = await adviceService.addAdvice(params);
    if (res) {
      message.success('添加成功！');
      form.resetFields();
      hideModal();
    }
  };

  return (
    <Modal title="添加留言" visible={addAdviceModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-advice" onFinish={onFinish}>
        <Form.Item
          name="advice"
          label="意见与建议"
          rules={[
            {
              required: true,
              message: '请填写意见与建议!'
            }
          ]}
        >
          <Input.TextArea rows={5} placeholder="请填写意见与建议（100字内）" maxLength={100} />
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

export default AddAdvice;
