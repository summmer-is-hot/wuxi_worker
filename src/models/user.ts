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
    update(prevState: IUser, payload: IUser) {
      return { ...prevState, ...payload };
    },
  },
};
