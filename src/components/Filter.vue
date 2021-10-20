<template>
    <div>
        <form @submit.prevent="handleSearch">
            <input type="text" v-model="title" class="form-control">
            <select v-model="type" class="form-control">
                <option value="all">All</option>
                <option value="user">User</option>
                <option value="organisation">Organisation</option>
            </select>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: '',
        type :''
    }),

    watch: {
        title(value) {
            this.$emit('search-filter', value)
        }
    },

    methods: {
        handleSearch() {
            console.log(this.title, this.type)
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-control {
        height: 34px;
        border: 1px solid #ddd;
        text-indent: .5rem;
        outline: none;
        border-radius: 8px;
        width: 280px;
        color: #666;
    }
    
</style>