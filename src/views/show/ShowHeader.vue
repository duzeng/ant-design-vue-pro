<template>
  <header class="header clearfix">
    <TabControl :datas="['日常管理','应急响应']" spaceBetween hasRadius boldBorder class="float-left"/>
    <h1 class="header-title">地质灾害与工程安全智能监测云平台</h1>
    <Clock class="float-right"/>
  </header>
</template>
<script>
import Clock from '@/components/Clock.vue'
import TabControl from '@/components/TabControl.vue'
export default {
  components: {
    Clock,
    TabControl
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
  }

}
</script>
<style lang="less" scoped>
@import "../../style/global-var.less";

  .header{
    padding:30px 20px 0;
    text-align: center;
    position: relative;
    .header-title{
      color:@main-theme-color;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

  }
</style>
