import { request } from 'ice';
// import qs from 'qs';


export default {
    // 面经列表
    async getInterviewList(param: any) {
        const { page, pageSize, companyName, sort } = param;
        return await request.get(`/api/interview/getInterviewList?page=${page}&pageSize=${pageSize}&name=${companyName}&sort=${sort}`);
    },

    async addInterview(param: any) {
        return await request.post('/api/interview/addInterview', param);
    },

    async updateInterviewLikeNum(param: any) {
        return await request.put('/api/interview/updateInterviewLikeNum', param);
    },

    async getInterviewItemListById(param: any) {
        const { id, page } = param;
        return await request.get(`/api/interview/getInterviewItemListById?id=${id}&page=${page}&pageSize=10`);
    },
};
