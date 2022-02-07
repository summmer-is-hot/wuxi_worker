import { IInterview } from '@/interfaces/interview';
import { IInterviewItem } from '@/interfaces/interview';


export default {
  state: {
    interviewList: new Array<IInterview>(),
    interviewItemList: new Array<IInterviewItem>(),
  },

  effects: (dispatch: any) => ({
    saveInterview(data: IInterview) {
      dispatch.interview.update(data);
    },
    saveInterviewItem(data: IInterviewItem) {
      dispatch.interview.update(data);
    },
  }),

  reducers: {
    update(prevState: IInterview | IInterviewItem, payload: IInterview | IInterviewItem) {
      return { ...prevState, ...payload };
    },
  },
};
