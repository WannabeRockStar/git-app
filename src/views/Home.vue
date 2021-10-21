<template>
  <div class="home">
    <div>
        <form @submit.prevent="handleSearch">
            <input type="text" v-model="name" placeholder="search" class="form-control">
            <select v-model="type" class="form-control select-width">
                <option value="">Any</option>
                <option value="User">User</option>
                <option value="Organisation">Organisation</option>
            </select>
            <select v-model.number="perPage" class="form-control select-width">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
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
  form {
    display: flex;
    gap: 8px;
    .form-control {
      width: 300px;
      height: 34px;
      border-radius: 4px;
      border: 1px solid #d0d7de;
      outline: none;
      text-indent: 10px;
      font-size: 14px;
    }
    .select-width {
      width: 150px;
    }
  }
</style>