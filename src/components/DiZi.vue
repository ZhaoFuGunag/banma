<template>
    <div>
        {{ list }}
    </div>
</template>

<script>
import { dingzhishi } from '@/tools/ajax';
export default {
    name: 'WorkspaceJsonDiZi',
    components: {
        dingzhishi
    },
    props: ["list"],
    data() {
        return {

        };
    },
    created() {
        dingzhishi({

        })
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>
</style>