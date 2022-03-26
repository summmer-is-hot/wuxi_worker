import { MessageOutlined, LikeOutlined, SmileOutlined, CoffeeOutlined, FileTextOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '公司点评',
    path: '/companyComment',
    icon: LikeOutlined,
    breadcrumbName: '公司点评',
  },
  {
    name: '面试经验',
    path: '/interview',
    icon: MessageOutlined,
    breadcrumbName: '面试经验',
  },
  {
    name: '意见与建议',
    path: '/advice',
    icon: CoffeeOutlined,
    breadcrumbName: '意见与建议',
  },
  {
    name: '学习资料',
    path: '/study',
    icon: FileTextOutlined,
    breadcrumbName: '关于我们',
  },
  {
    name: '关于我们',
    path: '/aboutUs',
    icon: SmileOutlined,
    breadcrumbName: '关于我们',
  },
];

export { asideMenuConfig };
