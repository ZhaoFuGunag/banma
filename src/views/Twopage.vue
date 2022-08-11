<template>
    <div class="big">
        <div class="big-title">
            <van-icon name="arrow-left" @click="$router.back()" class="left" />
            <span>{{ res }}</span>
        </div>
        <Transfer v-for="(item, index) in data" :data="item" :key="index"></Transfer>
    </div>
</template>
 
<script>
import { getTwoIndex } from '../tools/ajax'
import Transfer from '../components/Transfer.vue'

export default {
    name: "WorkspaceJsonTwopage",
    components: {
        Transfer
    },
    data() {
        return {
            active: '',
            date: '',
            show: false,
            res: '',
            data: [],
        };
    },
    mounted() {
    },
    methods: {},
    beforeRouteUpdate(to) {
        getTwoIndex({
            pageId: to.query.id
        }).then(res => {
            this.data = res.data.data
            this.res = res.data.pageName
        })
    },
    created() {


        getTwoIndex({
            pageId: this.$route.query.id
        }).then(res => {
            // console.log(res);
            this.res = res.data.pageName
            this.data = res.data.data
            // console.log(res.data);
        })
    }
};
</script>

<style lang="scss" scoped>
.big {
    width: 100%;
    font-size: 16px;
    margin: 0 auto;

    .big-title {
        margin-right: 90%;
        // border: 1px solid red;
        height: 40px;
        display: flex;
        align-items: center;
        margin: 0 auto;

        .left {
            margin-left: 20px;
        }

        span {
            margin-left: 135px;

        }
    }


}
</style>