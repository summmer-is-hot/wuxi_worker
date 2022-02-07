import { ICompany } from '@/interfaces/company';


export default {
  state: {
    companyList: new Array<ICompany>(),
  },

  effects: (dispatch: any) => ({
    saveCompany(data: ICompany) {
      dispatch.company.update(data);
    },
  }),

  reducers: {
    update(prevState: ICompany, payload: ICompany) {
      return { ...prevState, ...payload };
    },
  },
};
