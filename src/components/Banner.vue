<template>
    <!-- 轮播图 -->
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item v-for="item in banner.data" :key="item.id">

                <!-- <router-link :to="'/detal?id=' + item.url"> -->
                <img :src="item.img.url" alt="" @click="add(item)">

                <!-- </router-link> -->

            </van-swipe-item>
        </van-swipe>
    </div>

</template>

<script>


export default {
    name: 'WorkspaceJsonBanner',
    props: ['banner'],

    data() {
        return {
            //  轮播图
            url: ''
        };
    },
    created() {
        // console.log(banner);
    },

    mounted() {

    },

    methods: {
        add(item) {
            if (item.url.split('vity/')[1] == undefined) {
                this.$router.push('/two?id=' + item.url.split('=')[1])
            } else {
                this.$router.push('/twopage?id=' + item.url.split('vity/')[1])
            }
        }
    },
};
</script>

<style lang="scss" scoped>
// 轮播图
.banner {
    width: 7.25rem;
    margin: .1rem auto;

    .my-swipe .van-swipe-item {
        color: #fff;

        img {
            width: 100%;
            height: 3.9rem;
            margin-top: 40px;
        }

        ::deep(van-swipe__indicator) {
            width: .5rem !important;
            background: pink !important;

        }

    }


}
</style>