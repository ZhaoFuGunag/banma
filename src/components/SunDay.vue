<template>
    <div v-for="item in mo" class="img">
        <img :src="item.img.url" alt="">
        <!-- 下列列表 -->
        <!-- <ul>
            <li></li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name: '斑马旅游SunDay',
    props: ['mo'],
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
.img {
    width: 100%;
    margin-top: .3rem;

    img {
        width: 92%;
        display: block;
        margin: 0 auto;
    }

    ul {
        width: 92%;
        height: .2rem;
        border: 1px solid red;

    }
}
</style>