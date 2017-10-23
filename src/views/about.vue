<template>
  <div class="about">
    <blog-header></blog-header>
    <banner></banner>
    <div>
      
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'
  import banner from '@/components/banner'
  import blogFooter from '@/components/footer'

  export default {
    components: {
      blogHeader,
      banner,
      blogFooter,
    },
  }
</script>

<style lang="less">

</style>
