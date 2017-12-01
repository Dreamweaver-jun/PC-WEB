<template>
  <div>
    <div class="banner-wrap"></div>
    <!--司机端-->
    <div class="driver-wrap driver-wrap1">
      <div class="wrap">
        <div class="driver-item">
          <p class="title">
            产品功能
            <span></span>
          </p>
          <div class="body">
            <div class="left">
              <div class="big-tit">司机端</div>
              <div>
                <div class="group active">
                  <div class="tit">
                    优质货源
                    <div class="icon">
                      <div class="goods"></div>
                    </div>
                  </div>
                  <div class="text">优质货源一键订阅，实时短信提示</div>
                </div>
                <div class="group">
                  <div class="tit">
                    结交车友
                    <div class="icon">
                      <div class="faith"></div>
                    </div>
                  </div>
                  <div class="text">新增卡朋圈，认识身边的司机朋友</div>
                </div>
                <div class="group">
                  <div class="tit">
                    优惠加油
                    <div class="icon">
                      <div class="friend"></div>
                    </div>
                  </div>
                  <div class="text">优惠价加油，节省拉货成本赚更多 </div>
                </div>
              </div>
              <router-link tag="a" :to="'./download'" class="download-btn">下载APP</router-link>
            </div>
            <div class="right">
              <div class="item3"><img src="../assets/images/driver-pic2.png"></div>
              <div class="item2"><img src="../assets/images/driver-pic1.png"></div>
              <div class="item1"><img src="../assets/images/driver-pic3.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--承运商端-->
    <div class="driver-wrap driver-wrap2">
      <div class="wrap">
        <div class="driver-item">
          <div class="body">
            <div class="left">
              <div class="big-tit">承运商端</div>
              <div>
                <div class="group active">
                  <div class="tit">
                    优质货源
                    <div class="icon">
                      <div class="enquiry"></div>
                    </div>
                  </div>
                  <div class="text">知名快递、快运、电商的优质货源</div>
                </div>
                <div class="group">
                  <div class="tit">
                    资金保障
                    <div class="icon">
                      <div class="waybill"></div>
                    </div>
                  </div>
                  <div class="text">送达立即结算，不为资金周转发愁</div>
                </div>
                <div class="group">
                  <div class="tit">
                    车辆管理
                    <div class="icon">
                      <div class="count"></div>
                    </div>
                  </div>
                  <div class="text">添加熟车方便管理，实时查看车辆定位</div>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="item3"><img src="../assets/images/carriers-pic2.png"></div>
              <div class="item2"><img src="../assets/images/carriers-pic1.png"></div>
              <div class="item1"><img src="../assets/images/carriers-pic3.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-wrap">
      <div class="wrap">
        <p class="title">
          产品优势
          <span></span>
        </p>
        <div class="body clearfix">
          <div class="item first-child">
            <div class="img-wrap">
              <img src="../assets/images/operate.png">
            </div>
            <div class="header">操作便捷</div>
            <div class="text">
              实现一键抢单报价功能，而且我们对于产品功能还实行一对一辅导
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/safe.png">
            </div>
            <div class="header">安全可靠</div>
            <div class="text">
              每一个货主每一单货物我们都会严格审核把关，保证每一单都是真实有效货源，保证每一笔运费都能按时到账
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/resources.png">
            </div>
            <div class="header">资源丰富</div>
            <div class="text">
              与物流、电商、厂商等知名行业企业签订长期用车需求，保证每天都有源源不断货源等你承运
            </div>
          </div>
          <div class="item first-child">
            <div class="img-wrap">
              <img src="../assets/images/free-use.png">
            </div>
            <div class="header">免费使用</div>
            <div class="text">
              我们承诺罗计承运商APP免费使用，而且在报价承运过程中我们会一对一跟踪服务
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/guarantee.png">
            </div>
            <div class="header">担保运费</div>
            <div class="text">
              运费线上结算，货主货款直接支付给罗计，罗计与注册承运商进行货款结算保证运费安全到账
            </div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/payment.png">
            </div>
            <div class="header">账期灵活</div>
            <div class="text">
              自主选择结算周期，最快2个工作日就可到账，承运商可根据自己的资金状况选择账期操作便捷
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-wrap">
      <div class="wrap">
        <p class="title">
          加入方式
          <span></span>
        </p>
        <div class="content">
          <div class="step-wrap"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'driver',
    data () {
      return {}
    },
    methods: {},
    created(){
      $('html,body').animate({scrollTop : 0},0);
    },
    mounted (){


      /** 司机端 **/
      let groups = $(".driver-wrap1 .left .group");
      let picItem = $(".driver-wrap1 .right div");
      let items = ["item3", "item2", "item1"];
      let index = 0;


      //上一张
      function previmg() {
        items.unshift(items[2]);
        items.pop();
        picItem.each(function (i, e) {
          $(e).removeClass().addClass(items[i]);
        });
        index--;
        if (index < 0) {
          index = 2;
        }
        show();
      }

      //下一张
      function nextimg() {
        items.push(items[0]);
        items.shift();
        picItem.each(function (i, e) {
          $(e).removeClass().addClass(items[i]);
        });
        index++;
        if (index > 2) {
          index = 0;
        }
        show();
      }

      //点击切换
      groups.each(function () {
        $(this).click(function () {
          let myindex = $(this).index();
          let b = myindex - index;
          if (b === 0) {
            return false;
          }
          else if (b > 0) {
            let newarr = items.splice(0, b);
            items = $.merge(items, newarr);
            picItem.each(function (i, e) {
              $(e).removeClass().addClass(items[i]);
            });
            index = myindex;
            show();
          }
          else if (b < 0) {
            items.reverse();
            let oldarr = items.splice(0, -b);
            items = $.merge(items, oldarr);
            items.reverse();
            picItem.each(function (i, e) {
              $(e).removeClass().addClass(items[i]);
            });
            index = myindex;
            show();
          }
        })
      });

      function show() {
        $(groups).eq(index).siblings('div.group').removeClass("active");
        $(groups).eq(index).addClass("active");
      }

      $(document).on("click", ".driver-wrap1 .right .item3", function () {
        nextimg();
        return false;
      });

      $(document).on("click", ".driver-wrap1 .right .item1", function () {
        previmg();
        return false;
      });


      //进入页面自动开始定时器
      this.timer = setInterval(nextimg, 4000);

      $('.driver-wrap1 div.body').on('mouseover',() => {
          clearInterval(this.timer);
      });

      $('.driver-wrap1 div.body').on('mouseleave',() => {
          this.timer = setInterval(nextimg, 4000);
      });



      /** 承运商端 **/
      let groups2 = $(".driver-wrap2 .left .group");
      let picItem2 = $(".driver-wrap2 .right div");
      let items2 = ["item3", "item2", "item1"];
      let index2 = 0;


      //上一张
      function previmg2() {
        items2.unshift(items2[2]);
        items2.pop();
        picItem2.each(function (i, e) {
          $(e).removeClass().addClass(items2[i]);
        });
        index2--;
        if (index2 < 0) {
          index2 = 2;
        }
        show2();
      }

      //下一张
      function nextimg2() {
        items2.push(items2[0]);
        items2.shift();
        picItem2.each(function (i, e) {
          $(e).removeClass().addClass(items2[i]);
        });
        index2++;
        if (index2 > 2) {
          index2 = 0;
        }
        show2();
      }

      //点击切换
      groups2.each(function () {
        $(this).click(function () {
          let myindex = $(this).index();
          let b = myindex - index2;
          if (b === 0) {
            return false;
          }
          else if (b > 0) {
            let newarr = items2.splice(0, b);
            items2 = $.merge(items2, newarr);
            picItem2.each(function (i, e) {
              $(e).removeClass().addClass(items2[i]);
            });
            index2 = myindex;
            show2();
          }
          else if (b < 0) {
            items2.reverse();
            let oldarr = items2.splice(0, -b);
            items2 = $.merge(items2, oldarr);
            items2.reverse();
            picItem2.each(function (i, e) {
              $(e).removeClass().addClass(items2[i]);
            });
            index2 = myindex;
            show2();
          }
        })
      });

      function show2() {
        $(groups2).eq(index2).siblings('div.group').removeClass("active");
        $(groups2).eq(index2).addClass("active");
      }

      $(document).on("click", ".driver-wrap2 .right .item3", function () {
        nextimg2();
        return false;
      });

      $(document).on("click", ".driver-wrap2 .right .item1", function () {
        previmg2();
        return false;
      });


      //进入页面自动开始定时器
      this.timer2 = setInterval(nextimg2, 4000);


      $('.driver-wrap2 div.body').on('mouseover',() => {
        clearInterval(this.timer2);
      });

      $('.driver-wrap2 div.body').on('mouseleave',() => {
        this.timer2 = setInterval(nextimg2, 4000);
      });


    },
    beforeDestroy(){
      clearInterval(this.timer);
      clearInterval(this.timer2);
    },
    components : {

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  /* banner */
  .banner-wrap {
    height: 600px;
    background: url("../assets/images/driver-banner.png") center center no-repeat;
  }

  .driver-wrap {
    background: #fff;
    .driver-item {
      position: relative;
      height: 690px;
      .title {
        position: relative;
        padding-top: 50px;
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
      .body {
        margin-top: 120px;
        height: 340px;
        position: relative;
        .left {
          position: absolute;
          padding-left: 60px;
          left: 30px;
          top: 70px;
          width: 350px;
          height: 210px;
          .download-btn {
            display: block;
            margin-top: 50px;
            width: 180px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            color: #fff;
            background: #FF9E6F;
            font-size: 20px;
            cursor: pointer;
          }
          .big-tit {
            position: absolute;
            font-size: 20px;
            color: #373636;
            top: -60px;
            left: 28px;
          }
          .group {
            position: relative;
            margin-bottom: 15px;
            cursor: pointer;
            .tit {
              position: relative;
              text-align: left;
              font-size: 16px;
              margin-bottom: 14px;
              font-weight: bold;
              color: #373636;
              .icon {
                position: absolute;
                left: -40px;
                top: -5px;
                width: 30px;
                height: 30px;
                .enquiry {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/enquiry.png") no-repeat;
                }
                .waybill {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/waybill.png") no-repeat;
                }
                .personal {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/personal.png") no-repeat;
                }
                .count {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/count.png") no-repeat;
                }
                .goods {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/goods.png") no-repeat;
                }
                .faith {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/faith.png") no-repeat;
                }
                .friend {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/friend.png") no-repeat;
                }
              }
            }
            .text {
              font-size: 14px;
              color: #51555C;
            }
          }
          .active {
            .tit, .text {
              color: #FF5902;
            }
            .tit {
              .icon {
                .enquiry {
                  background: url("../assets/images/enquiry-hover.png") no-repeat;
                }
                .waybill {
                  background: url("../assets/images/waybill-hover.png") no-repeat;
                }
                .personal {
                  background: url("../assets/images/personal-hover.png") no-repeat;
                }
                .count {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/count-hover.png") no-repeat;
                }
                .goods {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/goods-hover.png") no-repeat;
                }
                .faith {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/faith-hover.png") no-repeat;
                }
                .friend {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/friend-hover.png") no-repeat;
                }
              }
            }
          }
        }
        .right {
          position: absolute;
          right: 0;
          top: 0;
          width: 550px;
          height: 364px;
          div {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: all .3s ease-out;
            cursor: pointer;
          }
          .item1 {
            transform: translate3d(-6px, 0, 0) scale(0.7);
            opacity: 0.8;
          }
          .item2 {
            transform: translate3d(190px, 0, 0) scale(1);
            z-index: 3;
            opacity: 1;
          }
          .item3 {
            transform: translate3d(384px, 0, 0) scale(0.7);
            opacity: 0.8;
          }
        }
      }
    }
  }
  .driver-wrap2 {
    background: #F6F8FA;
    .driver-item {
      height: 500px;
      .body {
        .left {
          left: auto;
          right: 0;
          top: 70px;
        }
        .right {
          right: auto;
          left: 30px;
          top: 0;
        }
      }
    }
  }

  .product-wrap {
    position: relative;
    height: 690px;
    background-image: linear-gradient(63deg, #7AABBE 0%, #DADADA 100%);
    .title {
      position: relative;
      padding-top: 50px;
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
    .body {
      margin-top: 50px;
      .item {
        float: left;
        margin-left: 212px;
        margin-bottom: 50px;
        text-align: center;
        width: 190px;
        color: #fff;
        .img-wrap {
          margin-bottom: 30px;
        }
        .header {
          font-size: 20px;
          margin-bottom: 8px;
        }
        .text {
          font-size: 14px;
        }
      }
      .first-child {
        margin-left: 0;
      }
    }
  }

  .join-wrap {
    background: #fff;
    position: relative;
    height: 690px;
    .title {
      position: relative;
      padding-top: 50px;
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
    .content {
      position: relative;
      height: 500px;
      margin-top: 88px;
      text-align: center;
      .step-wrap {
        width: 1002px;
        height: 447px;
        background: url("../assets/images/driver-step.png") no-repeat;
      }
    }
  }
</style>
