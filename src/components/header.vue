<template>
  <transition name="slide">
    <div class="header" v-show="show">
      <div class="nav-container">
        <nav class="site-navigation">
          <div class="nav-menu">
            <ul class="main-menu">
              <li class="main-item" @click="resetTag()">
                <span class="title">
                  <router-link to="/home">
                    <i class="icon-home"></i>
                    首页
                  </router-link>
                </span>
              </li>
              <li class="main-item" @mouseenter="slideDownSubMenu($event)" @mouseleave="slideUpSubMenu($event)">
                <span class="title">
                  <i class="icon-list"></i>
                  分类
                </span>
                <transition name="slide">
                  <ul class="sub-menu" v-show="slideMenu">
                    <li class="sub-item" v-for="(tag,tagIndex) in tagList" :key="tagIndex" @click="changeTag(tagIndex)">
                      <span class="title">{{getTag(tag)}}</span>
                    </li>
                  </ul>
                </transition>
              </li>
              <li class="main-item">
                <span class="title">
                  <router-link to="/message">
                    <i class="icon-message"></i>
                    留言
                  </router-link>
                </span>
              </li>
              <li class="main-item">
                <span class="title">
                  <router-link to="/about">
                    <i class="icon-about"></i>
                    关于
                  </router-link>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import { convertTag } from '@/assets/js/utils'

  export default {
    data() {
      return {
        tagList: ['all'],
        slideMenu: false,
        show: true,
      }
    },
    created() {
      axios.get('/api/categories')
        .then((res) => {
          res.data.forEach((item) => {
            this.tagList.push(item.category_name)
          })
        }).catch((err) => {
          console.error(err)
        })
      window.addEventListener('scroll', this.scrollHandler)
    },
    computed: {

    },
    methods: {
      getTag(tag) {
        return convertTag(tag)
      },
      resetTag() {
        this.$store.commit('changeTag', { tag: 'all' })
      },
      changeTag(tagIndex) {
        this.$store.commit('changeTag', { tag: this.tagList[tagIndex] })
        if (this.$route.name !== 'Blog') {
          this.$router.push('/home')
        }
      },
      slideDownSubMenu() {
        this.slideMenu = true
      },
      slideUpSubMenu() {
        this.slideMenu = false
      },
      scrollHandler() {
        const top = document.documentElement.scrollTop || document.body.scrollTop
        this.show = top < 300
      },
    },
  }
</script>

<style lang="less">
  @import '../assets/less/font.less';
  .header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
    &.slide-enter,
    &.slide-leave-active {
      opacity: 0;
      transform: translate3d(0, -100%, 0)
    }
    &.slide-enter-active,
    &.slide-leave-active {
      transition: all .3s linear;
    }
    .nav-container {
      width: 80%;
      margin: 0 auto;
      .site-navigation {
        float: left;
      }
      .main-item {
        position: relative;
        display: inline-block;
        margin-right: 15px;
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        .sub-menu {
          position: absolute;
          top: 34px;
          background: rgba(0, 0, 0, 0.4);
          .sub-item {
            color: rgb(255, 255, 255);
            font-size: 12px;
            text-align: left;
            cursor: pointer;
            .title {
              padding: 4px;
            }
          }
          &.slide-enter,
          &.slide-leave-active {
            opacity: 0;
            transform: translate3d(0, -100%, 0)
          }
          &.slide-enter-active,
          &.slide-leave-active {
            transition: all .8s linear;
          }
        }
        a {
          color: #fff;
        }
      }
    }
  }
</style>
