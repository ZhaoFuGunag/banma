<template>
    <div v-if="flag">
        <!-- -->
        <van-swipe class="my-swipe" indicator-color="white" :autoplay="3000">
            <van-swipe-item v-for="item in  imgs" class="xiao">
                <img :src="item.avatar" alt="">
                <h5>{{ item.name }}</h5>
                <div style="display: flex;">

                    <p v-for="item in item.mark">{{ item }}</p>
                </div>
                <h3>{{ item.desc }}</h3>
            </van-swipe-item>
        </van-swipe>
    </div>

</template>

<script>
import { techer } from "../tools/ajax"
export default {
    name: 'WorkspaceJsonRenQi',
    props: ["data1"],
    data() {
        return {
            imgs: [],
            flag: false
        };
    },
    created() {
        techer({
            ids: this.data1
        }).then(res => {
            this.imgs = res.data.list
            console.log(this.imgs);
            this.flag = true
        })
    },
};
</script>

<style lang="scss" scoped>
// .my-swipe .van-swipe-item {
//     color: #fff;
//     font-size: 20px;
//     color: #000;
// }

.xiao {
    width: 100%;
    font-size: 16px;

    img {
        width: 100%;

    }

    h3 {
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        font-weight: normal;
    }
}


// .jiji {
//     width: 100%;
//     display: flex;

//     img {

//         width: 200px;
//     }
// }
</style>