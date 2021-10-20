<template>
  <div class="home">
    <div>
        <form @submit.prevent="handleSearch">
            <input type="text" v-model="name" class="form-control">
            <select v-model="type" class="form-control">
                <option value="">Any</option>
                <option value="User">User</option>
                <option value="Organisation">Organisation</option>
            </select>
        </form>
    </div>

    <User v-for="(item, index) in filterUsers" :key="index" :data="item" />
    <!-- {{ dataLength }} -->
    <Pagination 
      :dataLength="dataLength" 
      :perPage="perPage"
      @set-current="setCurrent" />

  </div>
</template>

<script>
// @ is an alias to /src
import Repo from '@/components/Repo.vue'
import User from '@/components/User.vue'
import Filter from '@/components/Filter.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Filter,
    User,
    Pagination
  },

  data: () => ({
    name: '',
    type: '',
    perPage: 10,
    currentPage: 1,
    dataLength: 11
  }),

  computed: {
    ...mapState(['users']),
    filterUsers() {
      return this.users
        .filter(item => item.name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1)
        .filter(item => item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1)
        .slice((this.currentPage - 1) * this.perPage, ((this.currentPage - 1) * this.perPage) + this.perPage)
    },

    dataLength() {
      return this.users
        .filter(item => item.name.toLowerCase().indexOf(this.name.toLowerCase()) !== -1)
        .filter(item => item.type.toLowerCase().indexOf(this.type.toLowerCase()) !== -1).length
    }
  },
  methods: {
    setCurrent(current) {
        this.currentPage = current
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding-bottom: 3rem;
  }
</style>