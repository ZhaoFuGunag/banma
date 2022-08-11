<!-- <template>
    <div class="big">
        <div class="jiu">
            <div class="tou">
                {{ title.subtitle }}
            </div>
            <div class="time">
                {{ title.update_time }}
            </div>
            <div class="pic">
                <img :src="title.head_pic" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { fou } from "../tools/ajax"
export default {
    name: '斑马旅游Fode',

    data() {
        return {
            title: '',

        };
    },
    created() {
        fou({
            id: this.$route.query.id
        }).then(res => {
            console.log(res);
            this.title = res.data.share_url


        })
    },
    mounted() {

    },

    methods: {
        tiao() {
            location.href = title
        }
    },
};
</script>

<style lang="scss" scoped>
.big {
    width: 100%;
    margin: 0;

    .jiu {
        width: 90%;
        margin: 0 auto;
    }

    .tou {
        width: 100%;
        font-weight: normal;
        font-size: 20px;
        margin-top: 20px;
    }

    .time {
        font-size: 18px;
        color: rgb(144, 144, 144);
        margin-top: 5px;
    }

    .pic {
        width: 100%;
        margin-top: 20px;

        img {
            width: 100%;
        }
    }
}
</style> -->