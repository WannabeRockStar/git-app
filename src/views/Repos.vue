<template>
    <div class="repo-header">
      <div class="page-title">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="navigateBack">
        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
      {{ `${getUser.name}'s Repos` }}
      </div>
      <select v-model="sortValue" class="sort-select">
        <option value="updatedAt">Updated</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
      </select>
    </div>
  <div class="repo-container" v-if="getFilteredData.length">
    <Repo 
      v-for="(item, index) in getFilteredData" 
      :key="index" 
      :data="item" />
  </div>
  <div v-else class="no-data">
    No Data
  </div>

  <Pagination 
    :dataLength="dataLength" 
    :perPage="perPage"
    @set-current="setCurrent" />
</template>

<script>
import Repo from '@/components/Repo.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Repo,
    Pagination
  },

  data: () => ({
    sortValue: '',
    perPage: 10,
    currentPage: 1,
    dataLength: null
  }),

  computed: {
    ...mapState(['repositories', 'users']),
    getUserRepos() {
      this.repositories.filter(item => item.userId === Number(this.$route.params.id))
    },

    getFilteredData() {
      return this.repositories.filter(item => item.userId === Number(this.$route.params.id))
        .map(item => {
          item.updatedAt = new Date(item.updated).getTime()
          return item
        })
        .sort((a, b) => a[this.sortValue] - b[this.sortValue])
        .slice((this.currentPage - 1) * this.perPage, ((this.currentPage - 1) * this.perPage) + this.perPage)
    },

    // dataLength() {
    //   return this.users
    //     .filter(item => item.name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1)
    //     .filter(item => item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1).length
    // },

    getUser() {
      return this.users.find(item => item.userId === Number(this.$route.params.id))
    },
  },

  methods: {
    navigateBack() {
      this.$router.go(-1)
    },
    setCurrent(current) {
        this.currentPage = current
    }
  },

  mounted() {
    console.log(this.repositories)
    this.dataLength = this.repositories.filter(item => item.userId === Number(this.$route.params.id)).length
  }
}
</script>

<style scoped lang="scss">
.repo-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  
  svg {
    cursor: pointer;
  }
  .page-title {
    display: flex;
    align-items: center;
  }
  .sort-select {
    outline: none;
    border: 1px solid $border-color;
  }
}
.repo-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
.no-data {
  height: calc(100vh - 73px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
}
</style>