import { message } from 'antd';
import { runApp, IAppConfig } from 'ice';
import Loading from './components/Loading';
import { codeMessage } from './utils/const';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
  },
  router: {
    type: 'browser',
    fallback: <Loading />,
  },
  request: {
    // 可选的，全局设置 request 是否返回 response 对象，默认为 false
    withFullResponse: false,

    // baseURL: '/api',
    headers: {},
    // ...RequestConfig 其他参数

    // 拦截器
    interceptors: {
      request: {
        onConfig: (config) => {
          // 发送请求前：可以对 RequestConfig 做一些统一处理
          config.headers = { a: 1 };
          return config;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (response) => {
          // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
          // if (!response.data.status !== 1) {
          //   alert('请求失败');
          // }
          return response;
        },
        onError: (error) => {
          // 请求出错：服务端返回错误状态码
          message.error(codeMessage[error?.response?.status || 400]);
          // console.log(error?.response?.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
