import { IAdvice } from '@/interfaces/advice';


export default {
  state: {
    adviceList: new Array<IAdvice>(),
  },

  effects: (dispatch: any) => ({
    saveAdvice(data: IAdvice) {
      dispatch.advice.update(data);
    },
  }),

  reducers: {
    update(prevState: IAdvice, payload: IAdvice) {
      return { ...prevState, ...payload };
    },
  },
};
