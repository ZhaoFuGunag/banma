<template>
    <!-- <div class="wrap" v-if="url1 == 'quality'">
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item v-for="item in newbnner.data">
                <router-link :to="'/twopage?id=' + item.url.split('vity/')[1]">
                    <img :src="item.img.url" alt="">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div> -->
    <div class="wrap">
        <!--  -->
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item v-for="item in newbnner.data">
                <!-- {{ newbnner.data }} -->
                <router-link :to="'/two?id=' + item.url.split('=')[1]">
                    <img :src="item.img.url" alt="">
                </router-link>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    name: '斑马旅游NewBanner',
    props: ['newbnner'],

    data() {
        return {
            url1: ''
        };
    },

    mounted() {

    },
    created() {
        console.log(this.newbnner, '55665655');

        // this.url = this.newbnner.data[0].url.split('=')[1]
        // this.url1 = this.newbnner.data[0].url.split("com/")[1].split("/list")[0]
        // console.log(this.url1);
        // console.log(this.url);
        // console.log(this.url);
        // console.log(this.newbnner.data);
    },
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    text-align: center;
    margin-top: .2rem;

    img {
        width: 95%;
    }
}
</style>