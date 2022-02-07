import { request } from 'ice';
// import qs from 'qs';


export default {
    // 公司列表
    async getCompanyList(param: any) {
        const { name } = param;
        return await request.get(`/api/company/getCompanyList?name=${name}`);
    },

    // 新增公司
    async addCompany(param: any) {
        return await request.post('/api/company/addCompany', param);
    },

};
