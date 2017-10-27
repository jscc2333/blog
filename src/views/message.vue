<template>
  <div class="message">
    <blog-header></blog-header>
    <banner></banner>
    <div class="message-container">
      <div class="message-area">
        <h2 class="title">留言区</h2>
        <div class="input">
          <textarea class="commet" name="message" placeholder="leave a message"></textarea>
          <input type="text" placeholder="write down your name" class="information name">
          <input type="email" placeholder="write down your email" class="information email">
        </div>
        <div class="submit">
          <span class="button">发表留言</span>
        </div>
      </div>
      <div class="message-list">
        <ul>
          <li class="message-item">
            <div class="message-avatar">
              <img src="../../static/images/message-avatar.png" alt="">
            </div>
            <div class="message-content">
              <span class="name">cc</span>
              <span class="time">2017-10-23 11:11</span>
              <p class="message">留言内容内容</p>
            </div>
          </li>
          <li class="message-item">
            <div class="message-avatar">
              <img src="../../static/images/message-avatar.png" alt="">
            </div>
            <div class="message-content">
              <span class="name">cc</span>
              <span class="time">2017-10-23 11:11</span>
              <p class="message">留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容留言内容内容</p>
            </div>
          </li>
        </ul>
        <div class="message-page">
          <span class="pre">
            <a href="">上一页</a>
          </span>
          <span class="next">
            <a href="">下一页</a>
          </span>
        </div>
      </div>
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
  .message {
    .message-container {
      position: relative;
      width: 70%;
      margin: 50px auto 0;
      .message-area {
        padding: 10px 0;
        margin: 0 10px;
        border-bottom: 1px solid rgb(147, 153, 159);
        .title {
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: 700;
        }
        .input {
          font-size: 16px;
          font-family: '黑体';
          .commet {
            margin-bottom: 10px;
            width: 100%;
            height: 200px;
            box-sizing: border-box;
          }
          .information {
            width: 45%;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            &.name {
              float: left;
            }
            &.email {
              float: right;
            }
          }
          &:after {
            display: block;
            content: '';
            clear: both;
          }
        }
        .submit {
          margin-top: 20px;
          font-size: 16px;
          color: #fff;
          .button {
            padding: 5px;
            float: right;
            border-radius: 10px;
            background: rgb(66, 194, 244);
          }
          &:after {
            display: block;
            content: '';
            clear: both;
          }
        }
      }
      .message-list {
        padding: 10px;
        margin-top: 20px;
        .message-item {
          position: relative;
          padding: 10px 0;
          border-bottom: 1px dashed rgb(147, 153, 159);
          &:last-child {
            border: none;
          }
          .message-avatar,
          .message-content {
            display: inline-block;
            vertical-align: top;
          }
          .message-avatar {
            width: 10%;
            text-align: center;
          }
          .message-content {
            width: 89%;
            .name {
              display: inline-block;
              font-size: 18px;
              margin-bottom: 5px;
            }
            .time {
              position: absolute;
              right: 0;
              top: 10px;
              font-size: 12px;
            }
            .message {
              line-height: 18px;
              white-space: break-word;
              font-size: 14px;
              color: rgb(147, 153, 159);
            }
          }
        }
        .message-page {
          margin-top: 10px;
          position: relative;
          .pre,
          .next {
            position: absolute;
            a {
              display: inline-block;
              padding: 5px;
              color: #000;
              border-radius: 3px;
            }
          }
          .pre {
            left: 15px;
          }
          .next {
            right: 15px;
          }
        }
      }
    }
  }
</style>
