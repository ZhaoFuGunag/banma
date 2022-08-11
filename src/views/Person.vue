<template>
    <div class="big">
        <div class="se">
            <img src="../assets/微信图片_20220725210707.png" alt="">
            <div style="width: 100%; background: #F5F5F5;height: 10px;"></div>
        </div>
        <ul class="list">
            <li>我的订单</li>
            <li>用户反馈</li>
            <li>设置</li>
        </ul>
        <div style="width: 100%; background: #F5F5F5;height: 266px;"></div>
    </div>
</template>

<script>
export default {
    name: '斑马旅游Person',

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
.big {
    width: 100%;
    margin: 0;
    font-size: 16px;

    .se {
        width: 100%;
        background-color: white;
        height: 200px;

    }

    img {
        width: 98%;
        margin: 0 auto;
    }

    .list {
        width: 90%;
        margin: 25px auto;
        background: white;

        li {
            width: 100%;
            line-height: 50px;
        }
    }
}
</style>