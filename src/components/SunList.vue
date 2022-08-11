<template>
    <div class="wrap">
        <div class="big">
            <div v-for="item in week">
                <router-link :to="'/two?id=' + item.url">
                    <img v-lazy="item.img" alt="">
                </router-link>
                <p class="cang">{{ item.title }}</p>
                <p>{{ item.subtitle }}</p>
                <p><span class="qin">{{ item.mark[0].name }}</span></p>
                <p>{{ item.price + '元' + item.unit }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { getHost } from "../tools/ajax"
export default {
    name: '斑马旅游SunList',
    props: ["list"],
    data() {
        return {
            week: []
        };
    },
    created() {
        // console.log(this.list);
        getHost({
            ids: this.list,
        }).then(res => {
            this.week = res.data.list
        })
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 100%;
    // margin-top: 20px;
    font-size: 16px;

    .big {
        width: 7rem;
        display: flex;
        flex-wrap: wrap;
        // background: pink;
        margin: 0 auto;
        justify-content: space-between;

        .cang {
            overflow: hidden; //隐藏
            white-space: nowrap; //不换行
            text-overflow: ellipsis; //超出部分省略号
        }

        .qin {
            border: 0.5px solid red;
            // width: 110px;
            // padding: 2px;
            color: red;
        }

        div {
            width: 48%;

            img {
                width: 100%;
                height: 50%;
            }

            p {
                width: 80%;
                line-height: 20px;
            }
        }
    }
}
</style>