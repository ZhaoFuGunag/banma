<template>
    <div class="bigwrap">
        <div class="banner">
            <van-swipe class="my-swipe" :autoplay="3000">
                <van-swipe-item v-for="item in list.product_img_www" :key="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>
            </van-swipe>
            <div>
                <van-icon name="arrow-left" class="ni" @click="$router.back()" />
                <van-icon name="weapp-nav" class="hao" />
            </div>
            <div class="biaoti" v-show="flag">
                <van-icon name="revoke" @click="$router.back()" />
                {{ list.title }}
                <van-icon name="ellipsis" />
            </div>
        </div>
        <div class="ren">
            <h3>{{ list.title }}</h3>
            <p class="ko">{{ list.subtitle }}</p>
            <div class="ll">
                <p v-for="item in list.mark">{{ item.name }}</p>
            </div>
            <div class="money">
                <h5 style="color: blueviolet;margin-top: 5px;">{{ list.max_price + '起/人' }}</h5>
                <div
                    style="display: flex; justify-content: space-between; margin-top: 5px; color: blueviolet;padding: 10px 0;">
                    <span>本次下单优惠15个豆</span>
                    <span v-for="item in list.group_list">{{ item.title }}</span>
                </div>
            </div>
        </div>
        <div class="yan" style="height: 10px; background: #F5F5F5;">
        </div>
        <div class="go">
            <span v-if="list.group_list">{{ list.group_list[0].title }}:{{
                    list.group_list[0].list[0].name
            }}</span>
            <span>切换城市</span>
        </div>
        <div class="yan" style="height: 10px; background: #F5F5F5;">
        </div>
        <div class="gan">
            <h5 v-if="list.group_list[1].list[0].name">{{ list.group_list[1].list[0].name }}</h5>
        </div>
        <div class="gan1" v-show="flag">
            <h5>{{ list.group_list[1].list[0].name }}</h5>
        </div>
        <div style="height: 5px; background: #F5F5F5;">
        </div>
        <div v-if="list.feature.length == 0">

        </div>
        <div v-else>
            <div v-html="list.feature[0].content" class="imgs">

            </div>
        </div>

        <div style="height: 5px; background: #F5F5F5;">
        </div>
        <!-- 人文 -->
        <div v-for="item in list.high_feature" class="wen">
            <h3>{{ item.title }}</h3>
            <div class="wen1" v-for="item1 in item.list" :key="item1">
                <van-swipe class="my-swipe" :autoplay="3000">
                    <van-swipe-item v-for="item in item1.imgs">
                        <img :src="item" alt="">
                    </van-swipe-item>
                </van-swipe>
                <div class="dada" style="display: flex; ">
                    <p v-for="item in item1.labels">{{ item }}</p>
                </div>
                <div>
                    {{ item1.title }}
                </div>
                <div class="xia">{{ item1.content }}</div>

                <div style="height: 5px; background: #F5F5F5;">
                </div>


            </div>

        </div>
        <!-- 费用包含 -->
        <div class="qian">
            <h3 class="se">费用包含 </h3>
            <p v-html="list.www_fee_contain"></p>
        </div>
        <div>
            <h3 class="se">费用不包含</h3>
            <p v-html="list.www_fee_not_contain"></p>
        </div>


    </div>
    <!-- 回到顶部 -->
    <div class="back" @click="back()" v-show="flag">
        回到顶部
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonTwo',
    props: ["list"],
    data() {
        return {
            flag: false
        };
    },

    mounted() {
        console.log(this.list);
        var title = document.querySelector("title")
        // console.log(title);
        title.innerHTML = this.list.title
    },
    created() {
        window.addEventListener("scroll", this.windowScrollListener)
    },

    methods: {
        // 窗口滚动一定的距离获取元素位置并让其显示
        windowScrollListener() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
            if (scrollTop >= 1080) {
                this.flag = true
            }
            if (scrollTop < 1080) {
                this.flag = false
            }
        },
        //   回到顶部
        back() {
            var sT = document.body.scrollTop || document.documentElement.scrollTop

            document.body.scrollTop = document.documentElement.scrollTop = sT = 0
        },


    },
};
</script>

<style lang="scss" scoped>
.gan1 {
    width: 100%;
    line-height: 50px;
    background-color: rgb(255, 255, 255);
    position: fixed;
    top: 50px;

    h5 {
        width: 130px;
        background: #C04374;
        text-align: center;
        color: white;
        margin-top: 10px;
        font-size: 14px;
    }

}

.biaoti {
    width: 100%;
    background-color: white;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    align-items: center;
}

.back {
    width: 100px;
    height: 100px;
    background: green;
    color: white;
    position: fixed;
    bottom: 95px;
    right: 20px;
    text-align: center;
    line-height: 100px;
}

.qian {
    margin-top: 20px;
}



// 轮播图
.imgs {
    width: 100%;

    :deep(img) {
        width: 100%;
    }
}

.bigwrap {
    width: 100%;
    margin: 0;
    position: relative;

    .banner {
        width: 7.5rem;
        margin: 0 auto;

        .my-swipe .van-swipe-item {
            color: #fff;

            img {
                width: 100%;
                height: 4.5rem;
            }

        }


    }

    .ni {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        color: white;
        left: 30px;
        line-height: 30px;
        text-align: center;
        background-color: rgba(77, 77, 77, 0.573);
    }

    .hao {
        position: absolute;
        top: 10px;
        color: white;
        right: 30px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        background-color: rgba(77, 77, 77, 0.499);
    }

    .ren {
        width: 90%;
        margin: 0 auto;

        h3 {
            font-weight: normal;
            font-size: 16px;
        }

        .ko {
            font-size: 14px;
            margin-top: 10px;
            color: rgb(124, 124, 124);
        }

        .ll {
            display: flex;

            p:nth-child(1) {
                margin: 0;
            }

            p {
                margin: 0 10px;
                // line-height: 40px;
                border: 1px solid rgb(232, 91, 245);
                color: rgb(85, 56, 251);
                padding: 2px;
                font-size: 6px;
            }
        }
    }

    .go {
        width: 90%;
        display: flex;
        margin: 0 auto;
        padding: 10px 0;
        justify-content: space-between;
    }

    .gan {
        width: 90%;
        margin: 0 auto;
        line-height: 50px;


        h5 {
            width: 100px;
            background: #C04374;
            text-align: center;
            color: white;
            margin-top: 10px;

        }

    }

    .wen {
        width: 100%;

        h3 {
            width: 90%;
            margin: 0 auto;
        }

        .wen1 {
            width: 90%;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
            }

        }
    }

    .dada {
        p:nth-child(1) {
            margin: 0;
        }

        p {
            border: 1px solid rgb(5, 255, 109);
            color: rgb(0, 170, 255);
            margin: 0 10px;
        }
    }

    .xia {
        margin-top: 10px;
        color: rgb(116, 116, 116);
    }

}
</style>