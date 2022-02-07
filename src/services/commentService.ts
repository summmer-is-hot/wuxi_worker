import { request } from 'ice';
// import qs from 'qs';


export default {
    // 评论列表
    async getCoCommentList(param: any) {
        const { page, pageSize, name } = param;
        return await request.get(`/api/comment/getCoCommentList?page=${page}&pageSize=${pageSize}&name=${name}`);
    },

    async getCommentById(param: any) {
        const { id } = param;
        return await request.get(`/api/comment/getCommentById?id=${id}`);
    },

    async updateCommentById(param: any) {
        return await request.put('/api/comment/updateCommentById', param);
    },

    async deleteCommentById(param: any) {
        return await request.delete('/api/comment/deleteCommentById', param);
    },

    async addComment(param: any) {
        return await request.post('/api/comment/addComment', param);
    },
};
