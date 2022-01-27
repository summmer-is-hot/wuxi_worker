/* eslint-disable max-lines */
module.exports = {
  '/api/getRepos': {
    dataSource: [
      {
        id: 1,
        name: 'facebook/react',
        description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces',
        logo: 'https://avatars3.githubusercontent.com/u/69631',
      },
      {
        id: 2,
        name: 'vuejs/vue',
        description:
          'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
        logo: 'https://avatars1.githubusercontent.com/u/6128107',
      },
      {
        id: 3,
        name: 'angular/angular',
        description: 'One framework. Mobile & desktop. ',
        logo: 'https://avatars3.githubusercontent.com/u/139426',
      },
      {
        id: 4,
        name: 'nuxt/nuxt.js',
        description: 'The Vue.js Framework',
        logo: 'https://avatars2.githubusercontent.com/u/23360933',
      },
      {
        id: 5,
        name: 'zeit/next.js',
        description: 'The React Framework',
        logo: 'https://avatars0.githubusercontent.com/u/14985020',
      },
      {
        id: 6,
        name: 'ice-lab/ice.js',
        description: 'A universal framework based on React.js.',
        logo: 'https://avatars1.githubusercontent.com/u/1961952',
      },
    ],
  },
  '/api/getCoNumForChart': {
    chartData: [
      {
        Date: '2021-07',
        scales: 0,
      },
      {
        Date: '2021-08',
        scales: 21,
      },
      {
        Date: '2021-09',
        scales: 33,
      },
      {
        Date: '2021-10',
        scales: 56,
      },
      {
        Date: '2021-11',
        scales: 61,
      },
      {
        Date: '2021-12',
        scales: 74,
      },
      {
        Date: '2022-01',
        scales: 79,
      },
    ],
  },
  '/api/getCoCommentList': {
    page: 1,
    success: true,
    total: 10,
    data: [
      { id: '1473956848157171714', name: '家里蹲', score: 10, comment: '不缺钱最好的选择' },
      {
        id: '1468829707934523394',
        name: '帆软',
        score: 9,
        comment: '待遇很好，软件开发岗应届生非985 211不收,年龄要求一般28以下',
      },
      { id: '1468829749718179842', name: '阿里云', score: 9, comment: 'p7以下岗位招的少,一年就招三四个' },
      {
        id: '1468829912109047810',
        name: '国联证券',
        score: 9,
        comment: '无锡最大国企国联集团下属，上市公司，资金雄厚，待遇可以，环境也很好，福利参考事业单位',
      },
      {
        id: '1468829782416973825',
        name: '博世',
        score: 8,
        comment: '955，公积社保全额+工资12%养老补贴+家庭商业险+不打卡，可能要去博士其他厂',
      },
      { id: '1468829828071972866', name: '字节跳动', score: 8, comment: '无锡字节已解散' },
      { id: '1469894410264727554', name: '无锡电信', score: 8, comment: '正式编，每月2000购物卡，油贴1500' },
      {
        id: '1468830023367155713',
        name: '锡商银行',
        score: 0,
        comment: '正式员工待遇好  加班相对比较多 流动性不小 压力偏大',
      },
      {
        id: '1468831267720683522',
        name: '混沌能源',
        score: 6,
        comment: '比较正规 加班多 最近最近公积金调整至12%，很少主动裁员',
      },
      {
        id: '1469894373417766914',
        name: '无锡移动',
        score: 3,
        comment: '苏南总部，五湖大道附近，环境可以，正式编制推荐，外包一般',
      },
    ],
  },
};
