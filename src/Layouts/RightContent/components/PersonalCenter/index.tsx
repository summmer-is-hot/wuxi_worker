import userService from '@/services/userService';
import store from '@/store';
import { emailReg, passwordReg, tenLengthReg } from '@/utils/reg';
import { Form, Input, Button, Modal, message } from 'antd';
import { cloneDeep } from 'lodash';
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
  const [userState, userDispatchers] = store.useModel('user');
  const cpCurrentUser = cloneDeep(userState.currentUser);
  // 1修改，2确认
  const [btnState, setBtnState] = useState(1);
  const [canUpdate, setCanUpdate] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const res = await userService.updateUserInfo(values);
    if (res) {
      message.success('修改成功!');
      cpCurrentUser.nickName = values.nickName;
      userDispatchers.saveUser({ currentUser: cpCurrentUser })
      hideModal();
      changeDefault()
    }
  };
  const onChangeClick = () => {
    setBtnState(2);
    setCanUpdate(true);
  };
  const changeDefault = () => {
    setBtnState(1);
    setCanUpdate(false);
  };

  return (
    <Modal title="个人中心" visible={personalModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="personal-center" onFinish={onFinish} initialValues={userState.currentUser}>
        <Form.Item
          name="email"
          label="邮箱"
          rules={[
            {
              required: true,
              message: '请填写邮箱!'
            },
            {
              pattern: emailReg,
              message: '邮箱格式错误!',
            },
          ]}
        >
          <Input disabled placeholder="请填写邮箱" />
        </Form.Item>
        <Form.Item name="nickName"
          label="昵称"
          rules={[
            {
              required: true,
              message: '请填写昵称!'
            },
            {
              pattern: tenLengthReg,
              message: '昵称长度不能超过10个字符!',
            },
          ]}
        >
          <Input disabled={!canUpdate} placeholder="请填写昵称" />
        </Form.Item>
        <Form.Item
          name="password"
          label="密码"
          rules={[
            {
              required: true,
              message: '请填写密码!'
            },
            {
              pattern: passwordReg,
              message: '密码必须为6-16个字符且包含英文、数字、特殊符号中的两种!',
            },
          ]}
        >
          <div className={styles.password}>
            <Input.Password disabled={!canUpdate} placeholder="请填写密码" />
          </div>
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submit}>
          {btnState === 1 && <Button onClick={onChangeClick} className={styles.passwordBtn} type="primary">修改</Button>}
          {btnState === 2 && <Button htmlType="submit" className={styles.passwordBtn} type="primary">保存</Button>}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default PersonalCenter;
