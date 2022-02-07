import { request } from 'ice';
// import qs from 'qs';


export default {
    // 公司量chart
    async getChartForCoNumber() {
        return await request.post('/api/about/getChartForCoNumber');
    },

    // 评论量chart
    async getChartForCommentNumber() {
        return await request.post('/api/about/getChartForCommentNumber');
    },

    // 面经量chart
    async getChartForInterviewNumber() {
        return await request.post('/api/about/getChartForInterviewNumber');
    },
};
