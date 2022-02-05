import { createStore, IcestoreDispatch, Models, IcestoreRootState } from '@ice/store';
import user from './models/user';

interface IAppStoreModels extends Models {
  user: typeof user;
}

const appModels: IAppStoreModels = {
  user,
};
export default createStore(appModels);

export type IRootDispatch = IcestoreDispatch<typeof appModels>;
export type IRootState = IcestoreRootState<typeof appModels>;
