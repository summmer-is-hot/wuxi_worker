import { request } from 'ice';
// import qs from 'qs';


export default {
  // 用户登录
  async login(data: any) {
    return await request.post('/api/account/login', data);
  },

  // 获取用户信息
  async getUserInfo() {
    return await request.get('/api/account/userInfo');
  },

  // 注册
  async regist(data: any) {
    return await request.post('/api/account/regist', data);
  },

  // 发送验证码
  async sendCode(data: any) {
    return await request.post('/api/account/sendCode', data);
  },

  //找回密码
  async findPassword(data: any) {
    return await request.post('/api/account/findPassword', data);
  },

  // 更新用户信息
  async updateUserInfo(data: any) {
    return await request.put('/api/account/updateUserInfo',data);
  },
};
