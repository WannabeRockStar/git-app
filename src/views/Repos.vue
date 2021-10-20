<template>
    <div class="repo-header">
      <div class="page-title">
        <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="navigateBack">
        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
      {{ `${getUser.name}'s Repos` }}
      </div>
      <select v-model="sortValue">
        <option value="updated">Updated</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
      </select>
    </div>
  <div class="repo-container">
    <Repo 
      v-for="(item, index) in getUserRepos" 
      :key="index" 
      :data="item" />
  </div>
</template>

<script>
import Repo from '@/components/Repo.vue'
// import Filter from '@/components/Filter.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Repo
  },

  data: () => ({
    sortValue: ''
  }),

  computed: {
    ...mapState(['repositories', 'users']),
    getUserRepos() {
      return this.repositories.filter(item => item.userId === Number(this.$route.params.id))
        .sort((a, b) => a[this.sortValue] - b[this.sortValue])
    },
    getUser() {
      return this.users.find(item => item.userId === Number(this.$route.params.id))
    }
  },

  methods: {
    navigateBack() {
      this.$router.go(-1)
    }
  },

  mounted() {
    console.log(this.repositories)
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
}
.repo-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>