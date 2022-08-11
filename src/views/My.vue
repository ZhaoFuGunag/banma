<template>
    <div class="big">
        <van-icon class="icon" name="cross" @click="$router.back()" />

        <div class="big-one" v-show="flag">
            <div class="phone">
                <h3>手机号登陆</h3>
                <p>未注册手机验证后即完成注册</p>
            </div>
            <div class="ji">
                <p>手机号</p>
                <input type="text" placeholder="请输入手机号" v-model="txt">
            </div>
            <div class="ma">
                <button @click="phone1" :class="txt.length == 11 ? 'active' : ''"> 获取验证码</button>
            </div>
            <div class="wrap">
                <div> 账号密码登录</div>
            </div>
        </div>

        <!-- 验证码 -->
        <div class="haha" v-show="!flag">
            <span>请输入验证码</span>
            <div class="yanzheng">
                <span>已发送验证码至</span>
                <span>{{ this.txt }}</span>
            </div>

            <van-password-input :value="value" :mask="false" :length="4" :gutter="10" :focused="showKeyboard"
                @focus="showKeyboard = true" />
            <div>
                <span style="font-size: 14px; border-bottom: 1px solid black;" @click="phone1">重新发送</span>
            </div>
            <!-- 数字键盘 -->
            <van-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
            <button @click="hao">注册</button>
        </div>


    </div>


    <van-tabbar v-model="active1">
        <van-tabbar-item icon="home-o">
            <router-link to="/">首页</router-link>
        </van-tabbar-item>
        <!-- <van-icon name= /> -->
        <van-tabbar-item icon="location-o">
            <router-link to="/mudi">目的地</router-link>
        </van-tabbar-item>

        <van-tabbar-item icon="">
            <div class="ding">
                <router-link to="/order">
                    <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjYgKDY3NDkxKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY25fY3VzdG9tdG91cjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMUQ0OUEiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0UyQkY3RCIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8Y2lyY2xlIGlkPSJwYXRoLTIiIGN4PSIyMiIgY3k9IjIyIiByPSIyMiI+PC9jaXJjbGU+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5paR6ams5peF5ri45pS554mIIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i56eB5Lq66K6i5Yi2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTY1LjAwMDAwMCwgLTIzOTIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJCdG5uYXYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyMzg4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ik5hdmlnYXRpb25iYXIiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJpY25fY3VzdG9tdG91ciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTY1LjAwMDAwMCwgNC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMyIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0yIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICA8dXNlIGlkPSLokpnniYgiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMSkiIHhsaW5rOmhyZWY9IiNwYXRoLTIiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ibG9nb193aGl0ZSIgbWFzaz0idXJsKCNtYXNrLTMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIj48L3JlY3Q+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1LjMzODY2NjcsMTUuMjY0IEMxNS43MTQ3NjgyLDE1LjEwNTkwODggMTYuMDAxNzQ3NiwxNC43ODk2NDU3IDE2LjEyMjY2NjcsMTQuNCBDMTUuNzgwMDg3MywxNC4zODE5NDY3IDE1LjQ5NzAwMjIsMTQuMTI2MzU3NyAxNS40NDQxNjA0LDEzLjc4NzM5NyBDMTUuMzkxMzE4NywxMy40NDg0MzY0IDE1LjU4MzE3MiwxMy4xMTg4MDc2IDE1LjkwNCwxMi45OTczMzMzIEwxNS42MzczMzMzLDEyLjMzNiBDMTUuNTkwMDQ3MiwxMi4yMTc5NDAyIDE1LjQ5NzM2MjcsMTIuMTIzNzkzNiAxNS4zODAwNTc0LDEyLjA3NDY2NTggQzE1LjI2Mjc1MiwxMi4wMjU1Mzc5IDE1LjEzMDYzODUsMTIuMDI1NTM4MiAxNS4wMTMzMzMzLDEyLjA3NDY2NjcgTDEzLjM2LDEyLjc0NjY2NjcgQzEzLjI0MjMxNiwxMi43OTI4MjgxIDEzLjE0ODIyOTQsMTIuODg0NTExNCAxMy4wOTkwMzkxLDEzLjAwMDk2MTkgQzEzLjA0OTg0ODgsMTMuMTE3NDEyNSAxMy4wNDk3MTQ1LDEzLjI0ODc4MjUgMTMuMDk4NjY2NywxMy4zNjUzMzMzIEwxMy41NTczMzMzLDE0LjQ5NiBDMTMuNjkxNDkxNiwxNC44MzQyMzc0IDEzLjk1NDYzNjcsMTUuMTA1MjQ5IDE0LjI4ODc3NjgsMTUuMjQ5MzA5NCBDMTQuNjIyOTE2OCwxNS4zOTMzNjk4IDE1LjAwMDYyNjcsMTUuMzk4NjU0OSAxNS4zMzg2NjY3LDE1LjI2NCBaIiBpZD0i6Lev5b6EIiBmaWxsPSIjRjlFNkJFIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTMwLjg0MjY2NjcsMTguOTM4NjY2NyBDMzAuOTA4Nzc3NSwxOC4zNzIxNTk0IDMwLjk0MjYwOTksMTcuODAyMzUwMSAzMC45NDQsMTcuMjMyIEMzMC45NDUxODIzLDE1LjcyODc5ODEgMzAuNzE2NzcxLDE0LjIzNDIzMjcgMzAuMjY2NjY2NywxMi44IEwyNi41MzMzMzMzLDEzLjcxMiBMMjYuMjQsMTIuNzUyIEwyOS41MDQsMTAuODQyNjY2NyBDMjguNDkzMDEzOCw4Ljc1MDQwMDE4IDI3LjAwNjIyODgsNi45MjM4ODMgMjUuMTYyNjY2Nyw1LjUwOTMzMzMzIEwyMi4zNTIsOC43MDkzMzMzMyBDMjIuMTk3MzMzMyw4LjYwMjY2NjY3IDIyLjA1ODY2NjcsOC41MTczMzMzMyAyMS45MzA2NjY3LDguNDM3MzMzMzMgQzIyLjg3MTI2NzgsNi42ODYyOTYzNiAyMi45MzY0MTksNC41OTU1MzcxMyAyMi4xMDY2NjY3LDIuNzg5MzMzMzMgQzIxLjM4NjY2NjcsMS4yNTg2NjY2NyAyMC4wNzQ2NjY3LDAgMTkuMjU4NjY2NywwIEMxOC40NDI2NjY3LDAgMTcuMDY2NjY2NywxLjI5MDY2NjY3IDE2LjQwNTMzMzMsMi40NjkzMzMzMyBMMTYuMTc2LDIuNDY5MzMzMzMgQzE0Ljg2MDM1OTksMi40NzQzMzQ3MiAxMy41NTExODQ3LDIuNjUzNjczNzkgMTIuMjgyNjY2NywzLjAwMjY2NjY3IEwxMi4yNTA2NjY3LDMuMDAyNjY2NjcgQzExLjk3ODY2NjcsMy4wNzczMzMzMyAxMS43MTczMzMzLDMuMTYyNjY2NjcgMTEuNDQ1MzMzMywzLjI1MzMzMzMzIEw5LjIyNjY2NjY3LDMuOTI1MzMzMzMgTDEyLjM0MTMzMzMsOC4zNjI2NjY2NyBDMTEuMDMzMTI5LDguNzgyNDAzMjEgOS44MzA3Mjk0OSw5LjQ3OTEwMzY4IDguODE2LDEwLjQwNTMzMzMgQzcuOTY3NjU3OSwxMS4xODg2OTI1IDYuOTg5NTI0ODUsMTEuODE4NTIzNSA1LjkyNTMzMzMzLDEyLjI2NjY2NjcgTDIuODk2LDEzLjU0NjY2NjcgQzEuNDkxMjE4NjEsMTQuMTM4MzY3IDAuNzUxMTA1MjE0LDE1LjY4NzMzNSAxLjE3MzMzMzMzLDE3LjE1MiBMMS42NTg2NjY2NywxOC44MjY2NjY3IEMyLjA1NTUxMjg1LDIwLjIzMjQxMjcgMy4zMzkzMTQxMiwyMS4yMDIzNDc0IDQuOCwyMS4yIEM0Ljk0MjExNTYsMjEuMjA3Nzg4MiA1LjA4NDU1MTA3LDIxLjIwNzc4ODIgNS4yMjY2NjY2NywyMS4yIEM1Ljk0OTg4MjUxLDIxLjEwMDQxIDYuNjQzMDM1NzYsMjAuODQ1NzA4IDcuMjU4NjY2NjcsMjAuNDUzMzMzMyBMNy4zMDY2NjY2NywyMC40MjEzMzMzIEM3LjY5NjE3NzA0LDIwLjE1NzQ4OTQgOC4xMjQ0MjY2OCwxOS45NTU5NjAyIDguNTc2LDE5LjgyNCBDOS4xNjU4NTc4MiwxOS43MTExMzQ3IDkuNzc1MTE5NTUsMTkuNzU3MTUxNSAxMC4zNDEzMzMzLDE5Ljk1NzMzMzMgQzExLjEyNjE0NTQsMjAuMjQzODU3MyAxMS45MzcxMjUsMjAuNDUyODU0MiAxMi43NjI2NjY3LDIwLjU4MTMzMzMgTDExLjY2NCwyOS43Mzg2NjY3IEM4LjQzNzEwNzIyLDI4LjU4ODc4MzMgNS43ODQxOTgxNiwyNi4yMjg1MTY3IDQuMjY2NjY2NjcsMjMuMTU3MzMzMyBDMy43MzQ5OTM0OSwyMy4yMTAwMTI5IDMuMjAwOTM1MjIsMjMuMjM0OTM1NiAyLjY2NjY2NjY3LDIzLjIzMiBDNS4yNDQ4NTYyLDI5LjAyMTU2NjggMTEuMjI4NTYyOCwzMi41MjE2Nzc1IDE3LjUzODY3NTYsMzEuOTMxMjM2NCBDMjMuODQ4Nzg4NCwzMS4zNDA3OTUzIDI5LjA3OTI5NDQsMjYuNzkxMzYzOSAzMC41Mzg2NjY3LDIwLjYyNCBMMjgsMTkuOTQxMzMzMyBMMjguMTg2NjY2NywxOS4wMTMzMzMzIEwzMC44NDI2NjY3LDE4LjkzODY2NjcgWiBNMTMuNzE3MzMzMywyNS4wMDggQzE5LjA0NDY5NDYsMjQuODg1NDU2NyAyMy43Nzk2NDM5LDIxLjU4MTcxMDQgMjUuNzMzMzMzMywxNi42MjQgQzI2LjAxNzY4OCwxNy42MTkyNjU3IDI2LjIzMTU1MSwxOC42MzMzMzMgMjYuMzczMzMzMywxOS42NTg2NjY3IEMyMy45MTA3MDUzLDI0LjM1OTAyMTYgMTguOTA1MDY0OSwyNy4xNjIwMTI4IDEzLjYxMDY2NjcsMjYuODA1MzMzMyBMMTMuNTA0LDI2LjgwNTMzMzMgTDEzLjcxNzMzMzMsMjUuMDA4IFogTTguNDQ4LDE4LjMyIEw2LjM2OCwxMy42OCBMNi41MDEzMzMzMywxMy42MjEzMzMzIEM3LjcyMDY5NTA1LDEzLjEwNzY3MTMgOC44NDE0MDI1OCwxMi4zODU3OTg1IDkuODEzMzMzMzMsMTEuNDg4IEMxMC43MTU2NDM4LDEwLjY2MjEyNCAxMS43OTMyNTcsMTAuMDUxMjk0MSAxMi45NjUzMzMzLDkuNzAxMzMzMzMgTDE2Ljg4LDguNTMzMzMzMzMgQzE2Ljk3NTk3NDIsOS4wNTA5NTUyNCAxNi45MTY1OTEsOS41ODU0MDM4NiAxNi43MDkzMzMzLDEwLjA2OTMzMzMgTDE3LjM0NCwxMC40NDI2NjY3IEwxNi43MTQ2NjY3LDEwLjA1MzMzMzMgTDE3Ljk2OCwxMC44MzIgQzE4LjAyMTMzMzMsMTAuNzU3MzMzMyAxOS4xNDY2NjY3LDguODc0NjY2NjcgMTcuNDg4LDUuOTM2IEMxNy4xMTE3NTExLDUuMjMyNzM1MzUgMTcuMDk1ODgxMSw0LjM5MTYyMzc5IDE3LjQ0NTMzMzMsMy42NzQ2NjY2NyBDMTcuODIzNjA4NywyLjc4ODgwNTQ0IDE4LjQ1NDI1OTcsMi4wMzM4NzkxIDE5LjI1ODY2NjcsMS41MDQgQzIwLjE3MzMxMTEsMi4yMjA1MDg5NSAyMC44MTM1ODk5LDMuMjI5ODg5NjcgMjEuMDcyLDQuMzYyNjY2NjcgQzIxLjQ3NzMzMzMsNi4xMDY2NjY2NyAyMC44OTYsNy44NDUzMzMzMyAxOS4zMzg2NjY3LDkuNTIgTDIwLjQwNTMzMzMsMTAuNTIyNjY2NyBDMjAuNjUzNjgxNywxMC4yNTg2OTE1IDIwLjg4Njk0MTEsOS45ODA5MTY5MSAyMS4xMDQsOS42OTA2NjY2NyBDMjEuOTc4NjY2NywxMC4yMjQgMjMuNjEwNjY2NywxMS41MDQgMjQuODgsMTQuMzA5MzMzMyBDMjMuNzQwMDM3MywxOS41MjAzODI1IDE5LjIyODQ2NDIsMjMuMzA2Njg1OCAxMy44OTg2NjY3LDIzLjUyNTMzMzMgTDE0LjI0NTMzMzMsMjAuNjQgQzE1LjI2MDQ5MiwyMC42MzMxNzIyIDE2LjI1NjUwNjUsMjAuMzYzMDM1NSAxNy4xMzYsMTkuODU2IEMxOC41OTY5MTIzLDE4LjkyODkxOTIgMTkuNjE1OTkwNSwxNy40NDU1NzI5IDE5Ljk1NzMzMzMsMTUuNzQ5MzMzMyBMMTguNDk2LDE1LjQ5ODY2NjcgQzE4LjIyODM0LDE2Ljc3MjY4MDIgMTcuNDU5NTQyOSwxNy44ODU1MTQxIDE2LjM2MjY2NjcsMTguNTg2NjY2NyBDMTUuMDAyNjY2NywxOS4zODEzMzMzIDEzLjE2MjY2NjcsMTkuMzY1MzMzMyAxMC44NTg2NjY3LDE4LjU0OTMzMzMgQzEwLjA4NzI0MjcsMTguMjcxMTE0MSA5LjI1ODA0Njg1LDE4LjE5MjIzMDQgOC40NDgsMTguMzIgWiBNMTYuMTc2LDMwLjUyMjY2NjcgQzE1LjEzOTYxMzUsMzAuNTIxNzg3NyAxNC4xMDY4NjM1LDMwLjQwMDA3NzEgMTMuMDk4NjY2NywzMC4xNiBMMTMuMzMzMzMzMywyOC4yNjY2NjY3IEwxMy40OTg2NjY3LDI4LjI2NjY2NjcgQzEzLjg3MiwyOC4yNjY2NjY3IDE0LjI0LDI4LjMwOTMzMzMgMTQuNjA4LDI4LjMwOTMzMzMgQzE5LjM4NTk5MzksMjguMjc3MTAxNSAyMy44NTYzMDA3LDI1Ljk0NjY2NjMgMjYuNjE4NjY2NywyMi4wNDggQzI2LjY3NzMzMzMsMjMuMDcyIDI2LjY5MzMzMzMsMjQuMTgxMzMzMyAyNi42NTYsMjUuMzgxMzMzMyBDMjQuMTQ1NjE1NSwyOC42MjM0NDUyIDIwLjI3NjQwNDcsMzAuNTIxNjIzIDE2LjE3NiwzMC41MjI2NjY3IFoiIGlkPSLlvaLnirYiIGZpbGw9IiNGOUU2QkUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
                        alt="">
                </router-link>
                <div>定制游</div>

            </div>
        </van-tabbar-item>
        <van-tabbar-item icon="search">
            <router-link to="/found">发现</router-link>
        </van-tabbar-item>
        <van-tabbar-item icon="user-o">
            <router-link to="/my">我的</router-link>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import { phone, code } from '../tools/ajax'
