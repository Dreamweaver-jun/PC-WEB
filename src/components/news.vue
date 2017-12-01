<template>
  <div class="news-wrap">
    <iframe id="news" src="https://news.loji.com" frameborder="0"></iframe>
  </div>
</template>


<script>

export default {
  name: 'news',
  data () {
    return {}
  },
  created(){
    $('html,body').animate({scrollTop : 0},0);
  },
  methods : {

  },
  mounted (){
    /*let news = $("#news");
    let iframeHeight = news.contents().find("body").height();
    news.css({'height' : iframeHeight + 'px'});

    console.log(iframeHeight);*/

  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  html,body {
    height: auto;
  }

  iframe {
    width: 100%;
    /*height: calc(100% - 73px);*/
    height: 2558px;
    margin-top: 70px;
  }
</style>
