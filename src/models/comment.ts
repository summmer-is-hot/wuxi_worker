import { IComment, ICommentItem } from '@/interfaces/comment';


export default {
  state: {
    commentList: new Array<IComment>(),
    commentItemList: new Array<ICommentItem>(),
  },

  effects: (dispatch: any) => ({
    saveComment(data: IComment) {
      dispatch.comment.update(data);
    },
    saveCommentItem(data: IComment) {
      dispatch.comment.update(data);
    },
  }),

  reducers: {
    update(prevState: IComment | ICommentItem, payload: IComment | ICommentItem) {
      return { ...prevState, ...payload };
    },
  },
};
