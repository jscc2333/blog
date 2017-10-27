<template>
  <div class="about">
    <blog-header></blog-header>
    <banner></banner>
    <div>

    </div>
    <blog-footer></blog-footer>
    <scroll-top></scroll-top>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'
  import banner from '@/components/banner'
  import blogFooter from '@/components/footer'
  import scrollTop from '@/components/scrollTop'

  export default {
    components: {
      blogHeader,
      banner,
      blogFooter,
      scrollTop,
    },
  }
</script>

<style lang="less">

</style>
