<template>
  <div>
    <blog-header></blog-header>
    <div class="banner">
      <div class="title-container">
        <div class="title">
          <h1>C Blog</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'

  export default {
    components: {
      blogHeader,
    },
  }
</script>

<style lang="less">
  .banner {
    position: relative;
    background: url('../../static/images/banner.jpg') center no-repeat;
    background-size: cover;
    height: 260px;
    .title-container {
      position: relative;
      top: 40px;
      width: 80%;
      padding: 50px;
      margin: 0 auto;
      .title {
        float: left;
        h1 {
          font-size: 40px;
          font-family: sans-serif;
          text-align: left;
          text-shadow: 0 2px #f3f5f7;
          color: rgba(255, 255, 255, 0.8);
        }
        &:after {
          clear: both;
          content: '';
        }
      }
    }
  }
</style>
