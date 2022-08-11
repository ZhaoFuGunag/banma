<template>
    <div v-for="item in list" :key="item.id" v-if="new2.data.ids" class="big">
        <img :src="item.img" alt="">
        <h3>{{ item.title }}</h3>
        <p class="title8">{{ item.subtitle }}</p>
        <div class="nio">
            <p class="ge" v-for="item in item.mark">{{ item.name }}</p>
        </div>
        <p class="money">{{ '￥' + item.price + '/起' + item.unit }}</p>
    </div>
    <div class="imgs" v-else>
        <div class="img">
            <router-link :to="'/detal?id=' + new2.data[0].url">
                <img :src="new2.data[0].img.url" alt="">
            </router-link>

        </div>
    </div>
</template>

<script>
import { getHost } from '../tools/ajax'

export default {
    name: '斑马旅游New',
    props: ['new2'],
    data() {
        return {
            list: [],
            ids: []
        };
    },
    created() {
        // console.log(this.new2);
        getHost({
            ids: this.new2.data.ids
        }).then(res => {
            // console.log(res);
            this.list = res.data.list
        })
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.big {
    width: 90%;
    margin: 0 auto;

    img {
        width: 100%;
    }

    h3 {
        overflow: hidden; //超出隐藏
        white-space: nowrap; //设置文字不换行
        text-overflow: ellipsis; //超出显示...
    }

    .title8 {
        overflow: hidden; //超出隐藏
        white-space: nowrap; //设置文字不换行
        text-overflow: ellipsis; //超出显示...
    }

    .money {
        color: red;
    }

    .nio {
        display: flex;

        .ge:nth-child(1) {
            margin: 0px;
        }
    }

    .ge {
        border: 1px solid red;
        width: 100px;
        text-align: center;
        margin: 0px 5px;

    }
}

.imgs {
    width: 100%;
    margin-top: .3rem;
    text-align: center;

    .img {
        width: 95%;
        margin: 0 auto;

        img {
            width: 95%;
        }
    }
}
</style>