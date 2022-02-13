import { request } from 'ice';
// import qs from 'qs';


export default {
    // 公司量chart
    async getChartForCoNumber() {
        return await request.get('/api/about/getChartForCoNumber');
    },

    // 评论量chart
    async getChartForCommentNumber() {
        return await request.get('/api/about/getChartForCommentNumber');
    },

    // 面经量chart
    async getChartForInterviewNumber() {
        return await request.get('/api/about/getChartForInterviewNumber');
    },

    async about() {
        return await request.get('/api/about/about');
    },
};
