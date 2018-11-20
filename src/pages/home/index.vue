<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeBanner :list="bannerList"></HomeBanner>
    <HomeIcons :list="iconsList"></HomeIcons>
    <HomeRecommend title="热门推荐" :list="recommendList"></HomeRecommend>
    <!--<home-weekend title="周末去哪儿" :list="weekendList"></home-weekend>-->
    111
  </div>
</template>

<script>
  import HomeHeader from './components/Header'
  import HomeBanner from './components/Banner'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        lastCity: '',
        bannerList: [],
        iconsList: [],
        recommendList: [],
        weekendList: []
      }
    },
    methods: {
      getDataInfo() {
        this.lastCity = this.city;
        axios.get('/api/index.json?city=' + this.city)
          .then(this.getDataInfoSucc)
      },
      getDataInfoSucc(res) {
        console.log(res, 123)
        const resData = res.data;
        console.log(resData, 'fjla;');
        if (resData.ret && resData.data) {
          const data = resData.data;
          this.bannerList = data.bannerList;
          this.iconsList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted() {
      this.getDataInfo();
    },
    activated(){
      if(this.lastCity == this.city) return;
      this.getDataInfo();
    },
    components: {
      HomeHeader,
      HomeBanner,
      HomeIcons,
      HomeRecommend,
      HomeWeekend,
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    // background: #f5f5f5
</style>
