<template>
    <div>
        <!-- 轮播图 -->
        <Banner v-if="data.col == undefined && data.style == '1'" :banner="data"></Banner>
        <!-- Six -->
        <Six v-else-if="data.col == '3'" :six="data"></Six>
        <!-- 新品 -->
        <New v-else-if="data.col == '1'" :new2="data"></New>
        <!-- 新品轮播图 -->
        <NewBanner v-else-if="data.col == undefined && data.style == '2'" :newbnner="data"></NewBanner>
        <!--  周末 列表-->
        <SunList v-else-if="data.col == '2'" :list="data.data.ids"></SunList>
    </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Six from '../components/Six.vue'
import New from '../components/New.vue'
import NewBanner from '../components/NewBanner.vue'
import SunList from '../components/SunList.vue'
export default {
    name: 'WorkspaceJsonTransfer',
    props: ['data'],
    components: {
        Banner,
        Six,
        New,
        NewBanner,
        SunList
    },

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
</style>