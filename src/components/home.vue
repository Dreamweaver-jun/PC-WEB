<template>
  <div class="home-wrap">
    <div class="page-wrap">
      <page :currentPage="currentPage">
        <section class="animate" ref="section1">
          <div class="slide1-wrap">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" :data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" v-for="(banner, index) in bannerList" :data-slide-to="index + 1"></li>
              </ol>

              <!-- Wrapper for slides -->
              <div class="carousel-inner clearfix" role="listbox">
                <div class="item active">
                  <div class="apply-wrap clearfix">
                    <div class="input">
                      <input type="text" v-model="applyPhone" placeholder="请输入手机号码" maxlength="11">
                    </div>
                    <div class="button" data-toggle="modal" data-target="#apply">申请试用</div>
                  </div>
                  <a href="javascript:">
                    <div class="banner-slide first-banner"></div>
                  </a>
                </div>

                <div v-for="banner in bannerList" class="item">
                  <a :href="banner.href" :title="banner.name">
                    <div class="banner-slide" :style="{background : 'url('+imgHost+banner.images+') center center no-repeat'}"></div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </page>
      <page :currentPage="currentPage">
        <section class="animate move-right">
          <div class="slide2-wrap">
            <p class="slide-tit">
              我们的产品
              <span></span>
            </p>
            <div class="slide2-item">
              <div class="item1-text">
                <div class="ball">
                  <div class="driver-app"></div>
                  <div class="desc">
                    <h4>罗计车宝</h4>
                    <p>货车司机的忠实伴侣</p>
                  </div>
                  <div class="float" hidden>
                    罗计车宝是一款罗计专为货车司机兄弟研发的一站式免费配货服务平台。拥有1670000用户量，每日成单量可达约30万，平台免费帮助货车司机、物流运输、找货配货并寻找一手货源信息。货源真实丰富、每日海量货源实时更新；货主运费结算及时；真实认证、虚假信息可获赔付；还可小额贷款，是货运人忠实伴侣的APP。
                  </div>
                </div>
              </div>
              <div class="item2-text">
                <div class="ball">
                  <div class="tms-app"></div>
                  <div class="desc">
                    <h4>运立方</h4>
                    <p>运立方利用在车货...</p>
                  </div>
                  <div class="float" hidden>
                    运立方：运立方利用在车货匹配、经纪人模式和综合解决方案中积累的经验，同时充分挖掘成单过程中各节点形成的大数据，并对大数据进行分析，辅以相关的智能算法，开发出了罗计智慧物流解决方案。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </page>
      <page :currentPage="currentPage">
        <section class="animate move-left">
          <div class="slide3-wrap">
            <p class="slide-tit">
              我们的价值
              <span></span>
            </p>
            <div class="slide3-item wrap">
              <div class="item">
                <div class="icon-wrap">
                  <img src="../assets/images/free.png">
                </div>
                <p class="title">免费</p>
                <p>免费使用平台系统，永不收费</p>
              </div>
              <div class="item">
                <div class="icon-wrap">
                  <img src="../assets/images/convenient.png">
                </div>
                <p class="title">便捷</p>
                <p>一键下单、一键抢单、一键结算</p>
              </div>
              <div class="item">
                <div class="icon-wrap">
                  <img src="../assets/images/share.png">
                </div>
                <p class="title">共享</p>
                <p>海量货源、大量车源</p>
              </div>
              <div class="item">
                <div class="icon-wrap">
                  <img src="../assets/images/synergy.png">
                </div>
                <p class="title">协同</p>
                <p>协同生态圈，提升服务能力</p>
              </div>
              <div class="item">
                <div class="icon-wrap">
                  <img src="../assets/images/steady.png">
                </div>
                <p class="title">稳健</p>
                <p>实名制认证、线下合同保证金保障司机和货主的合法权益</p>
              </div>
            </div>
          </div>
        </section>
      </page>
      <page :currentPage="currentPage">
        <section class="animate move-left">
          <div class="slide4-wrap">
            <p class="slide-tit">
              合作品牌
              <span></span>
            </p>
            <div class="box-wrap wrap">
              <div class="slide-item">
                <div class="first clearfix">
                  <div class="item"><img src="../assets/images/suning.png"></div>
                  <div class="item"><img src="../assets/images/tianmao.png"></div>
                  <div class="item"><img src="../assets/images/shunfeng.png"></div>
                  <div class="item"><img src="../assets/images/baishi.png"></div>
                </div>
                <div class="second clearfix">
                  <div class="item"><img src="../assets/images/huayu.png"></div>
                  <div class="item"><img src="../assets/images/anneng.png"></div>
                  <div class="item"><img src="../assets/images/baidu.png"></div>
                  <div class="item"><img src="../assets/images/futian.png"></div>
                  <div class="item"><img src="../assets/images/fushikang.png"></div>
                </div>
                <div class="third clearfix">
                  <div class="item"><img src="../assets/images/debang.png"></div>
                  <div class="item"><img src="../assets/images/fengsheng.png"></div>
                  <div class="item"><img src="../assets/images/xinbang.png"></div>
                  <div class="item"><img src="../assets/images/tangwang.png"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </page>
      <page :currentPage="currentPage">
        <section class="animate move-left">
          <div class="slide5-wrap">
            <p class="slide-tit">
              我们的宗旨
              <!--<span></span>-->
            </p>
            <p class="content">诚信 · 服务 · 极致 · 快</p>
            <div class="bottom-wrap">
              <loji-footer></loji-footer>
            </div>
          </div>
        </section>
      </page>
      <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage"
                       :option="controllerOption"></page-controller>
    </div>
    <apply :apply-phone="applyPhone"></apply>
  </div>
