<template>
  <div class="blog">
    <blog-header></blog-header>
    <div class="banner">
      <div class="title-container">
        <div class="title">
          <h1>C Blog</h1>
        </div>
      </div>
    </div>
    <div class="main">
      <article-list class="article-list"></article-list>
      <div class="side">
        <side-section>
          <div slot="sidecontent">
            <div class="desc">
              <h3 class="name">Christopher</h3>
              <p class="text">coder not good at code</p>
            </div>
            <div class="avatar">
              <img src="../../static/images/avatar.jpg" alt="my avatar" class="image">
            </div>
            <div class="social">
              <ul>
                <li class="type"><img src="" alt=""></li>
                <li class="type"><img src="" alt=""></li>
                <li class="type"><img src="" alt=""></li>
                <li class="type"><img src="" alt=""></li>
              </ul>
            </div>
          </div>
        </side-section>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'
  import articleList from '@/components/articleList'
  import sideSection from '@/components/sideSection'

  export default {
    components: {
      blogHeader,
      articleList,
      sideSection,
    },
  }
</script>

<style lang="less">
  .blog {
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
    .main {
      position: relative;
      width: 80%;
      margin: 0 auto;
      margin-top: -30px;
      @media (max-width: 800px) {
        .article-list {
          width: 100%;
        }
        .side {
          display: none;
          width: 0;
        }
      }
      .article-list {
        display: inline-block;
        width: 60%;
        transition: width .5s;
        margin-right: 3%;
      }
      .side {
        display: inline-block;
        vertical-align: top;
        padding-top: 50px;
        width: 30%;
        .section {
          .desc {
            margin-bottom: 15px;
            .name {
              height: 30px;
              line-height: 30px;
              font-size: 20px;
              font-weight: 700;
            }
            .text {
              padding-left: 10px;
              font-size: 14px;
              color: rgba(49, 53, 48, 0.5);
            }
          }
          .avatar {
            padding: 10px;
            .image {
              width: 200px;
              height: 200px;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>
