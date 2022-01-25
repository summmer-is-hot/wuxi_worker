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
        description: 'Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web. ',
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
  '/api/getCompanyNumForChart': {
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
};
