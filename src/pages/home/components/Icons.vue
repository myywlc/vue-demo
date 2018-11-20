<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="hasIcons">
      <swiper-slide v-for="(page, i) in iconPages" :key="i">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <div class="icon-desc">{{item.desc}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
        }
      }
    },
    computed: {
      hasIcons() {
        return this.list.length;
      },
      iconPages() {
        let pages = [];
        this.list.forEach((item, index) => {
          let page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .icons
    & >>> .swiper-container
      padding-bottom: .36rem
    & >>> .swiper-pagination-bullet
      width: 20px
      height: 3px
      border-radius: 0

  .icons
    margin-top .1rem
    overflow hidden
    height 0
    padding-bottom 50%
    background: #fff
    .icon
      position: relative
      height 0
      overflow hidden
      float: left
      width: 25%
      padding-bottom 25%
      // background red
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        // background #25a4bb
        box-sizing border-box
        padding .1rem
        img
          margin 0 auto
          display block
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        text-align: center
        ellipsis()
</style>


