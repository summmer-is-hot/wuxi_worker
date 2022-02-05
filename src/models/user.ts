import { IUser } from '@/interfaces/user';


export default {
  state: {
    currentUser: {} as IUser,
  },

  effects: (dispatch: any) => ({
    saveUser(data: IUser) {
      dispatch.user.update(data);
    },
  }),

  reducers: {
    update(prevState: any, payload: any) {
      return { ...prevState, ...payload };
    },
  },
};
