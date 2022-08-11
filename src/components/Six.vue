<template>
    <div class="six">
        <ul class="list">

            <li v-for="item in six.data">
                <router-link :to="'/twopage?id=' + item.url.split('/')[5]">
                    <img :src="item.img.url" alt="">
                </router-link>
            </li>

        </ul>
    </div>
</template>
   
<script>

export default {
    name: '斑马旅游Six',
    props: ['six'],
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.six {
    width: 100%;

    .list {
        width: 95%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        li {
            width: 2.24rem;
            height: 2rem;
            text-align: center;

            img {
                width: 2.24rem;
                height: 2rem;
            }
        }
    }
}
</style>