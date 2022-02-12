import userService from '@/services/userService';
import { emailReg, passwordReg, sixLengthReg } from '@/utils/reg';
import { ProFormCaptcha } from '@ant-design/pro-form';
import { Form, Input, Button, Modal, message } from 'antd';
import styles from './index.module.scss';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 24 },
};

const Forgot = (props: any) => {
  const { forgotModal, hideModal } = props;
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
    const res = await userService.findPassword(values);
    if (res) {
      message.success('找回成功!');
      hideModal();
      form.resetFields();
    }
  };

  return (
    <Modal title="找回密码" visible={forgotModal} onCancel={hideModal} footer={null}>
      <Form {...layout} form={form} name="forgot-password" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="注册邮箱"
          rules={[
            {
              required: true,
              message: '请输入注册邮箱!',
            },
            {
              pattern: emailReg,
              message: '邮箱格式不正确!',
            },
          ]}
        >
          <Input placeholder="请输入注册邮箱" />
        </Form.Item>
        <Form.Item
          name="newPassword"
          label="新密码"
          rules={[
            {
              required: true,
              message: '请输入新密码!',
            },
            {
              pattern: passwordReg,
              message: '密码必须为6-16个字符且包含英文、数字、特殊符号中的两种！',
            },
          ]}
        >
          <Input.Password placeholder="请输入新密码" />
        </Form.Item>
        <Form.Item
          name="reNewPassword"
          label="重复新密码"
          rules={[
            {
              required: true,
              message: '请再次输入新密码!',
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('两次密码输入不一致')
              },
            }),
          ]}
        >
          <Input.Password placeholder="请再次输入新密码" />
        </Form.Item>

        <ProFormCaptcha
          fieldProps={{
            size: 'middle',
          }}
          captchaProps={{
            size: 'middle',
          }}
          placeholder={'请输入验证码'}
          captchaTextRender={(timing, count) => {
            if (timing) {
              return `${count}秒后重新发送`;
            }
            return '发送验证码';
          }}
          name="verifyCode"
          label="验证码"
          rules={[
            {
              required: true,
              message: '请输入验证码!',
            },
            {
              pattern: sixLengthReg,
              message: '请输入6位验证码!',
            },
          ]}
          onGetCaptcha={async (phone) => {
            const email = form.getFieldValue('email')
            if (!email) return;
            const param = {
              email,
              type: 2
            }
            const res = await userService.sendCode(param);
            if (res) {
              message.success('验证码发送成功');
            }
          }}
        />

        <Form.Item {...tailLayout} className={styles.submit}>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
        </Form.Item>
      </Form>
    </Modal >
  );
};

export default Forgot;
