<template>
  <div class="article-list">
    <article class="article" v-for="(article,articleIndex) in articleList" :key="articleIndex">
      <h2 class="title">{{article.blog_title}}</h2>
      <div class="label">
        <a href="">{{getTag(article.blog_category)}}</a>
      </div>
      <div class="content">{{article.blog_content}}</div>
      <p class="more">
        <a href="">阅读全文</a>
      </p>
      <p class="date">发布于 {{article.blog_time}}</p>
    </article>
    <div class="page">
      <span class="pre">
        <a href="">上一页</a>
      </span>
      <span class="next">
        <a href="">下一页</a>
      </span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import { convertTag } from '@/assets/js/utils'

  export default {
    data() {
      return {
        articleList: [],
        page: 1,
        pageSize: 10,
        count: 0,
      }
    },
    props: {
      tagSelect: String,
    },
    watch: {
      tagSelect() {
        this.getTagList()
      },
    },
    computed: {

    },
    components: {
    },
    created() {
      this.getTagList()
    },
    methods: {
      getTag(tag) {
        return convertTag(tag)
      },
      getTagList() {
        axios.post('/api/blogs', { category: this.tagSelect })
          .then((res) => {
            this.articleList = res.data
          }).catch((err) => {
            console.log(err)
          })
      },
    },
  }
</script>

<style lang="less">
  .article-list {
    width: 100%;
    background: rgb(255, 255, 255);
    border-radius: 10px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 16px 24px 1px rgba(0, 0, 0, .14), 0 6px 50px 1px rgba(0, 0, 0, .12), 0 6px 10px -5px rgba(0, 0, 0, .2);
    .article {
      position: relative;
      padding: 15px;
      border-bottom: 1px solid #f3f5f7;
      .title {
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-weight: 700;
      }
      .label {
        position: relative;
        display: inline-block;
        left: -50px;
        top: -30px;
        padding: 10px 10px 10px 30px;
        background: #97dffd;
        border-radius: 0 8px 8px 0;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
        a {
          color: white;
          &:after {
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            border-top: 0 solid transparent;
            border-right-width: 1em;
            border-right-color: #47456d;
            border-right-style: solid;
            border-bottom: 1em solid transparent;
            border-left: 0 solid transparent;
            width: 0;
            height: 0;
          }
        }
      }
      .content {}
      .more {
        margin-top: 20px;
        text-align: center;
        a {
          display: inline-block;
          padding: 5px;
          border-radius: 5px;
          color: white;
          background: #97dffd;
        }
      }
      .date {
        text-align: right;
        font-size: 12px;
      }
    }
    .page {
      padding: 15px;
      position: relative;
      .pre,
      .next {
        position: absolute;
        a {
          display: inline-block;
          padding: 5px;
          border-radius: 3px;
          color: white;
          background: #97dffd;
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
</style>
