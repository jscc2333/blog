<template>
  <div class="blog">
    <blog-header></blog-header>
    <banner></banner>
    <div class="main">
      <article-list class="article-list" :tagSelect="getTagSelect"></article-list>
      <div class="side">
        <side-section>
          <div slot="sidecontent">
            <div class="avatar">
              <img src="../../static/images/avatar.jpg" alt="my avatar" class="image">
            </div>
            <div class="desc">
              <h3 class="name">Christopher</h3>
              <p class="text">coder not good at code</p>
            </div>
            <div class="social">
              <ul>
                <li class="type"><img src="../../static/images/social-github.png" alt="github:jscc2333@github.com" title="github:jscc2333@github.com"></li>
                <li class="type"><img src="../../static/images/social-gmail.png" alt="gmail:jscc2333@gmail.com" title="gmail:jscc2333@gmail.com"></li>
                <li class="type"><img src="../../static/images/social-twitter.png" alt="" title="twitter"></li>
                <li class="type"><img src="../../static/images/social-wechat.png" alt="wechat:" title="wechat"></li>
              </ul>
            </div>
          </div>
        </side-section>
        <side-section>
          <div slot="sidecontent">
            <div class="message">
              <h3 class="message-title">留言</h3>
              <div class="message-list">
                <ul>
                  <li class="message-item">
                    <a href="">
                      <div class="message-avatar">
                        <img src="../../static/images/message-avatar.png" alt="message user's default avatar">
                      </div>
                      <div class="message-content">
                        <span class="name">测试</span>
                        <span class="text">测试用留言内容1</span>
                      </div>
                    </a>
                  </li>
                  <li class="message-item">
                    <a href="">
                      <div class="message-avatar">
                        <img src="../../static/images/message-avatar.png" alt="message user's default avatar">
                      </div>
                      <div class="message-content">
                        <span class="title">测试</span>
                        <span class="text">测试用留言内容内容内容内容内容内容内容内容内容内容</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <blog-footer></blog-footer>
        </side-section>
      </div>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'
  import banner from '@/components/banner'
  import articleList from '@/components/articleList'
  import sideSection from '@/components/sideSection'
  import blogFooter from '@/components/footer'

  export default {
    data() {
      return {

      }
    },
    created() {
    },
    computed: {
      getTagSelect() {
        return this.$store.state.tagSelect
      },
    },
    components: {
      blogHeader,
      articleList,
      sideSection,
      blogFooter,
      banner,
    },
  }
</script>

<style lang="less">
  .blog {
    .main {
      position: relative;
      width: 80%;
      margin: 0 auto;
      margin-top: -30px;
      .article-list {
        display: inline-block;
        width: 60%;
        transition: width .5s linear;
        margin-right: 3%;
      }
      .side {
        display: inline-block;
        vertical-align: top;
        padding-top: 50px;
        width: 30%;
        .section {
          .avatar {
            display: inline-block;
            padding: 10px;
            margin-right: 25px;
            vertical-align: middle;
            .image {
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
          }
          .desc {
            display: inline-block;
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
          .social {
            width: 100%;
            text-align: center;
            .type {
              display: inline-block;
              margin-right: 20px;
              &:last-child {
                margin-right: 0;
              }
              img {
                width: 36px;
                border: 1px solid rgba(201, 199, 201, 0.4);
                border-radius: 50%;
              }
            }
          }
          @media(max-width:1280px) {
            .avatar {
              display: none;
            }
          }
          .message {
            margin-top: 30px;
            padding: 10px;
            .message-title {
              padding: 5px 0;
              font-size: 18px;
              font-weight: 700;
              border-bottom: 1px solid rgb(147, 153, 159);
              text-indent: 10px;
            }
            .message-list {
              padding: 10px;
              .message-item {
                position: relative;
                margin-bottom: 10px;
                padding: 5px 0;
                border-bottom: 1px dashed rgba(147, 153, 159, 0.5);
                &:last-child {
                  margin: 0;
                  border: none;
                }
                .message-avatar {
                  display: inline-block;
                  margin-right: 10px;
                }
                .message-content {
                  display: inline-block;
                  vertical-align: top;
                  font-size: 0;
                  .title {
                    display: block;
                    margin-bottom: 6px;
                    font-size: 14px;
                  }
                  .text {
                    display: inline-block;
                    width: 220px;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    @media(max-width: 1280px) {
                      width:150px;
                    }
                  }
                }
              }
            }
          }
        }
      }
      @media (max-width:1000px) {
        .side {
          display: none;
          font-size: 0;
          width: 0;
        }
        .article-list {
          width: 100%;
        }
      }
    }
  }
</style>
