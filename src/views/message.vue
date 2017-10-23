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
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import blogHeader from '@/components/header'
  import banner from '@/components/banner'

  export default {
    components: {
      blogHeader,
      banner,
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
    }
  }
</style>
