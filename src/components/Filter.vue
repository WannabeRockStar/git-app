<template>
    <div>
        <form @submit.prevent="handleSearch">
            <input type="text" v-model="title" class="form-control">
            <select v-model="type" class="form-control">
                <option value="all">All</option>
                <option value="type">Type</option>
            </select>
            <button class="btn-default">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    data: () => ({
        title: '',
        type :''
    }),

    methods: {
        handleSearch() {
            console.log(this.title, this.type)
        }
    }
}
</script>

<style lang="scss" scoped>
    .form-control {
        height: 40px;
    }
    .btn-default {
        height: 40px;

    }
</style>