<template>
  <div class="tool-wrap">
    <div class="apply-box" v-show="isTms">
      <span hidden data-toggle="modal" data-target="#apply">申请试用</span>
    </div>
    <div class="qr-box">
      <div class="qr-wrap">
        <span hidden>微信关注</span>
      </div>
      <div class="qr-list">
        <div class="weChat"></div>
        <p class="title">罗计订阅号</p>
        <p class="text">第一时间了解最新资讯</p>
      </div>
    </div>
    <div class="contact-box">
      <div class="contact-wrap">
        <span hidden>联系方式</span>
      </div>
      <div class="contact-list clearfix">
        <div class="tel item">
          <div class="font">电话</div>
          <div class="dialog dialog-tel">
            <div class="arrow"></div>
            <div class="top">400-890-0856</div>
            <div class="bottom">我们竭诚为您服务</div>
          </div>
        </div>
        <div class="mail item">
          <div class="font">邮箱</div>
          <div class="dialog dialog-mail">
            <div class="arrow"></div>
            <div class="top">cc@eunke.com</div>
            <div class="bottom">我们竭诚为您服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="online-box">
      <div class="online-wrap">
        <span hidden @click="online()">在线咨询</span>
      </div>
    </div>
    <div class="go-top-wrap" v-if="show" @click="goTop()">
        <span hidden>返回顶部</span>
      </div>
  </div>
</template>


<script>

import apply from './apply';

