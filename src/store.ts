import { createStore, IcestoreDispatch, Models, IcestoreRootState } from '@ice/store';
import user from './models/user';
import chart from './models/chart';
import comment from './models/comment';
import company from './models/company';
import interview from './models/interview';
import advice from './models/advice';
interface IAppStoreModels extends Models {
  user: typeof user;
  chart: typeof chart;
  comment: typeof comment;
  company: typeof company;
  interview: typeof interview;
  advice: typeof advice;
}

const appModels: IAppStoreModels = {
  user,
  chart,
  comment,
  company,
  interview,
  advice,
};
export default createStore(appModels);

export type IRootDispatch = IcestoreDispatch<typeof appModels>;
export type IRootState = IcestoreRootState<typeof appModels>;
