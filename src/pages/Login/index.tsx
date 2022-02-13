import {
  LockOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Button, message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import styles from './index.module.less';
import Footer from '@/Layouts/Footer';
import { useHistory } from 'ice';
import { getQuery, setCookie } from '@/utils/utils';
import Forgot from './components/Forgot';
import { emailReg, passwordReg, sixLengthReg, sixteenLengthReg, tenLengthReg } from '@/utils/reg';
import userService from '@/services/userService';
import store from '@/store';


const Login: React.FC = () => {
  const [type, setType] = useState<string>('login');
  const [forgotModal, setForgotModal] = useState(false);
  const [, userDispatchers] = store.useModel('user');
  const [form] = ProForm.useForm();
  const changeType = (value: any) => {
    setType(value);
  };
  const history = useHistory();

  const handleSubmit = async (values: any) => {
    console.log('type :>> ', type);
    switch (type) {
      case 'login':
        const loginRes = await userService.login(values);
        if (loginRes) {
          setCookie('jwtToken', loginRes.result.token)
          message.success('登录成功!');
          if (values.savePassword) {
            localStorage.setItem('userName', values.userName);
            localStorage.setItem('password', values.password);
          } else {
            localStorage.removeItem('userName');
            localStorage.removeItem('password');
          }
          console.log('loginRes.data.id :>> ', loginRes.result.data.id);
          const userInfoRes = await userService.getUserInfo();
          if (userInfoRes) {
            userDispatchers.saveUser({ currentUser: userInfoRes.result });
            // /** 此方法会跳转到 redirect 参数所在的位置 */
            if (!history) return;
            const query = getQuery('redirect');
            history.push(query || '/');
          }
        }
        break;

      case 'register':
        console.log('registervalues :>> ', type, values);
        const registRes = await userService.register(values);
        if (registRes) {
          message.success('注册成功!');
          hideModal();
          setType('login');
        }
        break;

      default:
        break;
    }
  };

  const onForgotClick = () => {
    setForgotModal(true);
  };

  const hideModal = () => {
    setForgotModal(false);
  };

  return (
    <div className={styles.container}>
      {forgotModal && <Forgot forgotModal={forgotModal} hideModal={hideModal} />}
      <div className={styles.content}>
        <LoginForm
          form={form}
          logo={<img alt="logo" src="/favicon.png" />}
          title="无锡IT小眷村"
          subTitle={'互联网人员找工作指南'}
          initialValues={{
            userName: localStorage.getItem('userName'),
            password: localStorage.getItem('password'),
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

          {type === 'login' && (
            <>
              <ProFormText
                name="userName"
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

          {/* {status === 'error' && loginType === 'register' && <LoginMessage content="验证码错误" />} */}
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
                name="newPassword"
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
                name="reNewPassword"
                placeholder={'请再次输入密码'}
                rules={[
                  {
                    required: true,
                    message: '请再次输入密码!',
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue('newPassword') === value) {
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
                onGetCaptcha={async () => {
                  const email = form.getFieldValue('email')
                  if (!email || !emailReg.test(email)) {
                    message.error('邮箱未填写或邮箱格式不正确！！');
                    await Promise.reject()
                  }
                  if (!email) return;
                  const param = {
                    email,
                    type: 1
                  }
                  const res = await userService.sendCode(param);
                  if (res) {
                    message.success('验证码发送成功');
                  }
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