</template>


<script>

  import Page from './Page';
  import PageController from './PageController';
  import apply from './apply';

  // 页面进出动画
  function afterEnterAnimate($child) {
    $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right');
  }
  function beforeLeaveAnimate($child) {
    let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right';
    $child.$el.querySelector('.animate').classList.add(moveType);
  }

  export default {
    name: 'home',
    data () {
      return {
        imgHost : 'http://tfs001.eunke.com/v1/tfs/',
        bannerList : [],

        applyPhone : '',
        currentPage: 1,
        options: [{
          // the color of background
          background: 'none',
          // the color of text
          color: '#fff',
          // is content center
          isCenter: true,
          // the function before page show
          afterEnter: afterEnterAnimate,
          // the function after page show
          beforeLeave: beforeLeaveAnimate
        }, {
          background: 'none',
          color: '#fff',
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        }, {
          background: '#86A0BD',
          color: '#fff',
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        }, {
          background: '#fff',
          color: '#fff',
          isCenter: true,
          afterEnter: afterEnterAnimate,
          beforeLeave: beforeLeaveAnimate
        },
          {
            background: 'none',
            color: '#fff',
            isCenter: true,
            afterEnter: afterEnterAnimate,
            beforeLeave: beforeLeaveAnimate
          }],
        controllerOption: {
          arrowsType: false,
          navbar: true,
          highlight: true,
          loop: false
        }
      }
    },
    computed: {
      // 总page数
      pageNum() {
        return this.options.length;
      }
    },
    methods: {
      getBanner(){
        const url = '/cms/banner/list/portals';
        this.$http.get(url).then((response) => {
          this.bannerList = response.data.data;
        });
      },
      changePage(index) {
        // beforeLeave Hook
        let beforeIndex = this.currentPage - 1;
        let leaveFunction = this.options[beforeIndex].beforeLeave;
        typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex]);
        // change page
        this.currentPage = index;
        // afterEnter Hook
        let nextIndex = index - 1;
        let enterFunction = this.options[nextIndex].afterEnter;
        this.$nextTick(function () {
          typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex]);
        })
      }
    },
    components: {
      Page, PageController, apply
    },
    mounted() {
      //获取banner图
      this.$nextTick(() => {
        this.getBanner();

        $('#myCarousel').carousel({
          interval: 3000
        });
      });


      this.$children.forEach((child, index) => {

          // 动态设置各个page内的options
          if (child.option === null) {
            let childOption = this.options[index];
            this.$set(childOption, 'index', index + 1);
            child.option = childOption;
          }


      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../assets/css/global.scss';

  .home-wrap {
    width: 100%;
    height: 100%;
    .slide1-wrap {
      height: 100%;
      .carousel, .carousel-inner, .item, .item img {
        width: 100%;
        height: 100%;
      }
      .carousel .carousel-indicators li {
        width: 86px;
        height: 3px;
        background: #fff;
        border: none;
        border-radius: 0;
        margin-right: 10px;
      }
      .carousel .carousel-indicators li.active {
        background: #FF5902;
      }

      .carousel-inner {
        .item {
          position: absolute;
          width: 100%;
          height: 100%;
          .banner-slide {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .first-banner {
            background: url("../assets/images/slide1.jpg") center center no-repeat;
          }
          .apply-wrap {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -190px;
            margin-top: -23px;
            width: 380px;
            height: 46px;
            border: 2px solid #FF9E6F;
            z-index: 9;
            .input {
              float: left;
              width: 266px;
              height: 100%;
              background: #fff;
              input {
                outline: none;
                padding-left: 8px;
                color: #000;
                font-size: 14px;
                border: none;
                width: 100%;
                height: 100%;
              }
            }
            .button {
              float: left;
              width: 110px;
              height: 100%;
              line-height: 44px;
              font-size: 15px;
              color: #FFFFFF;
              text-align: center;
              background: #FF9E6F;
              cursor: pointer;
            }

          }
        }
      }
    }
    .slide2-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      background: url("../assets/images/slide2-bg.png") center bottom no-repeat;
      .slide-tit {
        position: relative;
        padding-top: 100px;
        font-size: 18px;
        color: #373636;
        text-align: center;
        span {
          position: absolute;
          bottom: -8px;
          width: 32px;
          left: 50%;
          margin-left: -16px;
          height: 3px;
          background: #F5A623;
        }
      }
      .slide2-item {
        position: absolute;
        bottom: 0;
        width: 440px;
        left: 50%;
        margin-left: -220px;
        height: 462px;
        .item1-text {
          position: absolute;
          width: 39px;
          height: 203px;
          background: url("../assets/images/road.png") no-repeat;
          bottom: 0;
          left: 0;
          .ball {
            position: absolute;
            top: -250px;
            left: -130px;
            width: 300px;
            height: 300px;
            overflow: hidden;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #eee;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .005), 0 0 8px rgba(238, 238, 238, .6);
            cursor: pointer;
            .driver-app {
              width: 87px;
              height: 176px;
              top: 25px;
              left: 104px;
              position: absolute;
              background: url("../assets/images/driver-app.png") no-repeat;
            }
            .desc {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 80px;
              background: #FF9E6F;
              text-align: center;
            }
            .float {
              width: 300px;
              height: 300px;
              background: #86A0BD;
              font-size: 14px;
              padding: 50px;
              line-height: 17px;
              letter-spacing: 1px;
              text-align: left;
              opacity: .9;
              text-indent: 2em;
              z-index: 5;
            }
            @keyframes fade-in {
              0% {
                opacity: 0;
              }
              /*初始状态 透明度为0*/
              40% {
                opacity: 0;
              }
              /*过渡状态 透明度为0*/
              100% {
                opacity: 0.9;
              }
              /*结束状态 透明度为1*/
            }
            @-webkit-keyframes fade-in { /*针对webkit内核*/
              0% {
                opacity: 0;
              }
              40% {
                opacity: 0;
              }
              100% {
                opacity: 0.9;
              }
            }
            &:hover .float {
              animation: fade-in; /*动画名称*/
              animation-duration: 1s; /*动画持续时间*/
              -webkit-animation: fade-in 1s; /*针对webkit内核*/
              display: block;
            }
          }
        }
        .item2-text {
          position: absolute;
          width: 39px;
          height: 203px;
          background: url("../assets/images/road.png") no-repeat;
          bottom: 0;
          right: 0;
          .ball {
            position: absolute;
            top: -220px;
            right: -90px;
            width: 230px;
            height: 230px;
            overflow: hidden;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #eee;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, .005), 0 0 8px rgba(238, 238, 238, .6);
            cursor: pointer;
            .tms-app {
              width: 193px;
              height: 118px;
              top: 40px;
              left: 26px;
              position: absolute;
              background: url("../assets/images/tms-app.png") no-repeat;
            }
            .desc {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 70px;
              background: #FF9E6F;
              text-align: center;
            }
            .float {
              width: 230px;
              height: 230px;
              background: #86A0BD;
              font-size: 14px;
              padding: 32px;
              line-height: 17px;
              letter-spacing: 1px;
              text-align: left;
              opacity: .9;
              text-indent: 2em;
              z-index: 5;
            }
            @keyframes fade-in {
              0% {
                opacity: 0;
              }
              /*初始状态 透明度为0*/
              40% {
                opacity: 0;
              }
              /*过渡状态 透明度为0*/
              100% {
                opacity: 0.9;
              }
              /*结束状态 透明度为1*/
            }
            @-webkit-keyframes fade-in { /*针对webkit内核*/
              0% {
                opacity: 0;
              }
              40% {
                opacity: 0;
              }
              100% {
                opacity: 0.9;
              }
            }
            &:hover .float {
              animation: fade-in; /*动画名称*/
              animation-duration: 1s; /*动画持续时间*/
              -webkit-animation: fade-in 1s; /*针对webkit内核*/
              display: block;
            }
          }
        }
      }
    }
    .slide3-wrap {
      position: relative;
      height: 100%;
      .slide-tit {
        position: relative;
        padding-top: 170px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        span {
          position: absolute;
          bottom: -8px;
          width: 32px;
          left: 50%;
          margin-left: -16px;
          height: 3px;
          background: #fff;
        }
      }
      .slide3-item {
        height: calc(100% - 195px);
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        .item {
          width: 158px;
          height: 203px;
          padding: 0 10px;
          .icon-wrap {
            width: 94px;
            height: 94px;
            margin: 10px auto;
          }
          p {
            text-align: center;
          }
          p.title {
            font-size: 20px;
            color: #FFFFFF;
            margin-bottom: 10px;
          }
        }
      }
    }
    .slide4-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      .slide-tit {
        position: relative;
        padding-top: 100px;
        font-size: 18px;
        color: #373636;
        text-align: center;
        span {
          position: absolute;
          bottom: -8px;
          width: 32px;
          left: 50%;
          margin-left: -16px;
          height: 3px;
          background: #F5A623;
        }
      }
      .box-wrap {
        display: flex;
        align-items: center;
        height: calc(100% - 125px);
        .slide-item {
          position: relative;
          width: 820px;
          height: 440px;
          margin: 0 auto;
          .first {
            padding: 0 110px;
          }
          .second {
            position: absolute;
            top: 133px;
            left: 33px;
          }
          .third {
            position: absolute;
            top: 266px;
            padding: 0 110px;
          }
          div.item {
            position: relative;
            float: left;
            width: 150px;
            height: 173px;
            cursor: pointer;
            &:hover {
              z-index: 1;
            }
            &:hover > img {
              transform: scale(1.5, 1.5);
              transition: .3s transform;
            }
            img {
              width: 100%;
              height: 100%;
              transition: .1s transform;
              transform: translateZ(0);
            }
          }
        }
      }
    }
    .slide5-wrap {
      position: relative;
      width: 100%;
      height: 100%;
      background: url("../assets/images/slide5-bg.jpg") center center no-repeat;
      background-size: cover;
      .slide-tit {
        position: relative;
        padding-top: 100px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        span {
          position: absolute;
          bottom: -8px;
          width: 32px;
          left: 50%;
          margin-left: -16px;
          height: 3px;
          background: #fff;
        }
      }
      .content {
        margin-top: 50px;
        text-align: center;
        font-size: 24px;
      }
      .bottom-wrap {
        width: 100%;
        position: absolute;
        bottom: 0;
        color: #9C9A9A;
      }
    }
  }

  /* 下面的是与fullPage无关的样式 */
  .animate {
    height: 100%;
    transition: all 1s ease-out 0s;
  }

  .move-left {
    transform: translateX(-1000%);
  }

  .move-right {
    transform: translateX(1000%);
  }

  .person-img {
    width: 223px;
    height: 185px;
    float: left;
    background-color: #fff;
    box-shadow: 3px 3px 10px #999;
  }

  .person-img img {
    height: 100%;
    width: 100%;
  }

  .person-basic-info {
    overflow: hidden;
    float: right;
    margin-left: 40px;
  }

  .info-line {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .text-center {
    text-align: center;
  }

  .text-bold {
    font-weight: bold;
  }

  .demo-intro {
    text-indent: 2em;
  }

  .avatar {
    margin: 10px auto;
    display: block;
    box-shadow: 1px 1px 5px #666;
  }

  .author-info {
    text-align: center;
  }
</style>
