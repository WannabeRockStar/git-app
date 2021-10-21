<template>
    <router-link :to="`/users/${data.userId}/reps`">
        <div class="card">
        
            <div class="card-image">
                <img :src="data.image" alt="">
            </div>
            <div class="card-info">
                <h3 class="card-title">{{ data.name }}</h3>
                <div class="card-type">{{ data.type }}</div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    
    mounted() {
        // console.log(this.data.id)
    }
}
</script>


<style scoped lang="scss">
    a {
        display: block;
        width: 66%;
    }
    .card {
        width: 100%;
        display: flex;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: $main-shadow;
        margin-bottom: 1rem;
        gap: 1rem;
        align-items: center;
        cursor: pointer;
        &-title {
            color: #2F334B;
        }
        &-image {
            border-radius: 50%;
            box-shadow: $image-shadow;
            width: 60px;
            height: 60px;
            overflow: hidden;
            position: relative;
        }
        &-type {
            color: #9E9FA5;
        }
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            
        }
    }
    .card:last-child {
        margin-bottom: 0;
    }
</style>