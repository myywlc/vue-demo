<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="hasBanner">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
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
          autoplay: 5000,
          loop: true,
        }
      }
    },
    computed: {
      hasBanner() {
        return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../../assets/styles/varibles.styl'
  .wrapper >>> .swiper-pagination-bullet-active
    background: white
  .wrapper
    overflow: hidden
    width 100%
    height: 0 //相对父级的高度
    padding-bottom: 31.25%
    background $bgColor
    .swiper-img
      width: 100%
</style>


