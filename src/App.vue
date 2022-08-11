<template>
  <nav>
    <!-- <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">
        <router-link to="/">首页</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        <router-link to="/mudi">目的地</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        <router-link to="/found">发现</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="setting-o">
        <router-link to="/my">我的</router-link>
      </van-tabbar-item>
    </van-tabbar> -->
  </nav>
  <router-view />
</template>
<script>
// import { getId, getHost, getTwoIndex } from './tools/ajax'
export default {
  created() {
    // return {
    //   data() {

    //   }
    // }
    // getId().then(res => {
    //   console.log(res.data);
    // }),

    //   getHost({
    //     ids: [],

    //   }).then(res => {
    //     console.log(res);
    //   }),
    //   getTwoIndex({
    //     pageId: "614c48c0b8963131246031d4"
    //   }).then(res => {
    //     console.log(res);
    //   })
  },

}
</script>
<style lang="scss">
a {
  color: rgb(169, 169, 169);
}

.ding {
  position: relative;
  text-align: center;
  margin-top: -22px;



}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
}

body,
html {
  scroll-behavior: smooth;
}

html {
  font-size: 13.333vw;
}

nav {
  // padding: 30px;

  a {
    font-weight: bold;
    // color: #818181;

    &.router-link-exact-active {
      color: #06ff8f;
    }
  }
}
</style>