import { Toast } from 'vant';
export default {
    name: '斑马旅游My',

    data() {
        return {
            active1: 4,
            flag: true,
            txt: '',
            value: '',
            showKeyboard: true,
        };
    },

    mounted() {

    },
    created() {

    },

    methods: {
        phone1() {
            phone({
                phone: this.txt
            }).then(res => {
                console.log(res);
                this.flag = false
            })
        },
        hao() {

            if (this.value.length == "4") {
                code({
                    phone: this.txt,
                    code: this.value,
                }).then(res => {
                    console.log(res);
                    if (res.code == 0) {
                        Toast('恭喜你成为斑马会员');
                        setTimeout(() => {
                            this.$router.push("/person")
                        }, 1000)
                    } else {
                        Toast('验证码输入错误');
                        console.log(res);
                    }
                })


            }
        }
    },
};
</script>

<style lang="scss" scoped>
.active {
    background-color: #ff0062 !important;
    display: block !important;
}

.big {
    width: 100%;
    margin: 0;
    background: url(../assets/20191125_banner.png);
    height: 137px;
    font-size: 16px;

    .icon {
        font-size: 25px;
        top: 10px;
        margin-left: 30px;

    }

    .phone {
        margin-top: 50px;
        margin-left: 60px;

        h3 {
            font-size: 25px;
            font-weight: normal;
        }

        p {
            margin-top: 5px;
            color: rgb(151, 151, 151);
            font-size: 15px;
        }
    }

    .ji {
        width: 70%;
        margin: 20px auto;
        border-bottom: 1px solid rgb(170, 170, 170);
        padding: 10px 0;

        input {
            color: rgb(142, 142, 142);
            font-size: 0.48rem;
            height: 0.61333rem;
            margin-top: 20px;
            border: 1px solid rgba(255, 255, 255, 0);
            font-size: 18px;


        }
    }

    .ma {
        width: 308px;
        margin: 0 auto;
        // border: 1px solid red;
        height: 50px;

        button {
            width: 308px;
            margin: 0 auto;
            border: 1px solid transparent;
            // border: 1px solid red;
            height: 50px;
            background: #E2A0B9;
            color: white;
        }
    }

    .wrap {
        width: 100%;

        div {
            width: 80px;
            border-bottom: 1px solid #000;
            margin-left: 55px;
            margin-top: 20px;
            color: rgb(195, 195, 195);
            font-size: 13px;
        }


    }

    .haha {
        width: 90%;
        margin: 0 auto;
        top: 150px;

        position: relative;

        button {
            border: 1px solid;
            padding: 5px;
            margin-top: 5px;
            background: #f1f1f1;
        }

        .yanzheng {
            display: flex;
            margin-top: 10px;
        }
    }

    .list {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        li {
            width: 50px;
            height: 50px;
            background: green;
        }
    }
}
</style>