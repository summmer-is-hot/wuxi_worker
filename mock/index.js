module.exports = {
  '/api/advice/addAdvice': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/advice/updateAdviceLikeNum': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/advice/getAdviceList': {
    message: 'success',
    status: 200,
    result: {
      total: 20,
      data: [
        {
          id: 1,
          head: 1,
          nickName: 'string',
          createTime: '2021年11月22日',
          adviceDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
          likeNum: 10,
        },
        {
          id: 2,
          head: 2,
          nickName: 'string',
          createTime: '2021年11月22日',
          adviceDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
          likeNum: 88,
        },
        {
          id: 3,
          head: 3,
          nickName: 'string',
          createTime: '2021年11月22日',
          adviceDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
          likeNum: 888,
        },
        {
          id: 4,
          head: 4,
          nickName: 'string',
          createTime: '2021年11月22日',
          adviceDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
          likeNum: 9990,
        },
        {
          id: 5,
          head: 5,
          nickName: 'string',
          createTime: '2021年11月22日',
          adviceDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
          likeNum: 1234,
        },
      ],
    },
  },
  '/api/interview/getInterviewItemListById': {
    message: 'success',
    status: 200,
    result: {
      nextPage: 2,
      data: [
        {
          id: 1,
          head: 1,
          nickName: 'string',
          createTime: '2021年11月22日',
          interviewDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
        },
        {
          id: 2,
          head: 2,
          nickName: 'string',
          createTime: '2021年11月22日',
          interviewDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
        },
        {
          id: 3,
          head: 3,
          nickName: 'string',
          createTime: '2021年11月22日',
          interviewDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
        },
        {
          id: 4,
          head: 4,
          nickName: 'string',
          createTime: '2021年11月22日',
          interviewDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
        },
        {
          id: 5,
          head: 5,
          nickName: 'string',
          createTime: '2021年11月22日',
          interviewDetail:
            'sssssssssss的点点滴滴多多啊啊啊啊啊啊啊啊啊少时诵诗书所所所所的点点滴滴多多多多多多少时诵诗书所所所所所吧吧吧吧吧吧吧吧保险丝娃娃',
        },
      ],
    },
  },

  '/api/interview/updateCompanyLikeNum': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/interview/addInterview': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/interview/getInterviewList': {
    message: 'success',
    status: 200,
    // result: {
    //   total: 0,
    //   data: [],
    // },
    result: {
      total: 22,
      data: [
        {
          id: 1,
          createTime: '1644223424000',
          updateTime: '1644223424000',
          companyName: '大花盆',
          introduction: '我是大华鹏',
          companyImage: 5,
          rate: 2,
          likeNum: 9990,
          isDelete: false,
        },
        {
          id: 2,
          createTime: '1644223465000',
          updateTime: '1644223465000',
          companyName: '法规及',
          introduction: '二复活甲就赶快买各d',
          companyImage: 2,
          rate: 2,
          likeNum: 678,
          isDelete: false,
        },
        {
          id: 3,
          createTime: '1644223477000',
          updateTime: '1644223477000',
          companyName: '费三十多岁的飞机上来阿斯顿马丁',
          introduction:
            '水电费股份计划投入电饭锅地方规范化水电费股份计划投入电饭锅地方规范化水电费股份计划投入电饭锅地方规范化水电费股份计划投入电饭锅地方规范化',
          companyImage: 4,
          rate: 2,
          likeNum: 8990,
          isDelete: false,
        },
        {
          id: 4,
          createTime: '1644213477000',
          updateTime: '1644213477000',
          companyName: '方股东会',
          introduction: '阿斯顿各位阿萨德士大夫',
          companyImage: 3,
          rate: 2,
          likeNum: 28888,
          isDelete: false,
        },
        {
          id: 5,
          createTime: '1644113477000',
          updateTime: '1644113477000',
          companyName: '电饭锅',
          introduction: '颠覆三观电饭锅和投入和',
          companyImage: 1,
          rate: 2,
          likeNum: 3456,
          isDelete: false,
        },
      ],
    },
  },

  '/api/comment/addComment': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/company/addCompany': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/company/getcompanyList': {
    message: 'success',
    status: 200,
    result: [
      {
        id: 1,
        name: '无锡大家庭1',
        microName: '家庭1',
        companySize: 1,
        introduction: 'asdasd',
      },
      {
        id: 2,
        name: '无锡大家庭2',
        microName: '家庭2',
        companySize: 2,
        introduction: '阿萨德',
      },
      {
        id: 3,
        name: '无锡大家庭3',
        microName: '家庭3',
        companySize: 3,
        introduction: '阿萨德阿萨德',
      },
      {
        id: 4,
        name: '无锡大家庭4',
        microName: '家庭4',
        companySize: 4,
        introduction: '阿萨德adad',
      },
      {
        id: 5,
        name: '无锡大家庭5',
        microName: '家庭5',
        companySize: 5,
        introduction: '阿萨舒服VS的',
      },
    ],
  },

  '/api/comment/updateCommentById': {
    message: 'success',
    status: 200,
    result: 'success',
  },

  '/api/advice/getRepos': {
    message: 'success',
    status: 200,
    result: [
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
  '/api/about/getChartForCoNumber': {
    message: 'success',
    status: 200,
    result: [
      {
        date: '2021-07',
        num: 0,
      },
      {
        date: '2021-08',
        num: 6,
      },
      {
        date: '2021-09',
        num: 22,
      },
      {
        date: '2021-10',
        num: 28,
      },
      {
        date: '2021-11',
        num: 37,
      },
      {
        date: '2021-12',
        num: 46,
      },
      {
        date: '2022-01',
        num: 51,
      },
    ],
  },
  '/api/about/getChartForCommentNumber': {
    message: 'success',
    status: 200,
    result: [
      {
        date: '2021-07',
        num: 0,
      },
      {
        date: '2021-08',
        num: 21,
      },
      {
        date: '2021-09',
        num: 33,
      },
      {
        date: '2021-10',
        num: 56,
      },
      {
        date: '2021-11',
        num: 61,
      },
      {
        date: '2021-12',
        num: 74,
      },
      {
        date: '2022-01',
        num: 79,
      },
    ],
  },
  '/api/about/getChartForInterviewNumber': {
    message: 'success',
    status: 200,
    result: [
      {
        date: '2021-07',
        num: 0,
      },
      {
        date: '2021-08',
        num: 3,
      },
      {
        date: '2021-09',
        num: 7,
      },
      {
        date: '2021-10',
        num: 15,
      },
      {
        date: '2021-11',
        num: 24,
      },
      {
        date: '2021-12',
        num: 33,
      },
      {
        date: '2022-01',
        num: 41,
      },
    ],
  },
  '/api/comment/getCoCommentList': {
    message: 'success',
    status: 200,
    result: {
      page: 1,
      nextPage: 2,
      total: 55,
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
          comment: '苏南总部，五湖大道附近，环境可以，正式编制推荐，外包一般的',
        },
      ],
    },
  },
  '/api/comment/getCommentById': {
    message: 'success',
    status: 200,
    result: [
      {
        id: 123,
        key: 123,
        comment: '11111111111',
        score: 1,
        salaryLevel: 1,
        socialSecurityLevel: 1,
        providentFundLevel: 1,
        discount: 8,
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 33,
        key: 33,
        comment: '无锡最大国企国联集团下属，上市公司，资金雄厚，待遇可以，环境也很好，福利参考事业单位',
        score: 2,
        salaryLevel: 2,
        socialSecurityLevel: 2,
        providentFundLevel: 2,
        discount: 8,
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 345799,
        key: 474,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 795,
        key: 789789,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 23467,
        key: 34525,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 4562,
        key: 76547,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 2344,
        key: 65623,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 545,
        key: 2134,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 2222432,
        key: 63,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 456,
        key: 234,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 34,
        key: 12,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
      {
        id: 1212,
        key: 234,
        comment: '3333333333333333',
        score: 3,
        salaryLevel: 3,
        socialSecurityLevel: 3,
        providentFundLevel: 3,
        discount: '不打折',
        addSocialSecurity: 0,
        addProvidentFund: 0,
      },
    ],
  },
  '/api/account/regist': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/account/sendCode': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/account/findPassword': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/account/updateUserInfo': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/account/login': {
    message: 'success',
    status: 200,
    result: 'success',
  },
  '/api/account/userInfo': {
    message: 'success',
    status: 200,
    result: {
      userId: 1,
      userName: '111@qq.com',
      nickName: 'Frank',
      email: '111@qq.com',
      head: 8,
      power: 10,
    },
  },
};
