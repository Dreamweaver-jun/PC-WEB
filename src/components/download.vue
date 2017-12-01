<template>
  <div class="download-wrap">
    <div class="app-download">
        <div class="header">
          <h3>APP下载<span></span></h3>
        </div>
        <div class="body">
            <div class="item">
              <div class="qr-wrap">
                <div class="qr"><img src="../assets/images/lj-qr-d.png"></div>
                <div class="tit">运立方</div>
              </div>
              <div class="font-wrap">
                <p>流程一键管理</p>
                <p>专注物流货运</p>
              </div>
            </div>
            <div class="item">
              <div class="qr-wrap">
                <div class="qr"><img src="../assets/images/cys-qr-d.png"> </div>
                <div class="tit">罗计承运商</div>
              </div>
              <div class="font-wrap">
                <p>优质货源一键订阅</p>
                <p>行车轨迹实时监控</p>
              </div>
            </div>
            <div class="item">
              <div class="qr-wrap">
                <div class="qr"><img src="../assets/images/driver-qr-d.png"> </div>
                <div class="tit">罗计车宝</div>
              </div>
              <div class="font-wrap">
                <p>加油保险享优惠</p>
                <p>快速找货不用愁</p>
              </div>
            </div>
        </div>
    </div>
    <div class="yp-download">
      <div class="header">
        <h3>域普软件下载<span></span></h3>
      </div>
      <div class="body">
        <div class="one">
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/Y5.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/Y5终端安装包.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/Y3.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/Y3终端安装包.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/Y2.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/Y2安装包.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/sz-xp.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/神州版XP系统终端.rar"><div class="btn">点击下载</div></a>
            </div>
          </div>
        </div>
        <div class="two">
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/sz-win7.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/神州版win7系统以上终端.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/Y3Y5.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/Y3、Y5的XP系统补丁net4.0离线下载.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/wl-qy.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/网络版和企业版的软件系统补丁.rar"><div class="btn">点击下载</div></a>
            </div>
          </div>
          <div class="item">
            <div class="img-wrap"><img src="../assets/images/jmg.png"></div>
            <div class="btn-wrap">
              <a href="http://www.yupu.cn/softdown/加密狗驱动.zip"><div class="btn">点击下载</div></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'download',
  data () {
    return {

    }
  },
  created(){
    $('html,body').animate({scrollTop : 0},0);
  },
  components : {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import "../assets/css/global";

  .download-wrap {
    .app-download {
      height: 700px;
      background: #F9F9F9;
      padding-top: 100px;
      .header {
        position: relative;
        text-align: center;
        h3 {
          position: relative;
          display: inline-block;
          color: #000;
          span {
            position: absolute;
            width: 258px;
            height: 3px;
            background: #FFC269;
            top: 60px;
            left: -72px;
          }
        }
      }
      .body {
        display: flex;
        justify-content: space-between;
        height: 360px;
        width: 756px;
        margin: 100px auto 0 auto;
        .item {
          width: 182px;
          height: 360px;
          .qr-wrap {
            position: relative;
            width: 182px;
            height: 261px;
            background: url("../assets/images/qr-bg.png") no-repeat;
            .qr {
              position: absolute;
              width: 146px;
              height: 146px;
              left: 18px;
              top: 17px;
              img {
                width: 146px;
              }
            }
            .tit {
              width: 182px;
              text-align: center;
              position: absolute;
              bottom: 34px;
              left: 0;
              font-size: 24px;
              color: #fff;
            }
          }
          .font-wrap {
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
            color: #211F1D;
            p {
              margin-top: 4px;
            }
          }
        }
      }
    }
    .yp-download {
      height: 820px;
      background: #fff;
      padding-top: 50px;
      .header {
        position: relative;
        text-align: center;
        h3 {
          position: relative;
          display: inline-block;
          color: #000;
          span {
            position: absolute;
            width: 258px;
            height: 3px;
            background: #FFC269;
            top: 60px;
            left: -55px;
          }
        }
      }
      .body {
        height: 530px;
        width: 800px;
        margin: 100px auto 0 auto;
        .one {
          height: 220px;
          display: flex;
          justify-content: space-between;
        }
        .two {
          margin-top: 90px;
          height: 220px;
          display: flex;
          justify-content: space-between;
        }
        .item {
          width: 150px;
          height: 220px;
          text-align: center;
          .btn-wrap {
            .btn {
              margin-top: 30px;
              width: 136px;
              height: 36px;
              border-radius: 20px;
              text-align: center;
              line-height: 36px;
              background: #FF7E27;
              color: #fff;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

</style>