export default {
  name: 'tool',
  props: ['isTms'],
  data () {
    return {
        show : false,
        scroll : ''
    }
  },
  methods : {
    goTop(){
        $('html,body').animate({scrollTop : 0},800);
    },
    isShow(){
        this.scroll = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scroll > 500)
        {
            this.show = true
        }
        else
        {
          this.show = false;
          return false;
        }
    },
    online(){
      let openUrl = 'http://p.qiao.baidu.com/cps/chat?siteId=9883133&userId=22131070';
      let iWidth = 380;
      let iHeight = 480;
      let iTop = (window.screen.availHeight-30-iHeight)/2;
      let iLeft = (window.screen.availWidth-10-iWidth)/2;

      window.open(openUrl,'_blank','width='+iWidth+', height='+iHeight+', top='+iTop+', left='+iLeft);
    }
  },
  mounted() {
    window.addEventListener('scroll', this.isShow)
  },
  components : {
    apply
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.tool-wrap {
  width: 50px;
  position: fixed;
  z-index: 99;
  right: 20px;
  top: 100%;
  margin-top: -280px;
  /* animate */
  @keyframes fade-in
  {
    0% {
      opacity: 0;
      right: -50px;
    }
    40% {
      opacity: 0.5;
      right: 0;
    }
    100% {
      opacity: 1;
      right: 48px;
      display: block;
    }
  }
  @-webkit-keyframes fade-in {
    0% {
      opacity: 0;
      right: -50px;
    }
    40% {
      opacity: 0.5;
      right: 0;
    }
    100% {
      opacity: 1;
      right: 48px;
      display: block;
    }
  }
  /* animate */


  div.apply-box {
    position: relative;
    height: 50px;
    cursor: pointer;
    padding: 6px;
    text-align: center;
    box-shadow: 0 0 12px 0 #CCCFD3;
    margin-bottom: 4px;
    z-index: 80;
    background: #FC864F;
    span {
      font-size: 14px;
      display: block;
      color: #fff;
    }
  }
  div.qr-box {
    position: relative;
    div.qr-wrap {
      position: relative;
      height: 50px;
      cursor: pointer;
      padding: 6px;
      text-align: center;
      margin-bottom: 4px;
      background: #fff url("../assets/images/qr.png") center center no-repeat;
      box-shadow: 0 0 12px 0 #CCCFD3;
      z-index: 80;
    }
    div.qr-list {
      position: absolute;
      width: 170px;
      height: 208px;
      padding: 10px;
      right: -400px;
      top: 0;
      background: #fff;
      opacity: 0;
      cursor: default;
      box-shadow: 0 0 12px 0 #CCCFD3;
      z-index: 70;
      border-radius: 10px;
      .weChat {
        width: 148px;
        height: 148px;
        background: url("../assets/images/qr-weChat.png") no-repeat;
      }
      p.title {
        font-size: 14px;
        color: #FB864F;
        text-align: center;
      }
      p.text {
        font-size: 12px;
        color: #9C9A9A;
        text-align: center;
      }
    }
    &:hover {
      .qr-wrap {
        background: #FC864F;
        transition: background-color 0.6s linear;
        span {
          font-size: 14px;
          display: block;
          color: #fff;
        }
      }
      .qr-list {
        animation: fade-in;
        animation-duration: 1s;
        animation-timing-function: linear;
        -webkit-animation: fade-in 1s linear;
        opacity: 1;
        right: 48px;
      }
    }
  }
  div.contact-box {
    position: relative;
    div.contact-wrap {
      position: relative;
      height: 50px;
      cursor: pointer;
      padding: 6px;
      text-align: center;
      background: #fff url("../assets/images/contact-ico.png") center center no-repeat;
      box-shadow: 0 0 12px 0 #CCCFD3;
      margin-bottom: 4px;
      z-index: 80;
    }
    div.contact-list {
      position: absolute;
      padding: 14px 20px;
      right: -400px;
      top: -30px;
      width: 186px;
      height: 110px;
      background: #fff;
      opacity: 0;
      cursor: default;
      box-shadow: 0 0 12px 0 #CCCFD3;
      z-index: 70;
      border-radius: 10px;
      .item {
        position: relative;
        float: left;
        width: 62px;
        height: 62px;
        cursor: pointer;
        text-align: center;
        padding-top: 74px;
        color: #9C9A9A;
        margin-left: 21px;
        .dialog {
          display: none;
          position: absolute;
          top: -82px;
          text-align: center;
          padding: 8px;
          width: 142px;
          height: 58px;
          background: #fff;
          box-shadow: 0 0 12px 0 #CCCFD3;
          .arrow:after {
            content: '';
            position: absolute;
            bottom: -8px;
            width: 0;
            height: 0;
            border-left: 8px solid transparent;
            border-right: 8px solid transparent;
            border-top: 8px solid #fff;
          }
          .top {
            font-size: 16px;
            color: #F55143;
          }
        }
        .dialog-tel {
          left: -20px;
          .arrow:after {
            left: 42px;
          }
        }
        .dialog-mail {
          left: -70px;
          .arrow:after {
            left: 90px;
          }
        }
        &:hover {
          div.font {
            color: #FF5902;
          }
        }
      }
      .tel {
        margin-left: 0;
        background: url("../assets/images/tel.png") no-repeat;
        &:hover {
          background: url("../assets/images/tel-hover.png") no-repeat;
          .dialog {
            display: block;
          }
        }
      }
      .mail {
        background: url("../assets/images/email.png") no-repeat;
        &:hover {
          background: url("../assets/images/email-hover.png") no-repeat;
          .dialog {
            display: block;
          }
        }
      }
      .qq {
        background: url("../assets/images/qq.png") no-repeat;
        &:hover {
          background: url("../assets/images/qq-hover.png") no-repeat;
        }
      }
    }
    &:hover {
      .contact-wrap {
        background: #FC864F;
        transition: background-color 0.6s linear;
        span {
          font-size: 14px;
          display: block;
          color: #fff;
        }
      }
      .contact-list {
        animation: fade-in;
        animation-duration: 1s;
        animation-timing-function: linear;
        -webkit-animation: fade-in 1s linear;
        opacity: 1;
        right: 48px;
      }
    }
  }
  div.online-box {
    position: relative;
    div.online-wrap {
      position: relative;
      height: 50px;
      cursor: pointer;
      padding: 6px;
      text-align: center;
      margin-bottom: 4px;
      background: #fff url("../assets/images/server.png") center center no-repeat;
      box-shadow: 0 0 12px 0 #CCCFD3;
      z-index: 80;
    }
    &:hover {
      .online-wrap {
        background: #FC864F;
        transition: background-color 0.6s linear;
        span {
          font-size: 14px;
          display: block;
          color: #fff;
        }
      }
    }
  }
  div.go-top-wrap {
    position: relative;
    height: 50px;
    padding: 6px;
    text-align: center;
    cursor: pointer;
    background: #fff url("../assets/images/go-top.png") center center no-repeat;
    box-shadow: 0 0 12px 0 #CCCFD3;
    z-index: 80;
    &:hover {
      background: #FC864F;
      transition: background-color 0.6s linear;
    }
    &:hover span {
      font-size: 14px;
      display: block;
      color: #fff;
    }
  }

}

</style>
