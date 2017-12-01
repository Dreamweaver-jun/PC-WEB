<template>
  <div class="header-wrap">
    <div class="header">
      <div class="wrap clearfix">
        <div class="logo-wrap"><img src="../assets/images/logo.png"> </div>
        <div class="nav-wrap">
          <ul class="clearfix">
            <!--<router-link tag="li" :to="'/home'">
              <a href="javascript:" class="nav-a">首页</a>
              <span></span>
            </router-link>-->
            <router-link tag="li" :to="'/tms'">
              <a href="javascript:" class="nav-a">运立方TMS</a>
              <span></span>
            </router-link>
            <router-link tag="li" :to="'/ypTms'">
              <a href="javascript:" class="nav-a">域普TMS</a>
              <span></span>
            </router-link>
            <router-link tag="li" :to="'/driver'">
              <a href="javascript:" class="nav-a">罗计车宝</a>
              <span></span>
            </router-link>
            <router-link tag="li" :to="'/service'">
              <a href="javascript:" class="nav-a">整车服务</a>
              <span></span>
            </router-link>
            <router-link tag="li" :to="'/about'" class="about-us">
              <a href="javascript:" class="nav-a">关于我们</a>
              <i class="glyphicon glyphicon-menu-down"></i>
              <div class="nav-list" hidden>
                <router-link tag="a" :to="'/about'">公司简介</router-link>
                <router-link tag="a" :to="'/recruit'">诚聘英才</router-link>
                <router-link tag="a" :to="'/contact'">联系我们</router-link>
                <router-link tag="a" :to="'/download'">下载中心</router-link>
                <router-link tag="a" :to="'/news'">新闻中心</router-link>
              </div>
            </router-link>
          </ul>
        </div>
        <span class="l-btn" data-toggle="modal" data-target="#login">登录 / 注册</span>
      </div>
    </div>
    <login></login>
  </div>
</template>


<script>

  import login from '../components/login'

export default {
  name: 'header',
  data (){
    return {

    }
  },
  components : {
    login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/css/global";
  .header {
    position: fixed;
    width: 100%;
    background: #fff;
    /* height: 70px;*/
    top: 0;
    z-index: 9;
    opacity: .9;
    .wrap {
      position: relative;
      height: 100%;
      .logo-wrap {
        float: left;
        margin-top: 24px;
      }
      .nav-wrap {
        float: right;
        height: 100%;
        margin-right: 98px;
        font-size: 14px;
        ul {
          display: flex;
          height: 100%;
          li {
            position: relative;
            height: 100%;
            padding: 0 20px;
            line-height: 70px;
            span {
              position: absolute;
              top: 30px;
              right: -2px;
              width: 2px;
              background: #FF9E6F;
              height: 10px;
            }
            a.nav-a {
              color: #373636;
              &:hover {
                color: $themeColor;
              }
            }
            i {
              color: $themeColor;
              padding: 0 8px;
            }
            .nav-list {
              position: relative;
              height: 160px;
              top: 0;
              left: 0;
              background: #fff;
              a {
                display: block;
                line-height: normal;
                padding: 6px 0;
                &:hover {
                  color: $themeColor;
                }
              }
            }
          }
          li.router-link-active a.nav-a {
            color: $themeColor;
            border-bottom: 4px solid $themeColor;
            padding-bottom: 22px;
          }
          li.about-us:hover .nav-list {
            display: block;
          }
        }
      }
      .l-btn {
        position: absolute;
        right: 0;
        top: 10px;
        font-size: 13px;
      }
    }
  }

</style>
