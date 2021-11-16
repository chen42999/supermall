<template>
  <div id="home">
    <nav-bar class="home-nav"><template v-slot:center>购物街</template></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
import RecommendView from "@/views/home/childComps/RecommendView";

import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    HomeSwiper,
    NavBar,
    RecommendView
  },
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res)
      this.banners = res.data.banner
      this.recommends = res.data.recommend
    })
  }
}
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
  }
</style>
