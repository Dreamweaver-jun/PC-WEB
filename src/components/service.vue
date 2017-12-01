<template>
  <div>
    <div class="service-wrap"></div>
    <div class="car-service">
      <p class="title">
        服务
        <span></span>
      </p>
      <div class="body wrap">
          <div class="pic"></div>
          <div class="text">
            <p class="tit">整车服务</p>
            <p>罗计整车服务：是基于智慧物流大数据体系体系搭建的集货物运输、在线购买货物保险、在途定位跟踪、异常上报处理、回单管理及在线结算为一体的整车运输服务。</p>
          </div>
      </div>
    </div>
    <div class="product-wrap">
      <p class="title">
        服务优势
        <span></span>
      </p>
      <div class="body">
        <div class="blue"></div>
        <div class="pink"></div>
        <div class="item-wrap">
            <div class="block"></div>
            <span>系统对接、企业账号服务，便于企业客户统一管理、全面监控</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>严格把关所有车辆，对所有车辆实施在途轨迹跟踪</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>专人跟单服务，7*24小时客服及时处理在途异常</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>海量司机、车队竞标，保证客户运费最低</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>在途保险服务，系统和人工双重保障货物安全准时送达</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>统一结算，方便快捷，同时为整车业务提供11%运输发票</span>
        </div>
        <div class="item-wrap">
          <div class="block"></div>
          <span>系统对接、企业账号服务，便于企业客户统一管理、全面监控</span>
        </div>
      </div>
    </div>
    <div class="demo-wrap">
      <p class="title">
        成功案例
        <span></span>
      </p>
      <div class="body wrap">
          <div class="huayu">
              <div class="tit">
                天地华宇项目
              </div>
            <div class="content">
              2016年4月开始为天地华宇临时性用车需求提供运力。目前合作区域覆盖华北、华中、华东、华南等主要区域，日均为华宇提供城际厢货200车次。双方已打通车辆需求系统，通过全面系统对接以及各网点、区域、总部的权限设置大幅度降低调车和管理成本。
            </div>
            <div class="tit2">
              实施成果:
            </div>
            <div class="pic"></div>
          </div>
          <div class="tmall">
            <div class="tit">
              天猫双十一
            </div>
            <div class="content">
              a、双十一已经成为国内最大的电商促销日，当日（2016年）交易会产生约2亿计的快递包裹。大量的快递需要庞大的运力支撑，罗计成为双十一天猫的承运商。在双方的合作中得到了客户的肯定，并连续几年成为天猫A类供应商。<br>
              b、在武汉 广州等地为天猫提供全天候的省内倒短，7*24小时的保障性车辆资源以及部分下沉到门店的车辆资源。整个双十一期间共为客户提供600多次车辆服务，保证了双十一期间货物的有序送达。保守估计双十一期间共运送了2000吨货，约25万个包裹快递的转运。
            </div>
            <div class="tit2">
              实施成果:
            </div>
            <div class="label-wrap clearfix">
              <div class="clearfix">
                <div class="label label1">当晚车辆到达率100%</div>
                <div class="label label2">需求满足率100%</div>
                <div class="label label3">天猫双11优服务秀合作商</div>
              </div>
              <div class="clearfix">
                <div class="label label4">次日8点车辆到达率85%</div>
                <div class="label label5">运作异常发生率0%</div>
                <div class="label label6">提供600多次车辆服务</div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'finance',
  data () {
    return {

    }
  },
  created(){
    $('html,body').animate({scrollTop : 0},0);
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  /* banner */
  .service-wrap {
    height: 600px;
    background: url("../assets/images/service-banner.png") 50% 50% no-repeat;
  }

  .car-service {
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
      position: relative;
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      .pic {
        width: 522px;
        height: 348px;
        background: url("../assets/images/service-bg.png") no-repeat;
      }
      .text {
        width: 384px;
        height: 348px;
        padding: 78px 0;
        p.tit {
          font-size: 24px;
          color: #373636;
          margin-bottom: 40px;
        }
        p {
          font-size: 20px;
          color: #51555C;
        }
      }
    }
  }
  .product-wrap {
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
      position: relative;
      width: 826px;
      height: 460px;
      margin: 80px auto;
      padding: 60px 120px;
      background: #fff;
      .item-wrap {
        margin-bottom: 26px;
        .block {
          position: relative;
          top: 2px;
          display: inline-block;
          width: 20px;
          height: 20px;
          background: #FF5902;
        }
        span {
          display: inline-block;
          padding-left: 10px;
          font-size: 20px;
          color: #373636;
        }
      }
      .blue {
        position: absolute;
        top: -40px;
        left: -87px;
        width: 180px;
        height: 204px;
        background: #8CE1EE;
      }
      .pink {
        position: absolute;
        bottom: 22px;
        right: -87px;
        width: 173px;
        height: 80px;
        background: #FF9E6F;
      }
    }
  }
  .demo-wrap {
    padding-bottom: 70px;
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
      margin-top: 90px;
      .tit {
        font-size: 26px;
        color: #77CBD8;
        text-align: left;
        margin-bottom: 10px;
      }
      .tit2 {
        font-size: 24px;
        color: #373636;
        margin-top: 60px;
      }
      .content {
        font-size: 18px;
        color: #373636;
      }
      .huayu {
        height: 473px;
        background: #F6F8FA;
        padding: 20px;
        .pic {
          width: 907px;
          margin: 30px auto;
          height: 136px;
          background: url("../assets/images/result.png") no-repeat;
        }
      }
      .tmall {
        margin-top: 50px;
        background: #F6F8FA;
        padding: 20px;
        .label-wrap {
          margin-top: 20px;
          .label {
            width: 200px;
            text-align: center;
            float: left;
            margin-left: 20px;
            margin-bottom: 20px;
            padding: 8px 28px;
            font-size: 14px;
            color: #fff;
            border-radius: 10px;
          }
          .label1 {
            background: #CBDB35;
          }
          .label2 {
            background: #46B3C2;
          }
          .label3 {
            background: #E95453;
          }
          .label4 {
            background: #478FCD;
          }
          .label5 {
            background: #F4C21D;
          }
          .label6 {
            background: #B08CBE;
          }
        }
      }
    }
  }
</style>
