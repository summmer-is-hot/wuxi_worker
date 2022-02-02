import { Form, Input, Button, Modal, Space } from 'antd';
import { useState } from 'react';
import styles from './index.module.scss';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 18, span: 6 },
};

const PersonalCenter = (props: any) => {
  const { personalModal, hideModal } = props;
  // 1修改，2确认
  const [btnState, setBtnState] = useState(1);
  const [canUpdate, setCanUpdate] = useState(true);
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };
  const onChangeClick = () => {
    setBtnState(2);
    setCanUpdate(false);
  };
  const onCommit = () => {
    setBtnState(1);
    setCanUpdate(true);
  };

  return (
    <Modal title="个人中心" visible={personalModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="add-advice" onFinish={onFinish}>
        <Form.Item name="email" label="邮箱" rules={[{ required: true, message: '请填写邮箱' }]}>
          <Input disabled placeholder="请填写邮箱" />
        </Form.Item>
        <Form.Item name="nickname" label="昵称" rules={[{ required: true, message: '请填写昵称' }]}>
          <Input disabled={canUpdate} placeholder="请填写昵称" />
        </Form.Item>
        <Form.Item name="password" label="密码" rules={[{ required: true, message: '请填写密码' }]}>
          <div className={styles.password}>
            <Input.Password disabled={canUpdate} placeholder="请填写密码" />
          </div>
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submit}>
          {btnState === 1 && <Button onClick={onChangeClick} className={styles.passwordBtn} type="primary">修改</Button>}
          {btnState === 2 && <Button onClick={onCommit} className={styles.passwordBtn} type="primary">保存</Button>}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PersonalCenter;
