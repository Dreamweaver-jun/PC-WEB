<template>
  <div>
    <div class="banner-wrap"></div>
    <div class="product-wrap">
      <div class="pc-item">
        <div class="wrap">
          <p class="title">
            产品功能
            <span></span>
          </p>
          <div class="body carousel slide" data-ride="carousel" id="driverCarousel">
            <div class="left-wrap">
              <div class="carousel-inner">
                <div class="item active">
                  <div class="small-img">
                    <img src="../assets/images/business-pic.png">
                  </div>
                </div>
                <div class="item">
                  <div class="small-img">
                    <img src="../assets/images/finance-pic.png">
                  </div>
                </div>
                <div class="item">
                  <div class="small-img">
                    <img src="../assets/images/cooperation-pic.png">
                  </div>
                </div>
                <div class="item">
                  <div class="small-img">
                    <img src="../assets/images/system-pic.png">
                  </div>
                </div>
                <div class="item">
                  <div class="small-img">
                    <img src="../assets/images/bi-pic.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="right-wrap">
              <div class="font">PC端</div>
              <ul class="carousel-indicators">
                <li class="group active" data-target="#driverCarousel" data-slide-to="0">
                  <div class="tit">业务
                    <div class="icon">
                      <div class="business"></div>
                    </div>
                  </div>
                  <div class="text">托运单、配载单、到货、中转、签收、业务查询</div>
                </li>
                <li class="group" data-target="#driverCarousel" data-slide-to="1">
                  <div class="tit">财务
                    <div class="icon">
                      <div class="finance"></div>
                    </div>
                  </div>
                  <div class="text">运费、代收款、大车费、中转费、资金管理</div>
                </li>
                <li class="group" data-target="#driverCarousel" data-slide-to="2">
                  <div class="tit">协同
                    <div class="icon">
                      <div class="cooperation"></div>
                    </div>
                  </div>
                  <div class="text">货源发布、承运商合作、下游招标、跟踪同步</div>
                </li>
                <li class="group" data-target="#driverCarousel" data-slide-to="3">
                  <div class="tit">系统
                    <div class="icon">
                      <div class="system"></div>
                    </div>
                  </div>
                  <div class="text">组织架构、运价管理、短信服务、客户管理、数据管理</div>
                </li>
                <li class="group" data-target="#driverCarousel" data-slide-to="4">
                  <div class="tit">BI
                    <div class="icon">
                      <div class="bi"></div>
                    </div>
                  </div>
                  <div class="text">运单量、库存量、发车量、收入情况、结算情况、资金情况</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-item">
        <div class="wrap">
          <div class="clearfix"></div>
          <div class="body">
            <div class="left">
              <div class="font">移动端</div>
              <div>
                <div class="group active">
                  <div class="tit">
                    网点开单
                    <div class="icon">
                      <div class="node"></div>
                    </div>
                  </div>
                  <div class="text">现场手机快捷开单，减少排队</div>
                </div>
                <div class="group">
                  <div class="tit">
                    我的运单
                    <div class="icon">
                      <div class="waybill"></div>
                    </div>
                  </div>
                  <div class="text">运单状态实时查看，货源追踪让您安心</div>
                </div>
                <div class="group">
                  <div class="tit">
                    签收
                    <div class="icon">
                      <div class="charge"></div>
                    </div>
                  </div>
                  <div class="text">手机在线签收，回单信息实时记录</div>
                </div>
              </div>
              <router-link tag="a" :to="'./download'" class="download-btn">下载APP</router-link>
            </div>
            <div class="right">
              <div class="item3"><img src="../assets/images/sources.png"></div>
              <div class="item2"><img src="../assets/images/node-pic.png"></div>
              <div class="item1"><img src="../assets/images/charge-pic.png"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feature-wrap">
      <div class="wrap">
        <p class="title">
          产品优势
          <span></span>
        </p>
        <div class="body clearfix">
          <div class="item first-child">
            <div class="img-wrap">
              <img src="../assets/images/free-ico.png">
            </div>
            <div class="header">免费</div>
            <div class="text">通用版TMS永久免费，短信通知免费，为您节约成本，助您做大做强。</div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/simple.png">
            </div>
            <div class="header">简单</div>
            <div class="text">不需要太多的繁琐环节,直接就能上手,大大降低了培训成本。</div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/quick.png">
            </div>
            <div class="header">效率高</div>
            <div class="text">打通信息流，货物中转状态实时可见，财务对账结算清晰透明，管理更加高效便捷。</div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/collaboration.png">
            </div>
            <div class="header">协同</div>
            <div class="text">新型协同运输管理，重构企业内部流程，连接外部合作伙伴，让物流生意畅通无阻。</div>
          </div>
          <div class="item">
            <div class="img-wrap">
              <img src="../assets/images/safe-ico.png">
            </div>
            <div class="header">安全</div>
            <div class="text">采用世界顶尖水平的云存储技术、云安全防护技术，全程为数据加密确保了数据传输安全</div>
          </div>
        </div>
      </div>
    </div>
    <div class="step-wrap">
      <div class="wrap">
        <p class="title">
          试用流程
          <span></span>
        </p>
        <div class="body">
          <div class="step"></div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'tms',
    data () {
      return {}
    },
    created(){
      $('html,body').animate({scrollTop : 0},0);
    },
    mounted (){

      //幻灯片
      $(function () {
        $('#driverCarousel').carousel({
          interval: 3000
        });
      });


      let groups = $(".left .group");
      let items = ["item3", "item2", "item1"];
      let index = 0;


      //上一张
      function previmg() {
        items.unshift(items[2]);
        items.pop();
        $(".right div").each(function (i, e) {
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
        $(".right div").each(function (i, e) {
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
            $(".right div").each(function (i, e) {
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
            $(".right div").each(function (i, e) {
              $(e).removeClass().addClass(items[i]);
            });
            index = myindex;
            show();
          }
        })
      });

      function show() {
        $(groups).eq(index).siblings().removeClass("active");
        $(groups).eq(index).addClass("active");
      }

      $(document).on("click", ".right .item3", function () {
        nextimg();
        return false;
      });

      $(document).on("click", ".right .item1", function () {
        previmg();
        return false;
      });

      //进入页面自动开始定时器
      this.timer = setInterval(nextimg, 4000);


      $('.mobile-item div.body').on('mouseover',() => {
          clearInterval(this.timer);
      });

      $('.mobile-item div.body').on('mouseleave',() => {
        this.timer = setInterval(nextimg, 4000);
      })


    },
    beforeDestroy(){
      clearInterval(this.timer);
    },
    components: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  /* banner */
  .banner-wrap {
    height: 600px;
    background: url("../assets/images/tms-banner.jpg") center center no-repeat;
  }

  .product-wrap {
    .pc-item {
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
        height: 370px;
        position: relative;
        .left-wrap {
          position: absolute;
          padding: 18px 17px 94px 18px;
          left: 30px;
          top: 30px;
          width: 429px;
          height: 333px;
          background: url("../assets/images/computer-bg.png") no-repeat;
          .carousel-inner {
            height: 100%;
            overflow: hidden;
            .item {
              position: absolute;
              height: 100%;
              .small-img {
                width: 394px;
                height: 100%;
              }
            }
          }
          .next, .prev {
            position: static;
            top: 0;
          }
        }
        .right-wrap {
          position: absolute;
          padding-left: 60px;
          right: 90px;
          top: 0;
          width: 370px;
          .font {
            position: absolute;
            left: 25px;
            top: -60px;
            font-size: 18px;
            color: #373636;
            font-weight: bold;
          }
          .carousel-indicators {
            position: static;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: auto;
            padding: 0;
            margin: 0;
            text-align: left;
            li {
              position: relative;
              margin: 0 0 15px 0;
              cursor: pointer;
              display: block;
              width: auto;
              height: auto;
              background: none;
              text-indent: 0;
              border: none;
              border-radius: 0;
            }
            li.active {
              margin-bottom: 15px;
            }

          }
          .group {
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
                .finance {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/finance-ico.png") no-repeat;
                }
                .business {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/business.png") no-repeat;
                }
                .cooperation {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/cooperation.png") no-repeat;
                }
                .system {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/system.png") no-repeat;
                }
                .bi {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/bi.png") no-repeat;
                }
              }
            }
            .text {
              font-size: 14px;
              color: #51555C;
            }
          }
          .active {
            .tit {
              color: #FF5902;
              .icon {
                .finance {
                  background: url("../assets/images/finance-ico-hover.png") no-repeat;
                }
                .business {
                  background: url("../assets/images/business-hover.png") no-repeat;
                }
                .cooperation {
                  background: url("../assets/images/cooperation-hover.png") no-repeat;
                }
                .system {
                  background: url("../assets/images/system-hover.png") no-repeat;
                }
                .bi {
                  background: url("../assets/images/bi-hover.png") no-repeat;
                }
              }
            }
          }
        }
      }
    }
    .mobile-item {
      position: relative;
      height: 690px;
      background: #fff;
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
          width: 316px;
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
          .font {
            position: absolute;
            left: 25px;
            top: -60px;
            font-size: 18px;
            color: #373636;
            font-weight: bold;
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
                .node {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/node.png") no-repeat;
                }
                .charge {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/charge.png") no-repeat;
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
                .node {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/node-hover.png") no-repeat;
                }
                .charge {
                  width: 100%;
                  height: 100%;
                  background: url("../assets/images/charge-hover.png") no-repeat;
                }
              }
            }
          }
        }
        .right {
          position: absolute;
          right: 0;
          top: 68px;
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
          /*.item1 {
            transform: translate3d(0px, 0, 0) scale(0.7);
            opacity: 0.6;
          }
          .item2 {
            transform: translate3d(100px, 0, 0) scale(0.8);
            opacity: 0.8;
            z-index: 2;
          }
          .item3 {
            transform: translate3d(200px, 0, 0) scale(1);
            z-index: 3;
            opacity: 1;
          }
*/

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

  .feature-wrap {
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
      margin-top: 160px;
      .item {
        float: left;
        margin-left: 48px;
        margin-bottom: 100px;
        text-align: center;
        width: 160px;
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

  .step-wrap {
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
      margin-top: 170px;
      position: relative;
      .step {
        width: 973px;
        height: 192px;
        margin: 0 auto;
        background: url("../assets/images/tms-step.png") no-repeat;
      }
    }
  }

</style>
