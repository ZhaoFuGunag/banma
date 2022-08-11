<template>
    <div class="big">
        <div class="big-title" v-if="qing == 'cms'">
            <!--   -->
            <van-icon name="arrow-left" @click="$router.back()" />
            <div class="hao"> <span>{{ title }}</span></div>
        </div>
        <!-- {{ $route.query.id }} -->
        <div class="hello">
            <img v-for="item in img" :src="item.img.url" alt="">
            <!-- <img v-for="item in img1" :src="item.img.url" alt=""> -->
            <SunDay :mo="img1" v-if="flag">
            </SunDay>
        </div>
        <SunList :list="list" v-if="flag"></SunList>

        <!-- <img v-for="item in img1" :src="item.img.url" alt=""> -->
        <SunDay :mo="img2" v-if="flag">
        </SunDay>
        <SunList :list="list1" v-if="flag"></SunList>
        <!-- 第二张轮播图 -->
        <Two :list="two" v-if="flag"></Two>
    </div>

</template>

<script>
import { product } from '../tools/ajax'
import SunDay from '@/components/SunDay';
import SunList from '@/components/SunList';
import Two from '@/components/Two';
export default {
    name: "WorkspaceJsonDetal",
    data() {
        return {
            list: [],
            list1: [],
            title: "",
            img: [],
            img1: [],
            img2: [],
            title1: [],
            // new1:[],
            flag: false,
            two: []

        };
    },
    created() {

        var qing = this.$route.query.id.split("com/")[1].split("/")[0]
        console.log(qing);
        // https://m.bmtrip.com/cms/activity/62b95806b8963177d145f996
        // https://m.bmtrip.com/quality/list/detail?id=3060
        if (qing == 'cms') {
            // console.log(this.$route.query.id)
            location.href = this.$route.query.id
            // getTwoIndex({
            //     pageId: this.$route.query.id.split("activity")[1].split("/")[1]
            // }).then(res => {
            //     console.log(res);
            //     this.title = res.data.pageName;
            //     this.img = res.data.data[0].data;
            //     this.img1 = res.data.data[1].data;
            //     this.list = res.data.data[2].data.ids;
            //     this.img2 = res.data.data[3].data;
            //     this.list1 = res.data.data[4].data.ids;
            //     this.flag = true
            // }

            // )
        }
        if (qing == 'quality') {
            console.log(this.$route.query.id.split("/quality/list/detail?id=")[1])
            product({
                product_id: this.$route.query.id.split("/quality/list/detail?id=")[1],
                // combo_key: "10000:131;20000:6406"
            }).then(res => {
                // console.log(res, 1111111);
                this.two = res.data

                this.flag = true
            })
        }
    },
    mounted() {
    },
    methods: {},
    components: { SunList, SunDay, Two }
};
</script>

<style lang="scss" scoped>
.big {
    width: 100%;
    font-size: 16px;
    margin: 0;

    .big-title {
        width: 90%;
        margin: 0 auto;
        // border: 1px solid red;
        line-height: 50px;
        display: flex;
        align-items: center;

        .hao {
            width: 100%;
            text-align: center;
        }
    }

    .hello {
        width: 90%;
        margin: 0 auto;


        img {
            width: 100%;
        }
    }
}
</style>