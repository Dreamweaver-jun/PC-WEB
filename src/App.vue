<template>
  <div id="app">
    <loji-header></loji-header>
    <router-view></router-view>
    <loji-footer></loji-footer>
    <tool :isTms="isTms"></tool>
  </div>
</template>

<script>

import lojiHeader from './components/header';
import lojiFooter from './components/footer';
import tool from './components/tool';

export default {
  name: 'app',
  data(){
    return {
      isTms : true
    }
  },
  created(){
    if(this.$route.name === 'Tms')
    {
      this.isTms = true;
    }
    else
    {
      this.isTms = false;
      return false;
    }
  },
  watch: {
    $route(to, from) {
      if(to.name === 'Tms')
      {
        this.isTms = true;
      }
      else
      {
        this.isTms = false;
        return false;
      }
    }
  },
  components : {
    lojiFooter, tool, lojiHeader
  }
}

</script>

<style lang="scss" scoped>

  #app {
    height: 100%;
  }

</style>
