<template>

    <van-field style="border-bottom: 1px solid  dimgrey;" v-model="fieldValue" is-link readonly label="地区"
        placeholder="请选择所在地区" @click="show = true" />
    <van-popup v-model:show="show" round position="bottom">
        <div class="big">
            <h2>选择目的地</h2>
            <div class="wrold">
                <span>国内</span>
                <span>国外</span>
            </div>
            <div v-for="(item, index) in list" :key="item.id">
                <h4>{{ item.label }}</h4>
                <ul class="list">
                    <li v-for="(item, index) in item.children" @click="s = item.label"
                        :class="item.label == s ? 'active1' : ''">
                        <span>{{ item.label }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </van-popup>
    <div class="ipt">
        <input type="text" placeholder="请输入你的姓名(非必填)">

    </div>
</template>

<script>
import { didian } from '../tools/ajax.js'

// import { ref } from 'vue';
export default {
    name: '斑马旅游Dizhi',
    data() {
        return {
            list: [],
            s: '',
            show: false,

        };
    },

    mounted() {

    },
    created() {
        didian().then(res => {
            // console.log(res);
            this.list = res.data.list
        })
    },
    methods: {

    },

};

</script>
    
<style lang="scss" scoped>
.ipt {
    height: 50px;
    margin-top: 10px;
    border-bottom: 1px solid rgb(147, 147, 147);
    font-size: 16px;

    input {
        width: 99%;
        height: 44px;
        border: 1px solid rgb(197, 197, 197);
        text-indent: 20px;
        border: 1px solid rgb(255, 255, 255);

    }
}

.active {
    background: pink;
}

.active1 {
    border: 1px solid red;
    color: red;
}

.big {
    z-index: 9999px;
    height: 500px;
    font-size: 16px;

    h2 {
        text-align: center;
    }

    .wrold {
        // display: flex;
        // margin-left: 20px;

        span {
            width: 100px;
            text-align: center;
            margin: 10px;

        }
    }

    h4 {
        margin-left: 15px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        // justify-content: space-around;

        li {
            width: 80px;

            border: 1px solid rgb(148, 147, 147);
            padding: 5px;
            border-radius: 5px;
            margin: 10px;

            span {
                margin: 0 auto;
            }
        }
    }
}
</style>