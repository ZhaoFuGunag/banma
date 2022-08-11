<template>
    <div class="wrap">
        <div class="search">
            <van-icon name="arrow-left" class="yi" @click="$router.back()" />
            <span>{{ this.$route.query.title }}</span>
            <van-icon name="search" class="er" @click="$router.back()" />
        </div>
        <div class="title8">
            <van-tabs v-model:active="active" style="width: 100%;" @click-tab="onClickTab">
                <van-tab v-for="item in title" :name="item.type" :title="item.title">
                    <div class="jia">
                        <span v-for="item in arr">{{ item }}</span>
                    </div>
                    <ul class="list6">
                        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                            <li v-for="item in list" :key="item">
                                <!-- {{ item }} -->
                                <router-link :to="'/two?id=' + item.id">
                                    <img v-lazy="item.img" alt="">
                                </router-link>
                                <h3>{{ item.title }}</h3>
                                <p>{{ item.subtitle }}</p>
                                <div class="ko">
                                    <p v-for="item in item.mark">{{ item.name }}</p>
                                </div>
                                <p class="money">{{ item.price + '￥元' }}</p>
                            </li>
                        </van-list>
                    </ul>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<script>
import { foundtwo, foundtwo1, foundtwo2, search } from '@/tools/ajax'
// import {  } from '@/tools/ajax'
export default {
    name: 'WorkspaceJsonMuDiDetail',
    data() {
        return {
            title: [],
            active: 0,
            arr: ["综合", "价格", "筛选"],
            list: [],
            page: 0,
            loading: false,
            finished: false,

        };
    },

    created() {
        // search({
        //     keywords: '三亚'
        // }).then(res => {
        //     console.log(res, "8888888888");
        // })

        foundtwo({
            district_id: this.$route.query.id,

        }).then(res => {

            this.title = res.data.list
        })
        // foundtwo1({
        //     type: 0,
        //     district_id: "152"
        // }).then(res => {
        // })
    },
    methods: {
        get(page) {
            if (this.$route.query.id) {
                console.log("you id");
                foundtwo2({
                    type: this.active,
                    page: page,
                    district_id: [this.$route.query.id]
                }).then(res => {
                    console.log(res);
                    if (res.data.list.length == 0) {
                        this.finished = true;
                    } else {
                        this.list.push(...res.data.list)
                        this.loading = false;
                    }
                })
            } else {
                search({
                    keywords: this.$route.query.keyword
                }).then(res => {
                    console.log(res, 11111);
                    console.log(this.$route.query.keyword);
                    console.log("没 id");
                    this.list = res.data.list
                })
            }
        },
        onClickTab() {
            this.page = 0
            this.finished = false;
            this.list = []
        },
        onLoad() {
            console.log(this.page);
            // 数据全部加载完成
            this.page++
            this.get(this.page)
        }

    }
}
</script>

<style lang="scss" scoped>
.wrap {

    width: 100%;
    font-size: 16px;
    padding-bottom: 1rem;

    .active {

        border-bottom: 1px solid rgb(255, 0, 0);
    }

    .search {
        width: 90%;
        margin: 0 auto;
        height: 50px;
        display: flex;
        align-items: center;
        font-size: 20px;
        justify-content: space-between;

        .yi {
            width: 144px;
            font-size: 22px;
        }

        span {
            width: 165px;
        }

        .er {
            font-size: 22px;
        }
    }

    .title8 {
        display: flex;
        width: 90%;
        margin: 0 auto;
        justify-content: space-between;
    }

    .jia {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .list6 {
        width: 90%;
        margin: 0 auto;

        li {
            width: 100%;
            height: 300px;
            margin: 10px 0;

            img {
                width: 100%;
                height: 200px;
            }

            h3 {
                font-weight: normal;
            }

            p {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .ko {
                display: flex;
                font-size: 14px;

                p:nth-child(1) {
                    margin: 0;
                }

                p {
                    border: 1px solid red;
                    padding: 5px;
                    margin: 0 5px;
                    color: red;
                }
            }

            .money {
                color: red;
            }
        }
    }
}
</style>