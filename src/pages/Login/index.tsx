/* eslint-disable @iceworks/best-practices/no-secret-info */
import {
  LockOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, Button, message, Tabs } from 'antd';
import React, { useState } from 'react';
import { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
// import { useIntl, history, FormattedMessage, SelectLang, useModel } from 'umi';
// import { login } from '@/services/ant-design-pro/api';
// import { getFakeCaptcha } from '@/services/ant-design-pro/login';

import styles from './index.module.less';
import Footer from '@/Layouts/Footer';
import { useHistory } from 'ice';
import { setCookie } from '@/utils/utils';
import Forgot from '@/components/Forgot';
import { emailReg, passwordReg, sixLengthReg, sixteenLengthReg, tenLengthReg } from '@/utils/reg';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<any>({});
  const [type, setType] = useState<string>('login');
  const [forgotModal, setForgotModal] = useState(false);
  // const { initialState, setInitialState } = useModel('@@initialState');
  const changeType = (value: any) => {
    // if (value === 'register') {
    //   message.info('暂未开放哦~给作者加个鸡腿吧~~')
    // }
    setType(value);
  };
  const history = useHistory();

  // const intl = useIntl();

  const fetchUserInfo = async () => {
    // const userInfo = await initialState?.fetchUserInfo?.();
    // if (userInfo) {
    //   await setInitialState((s) => ({
    //     ...s,
    //     currentUser: userInfo,
    //   }));
    // }
  };

  const handleSubmit = async (values: any) => {
    switch (type) {
      case 'login':
        console.log('loginvalues :>> ', type, values);
        break;

      case 'register':
        console.log('registervalues :>> ', type, values);
        break;

      default:
        break;
    }
    // setCookie('username', values.username);
    // setCookie('password', values.password);
    // history.push('/');
    // try {
    //   // 登录
    //   const msg = await login({ ...values, type });
    //   if (msg.status === 'ok') {
    //     const defaultLoginSuccessMessage = intl.formatMessage({
    //       id: 'pages.login.success',
    //       defaultMessage: '登录成功!',
    //     });
    //     message.success(defaultLoginSuccessMessage);
    //     await fetchUserInfo();
    //     /** 此方法会跳转到 redirect 参数所在的位置 */
    //     if (!history) return;
    //     const { query } = history.location;
    //     const { redirect } = query as { redirect: string };
    //     history.push(redirect || '/');
    //     return;
    //   }
    //   console.log(msg);
    //   // 如果失败去设置用户错误信息
    //   setUserLoginState(msg);
    // } catch (error) {
    //   const defaultLoginFailureMessage = intl.formatMessage({
    //     id: 'pages.login.failure',
    //     defaultMessage: '登录失败，请重试!',
    //   });
    //   message.error(defaultLoginFailureMessage);
    // }
  };
  const { status, type: loginType } = userLoginState;

  const onForgotClick = () => {
    setForgotModal(true);
  };

  const hideModal = () => {
    setForgotModal(false);
  };

  return (
    <div className={styles.container}>
      <Forgot forgotModal={forgotModal} hideModal={hideModal} />
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/favicon.png" />}
          title="无锡IT小眷村"
          subTitle={'程序员找工作指南'}
          initialValues={{
            savePassword: true,
          }}
          submitter={{
            // 自定义
            render: (props) => {
              return [
                <Button type="primary" key="submit" className="ant-btn-lg" style={{ width: '100%' }} onClick={() => props.form?.submit?.()}>
                  {type === 'login' ? '登录' : '注册'}
                </Button>,
              ];
            },
          }}
          onFinish={async (values) => {
            // await handleSubmit(values as API.LoginParams);
            await handleSubmit(values);
          }}
        >
          <Tabs activeKey={type} onChange={changeType}>
            <Tabs.TabPane
              key="login"
              tab={'登录'}
            />
            <Tabs.TabPane
              key="register"
              tab={'注册'}
            />
          </Tabs>

          {status === 'error' && loginType === 'login' && (
            <LoginMessage
              content={'邮箱或密码错误'}
            />
          )}
          {type === 'login' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入邮箱'}
                rules={[
                  {
                    required: true,
                    message: '请输入邮箱!',
                  },
                  {
                    pattern: emailReg,
                    message: '邮箱格式不正确!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                  {
                    pattern: sixteenLengthReg,
                    message: '密码长度不超过能超过16位!',
                  },
                ]}
              />
            </>
          )}

          {status === 'error' && loginType === 'register' && <LoginMessage content="验证码错误" />}
          {type === 'register' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MailOutlined className={styles.prefixIcon} />,
                }}
                name="email"
                placeholder={'请输入邮箱'}
                rules={[
                  {
                    required: true,
                    message: '请输入邮箱!',
                  },
                  {
                    pattern: emailReg,
                    message: '邮箱格式错误!',
                  },
                ]}
              />
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <SmileOutlined className={styles.prefixIcon} />,
                }}
                name="nickName"
                placeholder={'请输入昵称'}
                rules={[
                  {
                    required: true,
                    message: '请输入昵称!',
                  },
                  {
                    pattern: tenLengthReg,
                    message: '昵称长度不能超过10个字符!',
                  },
                ]}
              />
              <ProFormText.Password
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                name="password"
                placeholder={'请输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                  {
                    pattern: passwordReg,
                    message: '密码必须为6-16个字符且包含英文、数字、特殊符号中的两种!',
                  },
                ]}
              />
              <ProFormText.Password
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                name="rePassword"
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请再次输入密码!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject('两次密码输入不一致')
                    },
                  }),
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <SafetyCertificateOutlined className={styles.prefixIcon} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count}获取验证码`;
                  }
                  return '获取验证码';
                }}
                name="verifyCode"
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
                  // const result = await getFakeCaptcha({
                  //   phone,
                  // });
                  const result = null;
                  if (result === false) {
                    return;
                  }
                  message.success('获取验证码成功!验证码为：1234');
                }}
              />
            </>
          )}
          {type !== 'register' && (
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="savePassword">
                记住密码
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
                onClick={onForgotClick}
              >
                忘记密码
              </a>
            </div>
          )
          }
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
