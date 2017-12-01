<template>
  <div>
    <div class="banner-wrap"></div>
    <div class="about-wrap wrap clearfix">
      <div class="nav-wrap" :class="{'fixed' : fixed}">
        <ul class="nav">
          <li v-for="nav in navs"><a>{{nav}}</a></li>
        </ul>
      </div>
      <div class="con-wrap">
        <div class="group-wrap">
          <div class="about-item clearfix">
            <p class="title">公司简介</p>
            <p class="text-wrap text-indent" style="margin-bottom: 16px">
              罗计成立于2014年8月，由真格基金、IDG资本、人人网、百度等多家知名机构注资。罗计的愿景是建设一个数据驱动、供应链协同的智慧物流平台，为物流企业、货车司机等提供基于大数据的系统解决方案。公司总部位于广州，在全国设立有20家分支机构，拥有一支超过300人的高素质、国际化的产品研发和技术支持团队。
            </p>
            <p class="text-wrap text-indent">目前罗计旗下“罗计车宝APP”服务于200多万卡车司机，解决找货、卡车金融等问题，成为卡车司机的必备移动管家。域普TMS和运立方物流云平台已为10万家三方、专线、车队等物流企业提供信息流、物流、资金流三流合一的企业级SaaS管理系统，帮助用户节约成本，提升效率。与此同时，罗计通过整合庞大的物流用户资源和尖端大数据能力，优化运力池，并为天猫商城、广西糖网、OFO等多家货主企业匹配输出优质运力，提供干线运输等服务。</p>
          </div>
        </div>
        <div class="group-wrap">
          <div class="about-item clearfix">
            <p class="title">企业文化</p>
            <p class="text-wrap clearfix">
              <span class="big-font">诚信</span>
              <span>不做损害公司利益的事情，不在工作时间做工作之外的事情，发现损害公司利益的行为，通过正当渠道向上反映。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="big-font">服务</span>
              <span>客户至上，内部客户也是客户，对客户笑脸相待，平等沟通，积极服务，有问题通过正当渠道向上反映。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="big-font">极致</span>
              <span>追求极致，每项工作力求完整和准确，通过各种方法确保工作不遗漏，通过各种方法确保工作不出问题。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="big-font">快</span>
              <span>力求在保证质量、遵从必要的工作流程的情况下，快速响应，不因自己的原因影响公司的业务进度。</span>
            </p>
          </div>
        </div>
        <div class="group-wrap">
          <div class="about-item clearfix history">
            <p class="title">发展历程</p>
            <p class="text-wrap clearfix">
              <span class="date-font">2017 - 03</span>
              <span>罗计作为智慧物流的代表企业，荣登科技部火炬中心2016年独角兽企业百强榜单。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2017 - 02</span>
              <span>罗计入选国家信息中心《中国分享经济发展报告2017》</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2016 - 12</span>
              <span>罗计通过北京市高新技术企业认证。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2016 - 06</span>
              <span>罗计荣登WIRED（连线）杂志英国版，该杂志以《It‘s time to copy China!》（《该向中国学习了》）报道专门介绍了中国物流信息化企业罗计。</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2015 - 12</span>
              <span>世界会联网大会，罗计CEO宋睿获评“2015年度中国十佳创客”</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2015 - 11</span>
              <span>罗计被《福布斯》杂志评为“福布斯中国成长最快科技企业”</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2015 - 09</span>
              <span>罗计物被权威机构艾瑞咨询列为独角兽企业第25位，成为唯一一家上榜的智慧物流企业</span>
            </p>
            <p class="text-wrap clearfix">
              <span class="date-font">2015 - 07</span>
              <span>罗计入选工信部、中国物流与采购联合会中国十佳物流信息化杰出服务商。</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'about',
    data () {
      return {
        navs: ['公司简介','企业文化','发展历程'],
        fixed : false,
        scroll : ''
      }
    },
    created(){
      $('html,body').animate({scrollTop : 0},0);
    },
    methods: {
      isFixed(){
        this.scroll = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
        if(this.scroll > 520)
        {
          this.fixed = true;
        }
        else
        {
          this.fixed = false
        }
      }
    },
    mounted(){

      /** 楼层滚动 **/
      let _this = this;
      let nav = $('.nav li');
      let group = $('div.group-wrap');

      window.addEventListener('scroll',function(){
        _this.isFixed();

        let scrollTop = $(this).scrollTop();
        group.each(function(){
          let groupTop = group.eq($(this).index()).offset().top;
          if(groupTop > scrollTop){
            nav.removeClass('active');
            nav.eq($(this).index()).addClass('active');
            return false;
          }
        });

      });

      nav.on('click',function(){

        let groupTop = group.eq($(this).index()).offset().top - 100;

        $('html,body').animate({
          scrollTop:groupTop
        },500,'swing',function(){

          $(this).siblings('li').removeClass('active');
          $(this).addClass('active');

        });

      });

    },
    components: {

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/css/global";

  /* banner */
  .banner-wrap {
    height: 600px;
    background: url("../assets/images/about-banner.png") 50% 50% no-repeat;
  }

  .about-wrap {
    position: relative;
    margin-top: 30px;
    margin-bottom: 20px;
    .nav-wrap {
      float: left;
      li {
        width: 154px;
        text-align: right;
        padding: 16px 0;
        border-bottom: 1px solid #9C9A9A;
        font-size: 15px;
        cursor: pointer;
        a {
          color: $titColor;
          padding: 0;
          &:hover,&:active,&:focus,&:visited {
            background: none;
          }
        }
        &:last-child {
          border-bottom: none;
        }
      }
      li.active a {
        color: #FF5902;
      }
    }
    .con-wrap {
      float: right;
      width: 792px;
      padding-top: 8px;
      margin-left: 52px;
      .group-wrap {
        padding-bottom: 50px;
        .about-item {
          padding: 32px;
          background: #fff;
          margin-bottom: 30px;
          p.title {
            font-size: 20px;
            color: $titColor;
            margin-bottom: 30px;
          }
          p.text-indent {
            text-indent: 2em;
          }
          p.text-wrap {
            font-size: 14px;
            margin-bottom: 40px;
            &:last-child {
              margin-bottom: 0;
            }
            span {
              width: 594px;
              float: left;
              padding: 5px 0;
            }
            span.big-font {
              width: 72px;
              padding: 0;
              text-align: left;
              font-size: 36px;
              color: #FF5902;
              margin-right: 60px;
            }
            span.date-font {
              width: 130px;
              font-size: 15px;
              color: #FF5902;
            }
          }
        }
      }
      .history {
        p.text-wrap {
          margin-bottom: 12px;
        }
      }
    }

    .fixed {
      position: fixed;
      top: 80px;
    }
  }

</style>
