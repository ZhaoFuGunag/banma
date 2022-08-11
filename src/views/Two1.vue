<template>
    <div class="guang">
        <Two :list="two" v-if="flag"></Two>
    </div>
</template>

<script>
import Two from '@/components/Two.vue'
import { product } from '../tools/ajax'
import Detal from './Detal.vue';
export default {
    name: 'WorkspaceJsonTwo',
    components: {
        Two,
        Detal
    },

    data() {
        return {
            two: [],
            flag: false
        };
    },
    created() {
        // console.log();
        var temp = this.$route.query.id.split("/list/detail?id=")[0].split("/")[1]
        // console.log(this.$route);
        // https://m.bmtrip.com/quality/list/detail?id=3057
        // console.log(this.$route.query.id.split("/quality/list/detail?id=")[1]);
        if (temp == 'quality') {
            product({
                product_id: this.$route.query.id.split("/quality/list/detail?id=")[1]
            }).then(res => {
                // console.log(res, 1111111);
                this.two = res.data
                this.flag = true
            })
        }
        else {
            product({
                product_id: this.$route.query.id
            }).then(res => {
                // console.log(res, 1111111);
                this.two = res.data
                this.flag = true
            })
        }


    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
.guang {
    margin: 0;
    font-size: 16px;
}
</style>