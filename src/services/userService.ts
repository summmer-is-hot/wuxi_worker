import { request } from 'ice';
// import qs from 'qs';


export default {
  // 用户登录
  async login(data: any) {
    return await request.post('/api/user/login', data);
  },

  // 获取用户信息
  async getUserInfo(id?: number) {
    return await request.post(`/api/user/userInfo`);
  },

  // 注册
  async register(data: any) {
    return await request.post('/api/user/register', data);
  },

  // 发送验证码
  async sendCode(data: any) {
    return await request.post('/api/email/sendCode', data);
  },

  //找回密码
  async findPassword(data: any) {
    return await request.post('/api/user/findPassword', data);
  },

  // 更新用户信息
  async updateUserInfo(data: any) {
    return await request.put('/api/user/updateUserInfo', data);
  },
};
