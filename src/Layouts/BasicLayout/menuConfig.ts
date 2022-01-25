import { MessageOutlined, LikeOutlined, SmileOutlined, CoffeeOutlined } from '@ant-design/icons';

const asideMenuConfig = [
  {
    name: '关于我们',
    path: '/',
    icon: SmileOutlined,
  },
  {
    name: '公司点评',
    path: '/companyComment',
    icon: LikeOutlined,
  },
  {
    name: '面试经验',
    path: '/interview',
    icon: MessageOutlined,
  },
  {
    name: '意见与建议',
    path: '/advice',
    icon: CoffeeOutlined,
  },
];

export { asideMenuConfig };
