<template>
  <div class="footer-wrap">
    <div class="wrap clearfix">
      <div class="clearfix">
        <div class="footer-item">
          <a class="title pos"><div class="service-icon"></div> <span class="font">服务热线</span></a>
          <a class="spacing">400-890-0856</a>
          <a class="title pos"><div class="mail-icon"></div> <span class="font">服务邮箱</span></a>
          <a class="spacing">cc@eunke.com</a>
        </div>
        <div class="footer-item">
          <router-link tag="a" class="title" :to="'/about'">公司简介</router-link>
          <router-link tag="a" :to="'/about'">关于我们</router-link>
          <router-link tag="a" :to="'/contact'">联系我们</router-link>
          <router-link tag="a" :to="'/recruit'">加入我们</router-link>
        </div>
        <div class="footer-item">
          <a class="title">产品应用</a>
          <router-link tag="a" :to="'/driver'">罗计车宝</router-link>
          <router-link tag="a" :to="'/tms'">运立方TMS</router-link>
          <router-link tag="a" :to="'/ypTms'">域普TMS</router-link>
        </div>
        <div class="footer-item">
          <a class="title">商务合作</a>
          <a>电子邮箱：bd@eunke.com</a>
        </div>
        <!--<div class="footer-item">
          <a class="title">下载APP</a>
          <div><img src="../assets/images/download.png"></div>
        </div>-->
        <div class="footer-item">
          <a class="title">关注我们</a>
          <div><img src="../assets/images/weChat.png"></div>
        </div>
      </div>
      <div class="other-info">
        <p class="com-info text-center">
          <router-link tag="a" :to="'/download'">罗计车宝下载</router-link> | <router-link tag="a" :to="'/contact'">商务合作</router-link> | <router-link tag="a" :to="'/recruit'">诚征英才</router-link> | Copyright © 北京运科网络科技有限公司 京ICP证 161112 号 京公网安备 11010502030460 号
        </p>
        <p class="text-center com-info">友情链接：<a href="http://www.yiqu.in/" target="_blank">大理二手车交易信息</a>   <a href="http://www.hx2car.com/" target="_blank">华夏二手车网</a>   <a href="http://www.hm5656.com/" target="_blank">航空物流</a></p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../assets/css/global";
  .footer-wrap {
    padding: 54px 0;
    background: #E5E5E5;
    .footer-item {
      float: left;
      margin-left: 82px;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        float: right;
        margin-left: 0;
      }
      a {
        display: block;
        padding: 5px 0;
      }
      a.title {
        color: $titColor;
        font-size: 14px;
      }
      span.font {
        padding-left: 40px;
      }
      .pos {
        position: relative;
        .service-icon {
          position: absolute;
          top: -4px;
          left: 0;
          width: 36px;
          height: 36px;
          background: url("../assets/images/service.png") no-repeat;
        }
        .mail-icon {
          position: absolute;
          top: -4px;
          left: 0;
          width: 36px;
          height: 36px;
          background: url("../assets/images/mail.png") no-repeat;
        }
      }
      .spacing {
        text-align: center;
        letter-spacing: 1px;
      }
    }
    .other-info {
      padding-top: 36px;
      .com-info {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
        a{
          padding: 0 2px;
        }
      }
    }
  }

</style>
