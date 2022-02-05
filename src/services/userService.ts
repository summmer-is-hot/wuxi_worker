import { request } from 'ice';
import qs from 'qs';


export default {
  // 用户登录
  async login(data: any) {
    return await request.post('/api/account/login', data);
  },

  // 获取用户信息
  async getUserInfo() {
    return await request.get('/api/account/userInfo');
  },

  // 获取登录用户信息
  async getWelcome() {
    return await request.get('/epauth/api/corp/welcome');
  },

  // 获取用户角色
  async getCorpMember(userId: string) {
    return await request.get(`/epauth/api/corp/member/${userId}`);
  },

  // 更新用户信息
  async updateUserInfo(data: any) {
    return await request.post('/epauth/api/corp/userinfo', data);
  },

  // 修改用户密码
  async modifyPassword(data: any) {
    return await request.post('/epauth/api/account/modifyPassword', qs.stringify(data), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  },

  // 退出登录
  async logout() {
    return await request.get('/epauth/api/account/logout');
  },

  // 获取用户存储空间
  async getQuota() {
    return await request.get('/epdrive/api/v1/user/quota');
  },
};
