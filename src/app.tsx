import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    // type: 'hash',
    type: 'browser',
  },
};

runApp(appConfig);
