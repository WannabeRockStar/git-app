import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      {
        userId: 1,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Valeri',
        type: 'User'
      },
      {
        userId: 2,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team1.jpg',
        name: 'Gertrude',
        type: 'User'
      },
      {
        userId: 3,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team2.jpg',
        name: 'David',
        type: 'Organisation'
      },
      {
        userId: 4,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Yuri',
        type: 'User'
      },
      {
        userId: 5,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Heinz',
        type: 'Organisation'
      },
      {
        userId: 6,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Miguel',
        type: 'User'
      },
      {
        userId: 7,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Marco',
        type: 'User'
      },
      {
        userId: 8,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Dusko',
        type: 'Organisation'
      },
      {
        userId: 9,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Hassan',
        type: 'User'
      },
      {
        userId: 10,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Leonard',
        type: 'User'
      },
      {
        userId: 11,
        image: 'http://bennettmining.com/wp-content/uploads/2014/08/team3.jpg',
        name: 'Vakhtang',
        type: 'User'
      },
      
    ],

    repositories: [
      {
        id: 1,
        title: 'Lorem',
        language: 'php',
        license: true,
        stars: 2,
        forks: 12,
        updated: 'March 11, 2020',
        userId: 2,
      },
      {
        id: 2,
        title: 'Ipsum',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 3,
        updated: 'March 11, 2019',
        userId: 2
      },
      {
        id: 3,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 4,
        forks: 1,
        updated: 'March 11, 2021',
        userId: 2
      },
      {
        id: 4,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 35,
        updated: 'March 11, 2018',
        userId: 11
      },
      {
        id: 5,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 3,
        forks: 7,
        updated: 'March 11, 2012',
        userId: 3
      },
      {
        id: 6,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 2,
        forks: 10,
        updated: 'March 11, 2014',
        userId: 1
      },
      {
        id: 7,
        title: 'Awesome Project',
        language: 'javascript',
        license: true,
        stars: 2,
        forks: 12,
        updated: 'March 10, 2020',
        userId: 1
      },
      {
        id: 8,
        title: 'Random',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 3,
        updated: 'March 15, 2019',
        userId: 1
      },
      {
        id: 9,
        title: 'Custom',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 3,
        updated: 'March 17, 2019',
        userId: 1
      },
      {
        id: 10,
        title: 'Auto',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 3,
        updated: 'March 3, 2019',
        userId: 1
      },
    ]
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
