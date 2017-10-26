<template>
  <div class="scroll-top" v-show="show" @click="scrollTop">
    <img class="scroll" src="../../static/images/scroll-top.png" alt="scroll to top"></img>
  </div>
</template>

<script type="text/ecmascript-6">
  import scrollTop from '@/assets/js/scrollTop'

  export default {
    data() {
      return {
        show: false,
        top: 0,
      }
    },
    watch: {
    },
    created() {
      window.addEventListener('scroll', this.scrollHandler)
    },
    methods: {
      scrollHandler() {
        const top = document.documentElement.scrollTop || document.body.scrollTop
        this.show = top > 300
        this.top = top
      },
      scrollTop() {
        scrollTop(this.top, 2.5)
      },
    },
  }
</script>

<style lang="less">
  .scroll-top {
    position: fixed;
    bottom: 10px;
    right: 20px;
    padding: 5px;
    background: #97dffd;
    border-radius: 50%;
    z-index: 99;
    &:hover {
      cursor: pointer;
    }
  }
</style>
