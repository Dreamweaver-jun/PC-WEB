<template>
  <div>
    <div class="banner-wrap"></div>
    <div class="recruit-wrap wrap clearfix">
      <div class="recruit-con">
        <div class="text-wrap">
          <div class="top">
            <p>加入罗计，一起成就未来</p>
            <p>物流，承载着，你期望的，送到你手中的职责</p>
            <p>它是一个辛苦、实在，同时有充满机会和梦想的行业</p>
            <p>罗计不做运输，但罗计相信自己可以改变物流</p>
            <p>罗计是一个年轻的团队，我们兴奋的开始，勇敢的前进</p>
          </div>
          <div class="bottom">
            <p>罗计是一个成熟的团队，我们经历过转折，但从未窘迫</p>
            <p>还有一些人相信罗计，比如真格基金和IDC</p>
            <p>还有一些人相信罗计，比如我们的货主、承运商和司机</p>
            <p>罗计已经开始改变物流了，你的加入会更快地成就罗计</p>
            <p>而罗计也会成就你自己</p>
          </div>
        </div>
        <div class="video-wrap">
          <div class="video"></div>
          <div class="bottom">简历投递HR@eunke.com</div>
        </div>
      </div>
      <div class="nav-wrap" :class="{'fixed' : fixed}">
        <ul class="nav">
          <li v-for="nav in navs"><a>{{nav}}</a></li>
        </ul>
      </div>
      <div class="con-wrap">
        <div class="group-wrap">
          <div class="recruit-item clearfix">
            <p class="title">Java研发工程师</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.负责罗计车货匹配平台的后端接口开发；<br>
                2.负责对接第三方系统的接口功能开发。
              </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.计算机或者相关专业，统招全日制大专及以上学历；<br>
                2.良好的问题理解能力，能够理解以及处理复杂逻辑；<br>
                3.具备较强的自学能力，团队精神及抗压能力；<br>
                4.2年以上的Java开发及应用经验，掌握JSDK，J2EE的相关知识，熟练JAVA、JSP、SERVERLET编程，熟悉多线程编程，熟练掌握AJAX，jquery；<br>
                5.熟练掌握SSM框架开发模式， 掌握Redis, memcache, Solr, MQ一种或多种技术使用， 熟悉HttpClient、Dubbo、WebService任意一种RPC框架；<br>
                6.掌握数据库的相关知识，熟悉Mysql及SqlServer，具备SQL、触发器、函数、存储过程的编写能力；<br>
                7.具有一定的文档编写能力，了解UML；<br>
                8.有物流或电商行业经验优先。
              </span>
            </p>
          </div>
          <div class="recruit-item clearfix">
            <p class="title">Android开发工程师</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.负责公司应用项目的Android端APP的开发工作，基于Android平台进行APP软件的设计、开发、需求分析等；<br>
                2. 参与项目的设计及模块的开发，单元测试及后期维护指导；<br>
                3. 负责项目开发过程中技术的解决；<br>
                4. 协助软件开发项目的运行环境部署和程序更新。
              </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.2年及以上Android平台开发经验，有独立编写项目经验；<br>
                2.扎实的java技术功底；熟悉Android系统底层架构及相关技术，掌握多线程、网络、数据存储、JNI等；<br>
                3.熟悉Android平台UI设计，熟悉常用布局；<br>
                4.熟悉Android下的高性能编程及性能调优；<br>
                5.掌握一种源码版本控制工具，理解版本控制原理及开发流程，如SVN。GIT等。<br>
                6.良好的编程风格，具有较强的源代码阅读及学习能力；<br>
                7.精通面向对象设计；<br>
                8.有物流应用开发经验者优先。
              </span>
            </p>
          </div>
          <div class="recruit-item clearfix">
            <p class="title">IOS开发工程师</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1. 负责iOS平台应用软件的开发工作；<br>
                2. 负责新产品的可行性研究工作；<br>
                3. 根据项目需要快速学习并掌握新技术，满足产品需求；<br>
                4. 承担管理和协调项目,保证其业务需求的推进。
              </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1. 本科及以上学历，计算机、电子或通信相关专业优先；<br>
                2. 2-3年及以上iOS实际开发经验，有大型iOS项目开发经验优先;<br>
                3. 能为团队提供编码实践,成为团队知识积累的贡献者;<br>
                4. 对产品需求,业务价值保持敏感,具备基本的业务优先级判断能力,具备基本的数据分析意识和能力;<br>
                5. 熟悉HTTP、TCP/IP协议、Socket通信 ；熟悉Sqlite数据库，及SQL语句编写;<br>
                6. 熟悉objc语言,熟悉iOS基本框架，对ojbc有深入的理解;<br>
                7. 熟悉理解objc的Runtime，对iOS的并行开发、内存机制、消息通讯机制、安全机制有自己深入的体会;<br>
                8. 深入理解UIKIT原理，自定义UI组件;<br>
                9. 熟悉iOS图形绘制，基本的图形变换;<br>
                10. 熟悉iOS动画原理，能编写常用iOS动画效果;<br>
                11. 具有2年以上维护过上架App经验;<br>
                12. 有一定的逆向能力和数据安全开发方面能力;<br>
                13. 拥有良好优秀的编程思维能;<br>
                14. 良好的语言表达能力、文档组织能力，自学能力和积极主动的沟通意识;<br>
                15. 工作踏实认真，有责任感，求知欲望强，有团队协作意识;<br>
                16. 具有强烈的进取心和求知欲望，善于学习和运用新知识，乐于解决具有挑战性的问题;<br>
                17. 具有较强的逻辑思维 ，思路清晰，有创造性，有良好的英文资料阅读能力;<br>
                18. 在GitHub等网站有自己作品优先;<br>
                19. 熟悉UDP/TCP/IP、HTTP等网络协议优先;<br>
                20. 有物流应用开发者经验优先。
              </span>
            </p>
          </div>
          <div class="recruit-item clearfix">
            <p class="title">测试工程师</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.依据需求文档及设计文档,编写测试用例;<br>
                2.完成产品的集成测试与系统测试;<br>
                3.根据测试计划,搭建测试环境;<br>
                4.依据测试用例执行手工测试,反馈跟踪产品BUG及用例缺陷;
              </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.本科及以上,计算机相关专业;<br>
                2.熟悉一门或者几门编程语言;<br>
                3.掌握基本的软件测试理论,熟悉软件测试的基本方法、流程和规范;<br>
                4.熟悉 windows操作系统,了解linux,可以搭建测试环境;<br>
                5.熟悉数据库操作,可以使用基本的sql语句辅助测试;
              </span>
            </p>
          </div>
        </div>
        <div class="group-wrap">
          <div class="recruit-item clearfix">
            <p class="title">产品经理</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.产品规划：负责规划罗计Moss后台（订单系统、支付系统、BI）产品发展方向和功能;<br>
                2.支付体系搭建：搭建支付和账户体系组织设计总体清结算模式、流程及管理规范，搭建清结算总体框架；<br>
                3、产品功能设计：设计满足用户需求的产品和功能，优化已有功能或策略以提升用户体验，编写相关产品文档和产品交互原型设计；
              </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.本科及以上学历，3年以上互联网产品经理工作经验<br>
                2.有较高的数据敏感度，具备较强的数据分析、使用和总结能力，善于用数据驱动产品/业务的优化升级；<br>
                3.熟练产出MRD、PRD等产品文档；熟悉交互、UI、布局设计，熟练使用Auxre等常用产品设计工具；<br>
                4.有电商、O2O平台经验、对线上支付和结算体系有清晰认识和独立设计能力；<br>
                5.具备合作意识，善于沟通，有较强的跨团队协作能力和执行力。
              </span>
            </p>
          </div>
        </div>
        <div class="group-wrap">
          <div class="recruit-item clearfix">
            <p class="title">财务经理</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.严格按照公司制定的年度预算的制度与执行结果的监控、报告，按时制定公司各项财务报表，并及时反馈给上级领导；<br>
                2.跟踪分析各财务指标，掌握整个企业财务状况、经营成果、资金变动，揭示潜在的经营问题供高层决策参考；<br>
                3.加强资金管理，成本控制，合理核算各项资金定额，定期进行资金预测、分析，并及时反馈；<br>
                4.根据领导要求，从财务与资本的角度提供分析与预测；<br>
                5.组织财务部团队建设，加强团队凝聚力。
          </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.财务、经济、审计、金融类本科以上学历，互联网行业从业背景优先；<br>
                2.五年以上财务工作经验，三年以上全面财务管理经验，熟悉财务计划、财务成本分析、财务预算、成本核算、审计、税收等高级财务管理工作；突出的财务管理、分析与统筹能力；<br>
                3.优秀的沟通与人际交往能力，能与管理层、董事会及外部单位进行良好的沟通与合作；<br>
                4.较强的领导能力、协调能力、责任心和抗压能力；有良好的敬业精神和职业道德操守。
              </span>
            </p>
          </div>
          <div class="recruit-item clearfix">
            <p class="title">用户运营</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.负责罗计APP端内促活留存工作；<br>
                2.准确把握、挖掘、分析APP端用户需求，了解用户行为喜好，监控用户行为，通过制定不同运营策略和各种运营手段，引导用户行为，提高用户转化，促进平台用户关键指标的增长达成； 关注用户体验，对影响用户行为和使用体验方面进行监控，积极有效地推动运营活动和产品改进；<br>
                3.完善APP端用户拉新、激活、留存机制；从用户生命周期角度运营用户，维护用户活跃、激活沉默用户，针对不同用户类型设计有效激励机制，提升APP活跃度和留存率；<br>
                4.研究各大应用商店的排名和搜索规则，制定完善的推广计划。
          </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.了解移动互联网客户端推广特性，2年以上手机客户端的产品运营相关工作经验，擅长使用各种渠道和工具做站内流量的留存；<br>
                2.具备较强的数据分析能力、逻辑思维能力，能把握关键指标并拆解完成指标，能自我驱动，制定有效的流量分配机制提升流量转化效能<br>
                3.具备较强的产品运营能力，有较强的产品视觉和运营思维，具备运营规划能力和体系化建设经验，有搭建用户体系等经验者优先；<br>
                4.有较强沟通能力，有商务谈判和合作经验为佳。
              </span>
            </p>
          </div>
        </div>
        <div class="group-wrap">
          <div class="recruit-item clearfix">
            <p class="title">客服专员</p>
            <p class="text-wrap clearfix">
              <span class="point">岗位职责：</span>
              <span>
                1.要有1年以上的电话销售经验；<br>
                2.参加公司培训，接受上级业务指导；<br>
                3.执行营销计划和方案，按时完成各项指标和工作任务；<br>
                4.每个工作日完成营销接通电话80个；<br>
                5.掌握电话营销技巧，确保电话营销质量；<br>
                6.每周整理客户档案，不断完善内容，并报营销主管；<br>
                7.定期回访客户，帮助客户解决问题，维护好与客户的关系。
          </span>
            </p>
            <p class="text-wrap clearfix">
              <span class="point">任职要求：</span>
              <span>
                1.良好的团队精神且有上进心,敢于挑战高薪；<br>
                2.较强的学习能力和良好的沟通能力，能承受一定的工作压力；<br>
                3.此岗位为公司坐席，无须外出，无须自己开拓客户，办公室内工作。
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'recruit',
  data () {
    return {
      navs: ['研发','产品','运营','客服'],
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
        if(this.scroll > 880)
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
  components : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/css/global";

  /* banner */
  .banner-wrap {
    height: 600px;
    background: url("../assets/images/banner.png") 50% 50% no-repeat;
  }

  .recruit-wrap {
    position: relative;
    margin-top: 360px;
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
        .recruit-item {
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
            }
            span.point {
              width: 72px;
              padding: 0;
              text-align: left;
              color: #373636;
              margin-right: 30px;
            }
          }
        }
      }
    }
    .recruit-con {
      width: 1000px;
      height: 568px;
      position: absolute;
      top: -644px;
      .text-wrap {
        width: 865px;
        height: 100%;
        background: #fff;
        margin-left: 135px;
        font-size: 14px;
        .top {
          width: 100%;
          height: 50%;
          padding: 70px 0 4px 460px;
          p {
            padding: 12px 0;
            color: $titColor;
          }
        }
        .bottom {
          padding: 4px 0 10px 460px;
          width: 100%;
          height: 50%;
          background: $themeColor;
          p {
            padding: 12px 0;
            color: #fff;
          }
        }
      }
      .video-wrap {
        position: absolute;
        width: 500px;
        top: 100px;
        left: 20px;
        height: 385px;
        .video {
          height: 305px;
          background: url("../assets/images/video-bg.png") no-repeat;
        }
        .bottom {
          position: absolute;
          bottom: 0;
          height: 80px;
          width: 100%;
          background: #fff;
          text-align: center;
          color: $themeColor;
          font-size: 24px;
          line-height: 80px;
        }
      }

    }

    .fixed {
      position: fixed;
      top: 80px;
    }
  }

</style>
