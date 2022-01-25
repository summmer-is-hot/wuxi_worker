import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const AboutUs = lazy(() => import('@/pages/AboutUs/index'));
const CompanyComment = lazy(() => import('@/pages/CompanyComment'));
const Interview = lazy(() => import('@/pages/Interview'));
const Advice = lazy(() => import('@/pages/Advice'));
const NotFound = lazy(() => import('@/components/NotFound'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: AboutUs,
      },
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
        component: NotFound,
      }],
  },
];

export default routerConfig;
