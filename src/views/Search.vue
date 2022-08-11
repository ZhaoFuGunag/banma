<template>
    <div class="search">
        <div class="ipt">
            <!-- <router-link :to="'mudidetail?keyword=' + this.txt"> -->
            <van-icon name="search" class="ji" @click="change" />
            <!-- </router-link> -->
            <input type="text" placeholder="请输入" v-model.trim="txt" @keyup.enter="change">
            <span @click="$router.back()">取消</span>
        </div>
        <ul class="hort">
            <li>
                <h3>热门搜索</h3>
            </li>
            <ul>
                <li v-for="(item, index) in arr">{{ item }}
                    <button @click="del(index)">删除</button>
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
import { Dialog } from "vant"

export default {


    name: 'WorkspaceJsonSearch',


    data() {
        return {
            txt: '',
            arr: []
        };
    },
    created() {

    },

    mounted() {
        let arr = localStorage.getItem("arr")
        if (arr) {
            arr = JSON.parse(arr)
            this.arr = arr
        } else {
            this.arr = []
        }
    },
    methods: {
        change() {
            this.$router.push("mudidetail?keyword=" + this.txt)
            console.log(1111);
            if (this.txt == '') {
                this.get()
            } else if (this.arr.indexOf(this.txt) > -1) {
                return
            } else {
                this.arr.push(this.txt)
                this.updata()
            }
        },
        del(index) {
            this.arr.splice(index, 1)
            this.updata()
        },
        updata() {
            localStorage.setItem("arr", JSON.stringify(this.arr))
        },
        whatch: {
            arr: {
                deep: true,
                handler() {
                    this.updata()
                }
            }
        },

        get() {
            Dialog.confirm({
                title: '标题',
                message:
                    '输入框不能为空',
            })
                .then(() => {
                })
                .catch(() => {

                });
        },
    },
};
</script>

<style lang="scss" scoped>
.van-popup van-popup--center van-dialog {
    z-index: 2004;
    width: 90%;
    text-align: center;
    font-size: 20px;
}

.search {
    width: 100%;
    font-size: 16px;



    .ipt {
        width: 85%;
        justify-content: space-between;
        height: 50px;
        margin: 0 auto;
        align-items: center;
        position: relative;
        top: 10px;

        .ji {
            position: absolute;
            font-size: 20px;
            margin-top: 6px;
        }

        input {
            width: 80%;
            text-indent: 20px;
            height: 30px;
        }
    }

    .hort {
        width: 90%;
        margin: 0 auto;

        li {
            h3 {
                font-size: 16px;
                font-weight: normal;
                margin-left: 10px;
            }
        }

        ul {
            width: 100%;
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;



            li {
                margin: 10px;
                background: rgb(199, 199, 199);
                color: rgb(156, 156, 156);
                text-align: center;
                line-height: 30px;

                // width: 60px;

            }
        }
    }
}
</style>