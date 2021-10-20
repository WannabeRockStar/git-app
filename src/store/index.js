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
        update: 'March 11, 2020',
        userId: 2,
      },
      {
        id: 2,
        title: 'Ipsum',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 3,
        update: 'March 11, 2020',
        userId: 2
      },
      {
        id: 2,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 4,
        forks: 1,
        update: 'March 11, 2020',
        userId: 2
      },
      {
        id: 2,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 5,
        forks: 35,
        update: 'March 11, 2020',
        userId: 11
      },
      {
        id: 2,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 3,
        forks: 7,
        update: 'March 11, 2020',
        userId: 3
      },
      {
        id: 2,
        title: 'Dolor',
        language: 'javascript',
        license: true,
        stars: 2,
        forks: 10,
        update: 'March 11, 2020',
        userId: 1
      },
      {
        id: 2,
        title: 'Awesome Project',
        language: 'javascript',
        license: true,
        stars: 2,
        forks: 12,
        update: 'March 11, 2020',
        userId: 1
      },
    ]
  },
  getters: {
    getRepos(state) {
      return state.repos
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
