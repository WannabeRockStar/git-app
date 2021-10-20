<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Filter />
    <div class="card-container">
      <Repo v-for="(item, index) in repositories" 
      :key="index" 
      :data="item" />
    </div>
  </div>
</template>

<script>
import Repo from '@/components/Repo.vue'
import Filter from '@/components/Filter.vue'
export default {
  components: {
    Repo,
    Filter
  },
  data: () => ({
    repositories: [
      {
        id: 1,
        title: 'Lorem'
      },
      {
        id: 2,
        title: 'Ipsum'
      }
    ]
  }),

  mounted() {
    console.log(this.name)
  }
}
</script>

<style scoped lang="scss">
  .card-container {
    display: flex;
    justify-content: space-between;
  }
</style>