import { message } from 'antd';
import { runApp, IAppConfig } from 'ice';
import Loading from './components/Loading';
import chartService from './services/chartService';
import { codeMessage } from './utils/const';
import { getCookie } from './utils/utils';

const appConfig: IAppConfig = {
  app: {
    rootId: 'ice-container',
    getInitialData: async (ctx) => {
      const res = await chartService.about();
      if (res) {
        console.log('success :>> ', 'success');
      }
    }
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
          config.headers = {
            Authorization: getCookie('jwtToken'),
            'x-csrf-token': getCookie('csrfToken')
          };
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
          if (error?.response?.status === 501 || 401) {
            message.error(error?.response?.data.message)
          } else {
            message.error(codeMessage[error?.response?.status || 400]);
          }
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
