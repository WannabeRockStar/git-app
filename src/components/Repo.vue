<template>
    <div class="card">
        <h3 class="card-title">{{ data.title }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }        
}
</script>


<style scoped lang="scss">
    .card {
        width: 45%;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.15);
        margin-bottom: 1rem;
        &-title {
            color: blue;
        }
    }
</style>