import { IChart } from '@/interfaces/chart';


export default {
  state: {
    companyChart: new Array<IChart>(),
    commentChart: new Array<IChart>(),
    interviewChart: new Array<IChart>(),
  },

  effects: (dispatch: any) => ({
    saveChart(data: IChart) {
      dispatch.chart.update(data);
    },
  }),

  reducers: {
    update(prevState: IChart, payload: IChart) {
      return { ...prevState, ...payload };
    },
  },
};
