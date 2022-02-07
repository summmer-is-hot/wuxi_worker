import { createStore, IcestoreDispatch, Models, IcestoreRootState } from '@ice/store';
import user from './models/user';
import chart from './models/chart';

interface IAppStoreModels extends Models {
  user: typeof user;
  chart: typeof chart;
}

const appModels: IAppStoreModels = {
  user,
  chart,
};
export default createStore(appModels);

export type IRootDispatch = IcestoreDispatch<typeof appModels>;
export type IRootState = IcestoreRootState<typeof appModels>;
