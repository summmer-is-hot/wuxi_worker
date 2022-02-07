import { createStore, IcestoreDispatch, Models, IcestoreRootState } from '@ice/store';
import user from './models/user';
import chart from './models/chart';
import comment from './models/comment';
import company from './models/company';
import interview from './models/interview';
interface IAppStoreModels extends Models {
  user: typeof user;
  chart: typeof chart;
  comment: typeof comment;
  company: typeof company;
  interview: typeof interview;
}

const appModels: IAppStoreModels = {
  user,
  chart,
  comment,
  company,
  interview,
};
export default createStore(appModels);

export type IRootDispatch = IcestoreDispatch<typeof appModels>;
export type IRootState = IcestoreRootState<typeof appModels>;
