import { request } from 'ice';
// import qs from 'qs';


export default {
    // 建议列表
    async getInterviewList(param: any) {
        const { page, pageSize, sort } = param;
        return await request.get(`/api/advice/getAdviceList?page=${page}&pageSize=${pageSize}&sort=${sort}`);
    },

    async updateAdviceLikeNum(param: any) {
        return await request.put('/api/advice/updateAdviceLikeNum', param);
    },

    async addAdvice(param: any) {
        return await request.post('/api/advice/addAdvice', param);
    },
};
