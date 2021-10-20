<template>
    <div class="repo-header">
      <svg style="width:24px;height:24px" viewBox="0 0 24 24" @click="navigateBack">
        <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
      </svg>
      {{ `${getUser.name}'s Works` }}
    </div>
  <div class="repo-container">
    <Repo v-for="(item, index) in getUserRepos" :key="index" :data="item" />
  </div>
</template>

<script>
import Repo from '@/components/Repo.vue'
import Filter from '@/components/Filter.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Repo,
    Filter
  },
  data: () => ({
    
  }),

  computed: {
    ...mapState(['repositories', 'users']),
    getUserRepos() {
      return this.repositories.filter(item => item.userId === Number(this.$route.params.id))
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
  margin-bottom: 1rem;
  svg {
    cursor: pointer;
  }
}
.repo-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>