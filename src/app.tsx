import { runApp, IAppConfig } from 'ice';
import Loading from './components/Loading';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    fallback: <Loading />,
  },
};

runApp(appConfig);
