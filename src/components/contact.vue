<template>
  <div>
    <div class="banner-wrap"></div>
    <div class="wrap clearfix contact-wrap">
      <div class="contact-item">
        <p class="title">客户服务</p>
        <p>联系电话：400-890-0856 </p>
        <p>电子邮箱：cc@eunke.com</p>
      </div>
      <div class="contact-item">
        <p class="title">商务合作</p>
        <p>联系电话：400-890-0856 </p>
        <p>电子邮箱：bd@eunke.com</p>
      </div>
      <div class="contact-item">
        <p class="title">媒体采访</p>
        <p>联系电话：400-890-0856</p>
        <p>电子邮箱：pr@eunke.com</p>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: 'contact',
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

  /* banner */
  .banner-wrap {
    height: 600px;
    background: url("../assets/images/contact-banner.png") 50% 50% no-repeat;
  }

  .contact-wrap {
    padding: 140px 0;
    .contact-item {
      background: #fff;
      width: 308px;
      height: 340px;
      float: left;
      margin-right: 37px;
      padding: 70px 0;
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
      p.title {
        font-weight: bold;
        font-size: 34px;
        color: $titColor;
        margin-bottom: 50px;
      }
      p {
        text-align: center;
        margin-bottom: 20px;
        font-size: 18px;
      }
    }
  }

</style>
