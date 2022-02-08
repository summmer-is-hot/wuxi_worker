import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const AboutUs = lazy(() => import('@/pages/AboutUs/index'));
const Login = lazy(() => import('@/pages/Login'));
const CompanyComment = lazy(() => import('@/pages/CompanyComment'));
const Interview = lazy(() => import('@/pages/Interview'));
const Advice = lazy(() => import('@/pages/Advice'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/companyComment',
        component: CompanyComment,
      },
      {
        path: '/interview',
        component: Interview,
      },
      {
        path: '/advice',
        component: Advice,
      },
      {
        path: '/AboutUs',
        component: AboutUs,
      },
      {
        path: '/',
        redirect: '/aboutUs',
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
