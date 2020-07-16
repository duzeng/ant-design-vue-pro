<template>
  <main class="main">
    <ve-bmap
      width="100%"
      height="100%"
      v-bind="mapOptions[1]"
    />
    <span
      :class="{ 'animate__animated':animate ,'animate__fadeInUp':animate}"
      class="notice"
      v-html="noticeText"></span>
  </main>
</template>

<script>
import * as config from '@/common/mockdata'
import myText from './text.json'
export default {
  name: 'ShowGuide',
  data () {
    this.intervalId = 0
    this.currentTextIndex = 0
    return {
      ...config,
      noticeText: '',
      myTextArr: myText.split(/[,，]/),
      animate: false
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const _this = this
      this.intervalId = setInterval(() => {
        _this.noticeText = _this.myTextArr[_this.currentTextIndex]
        _this.animate = true
        _this.currentTextIndex++
        if (_this.currentTextIndex > _this.myTextArr.length - 1) {
          _this.currentTextIndex = 0
        }
        setTimeout(() => { _this.animate = false }, 2000)
      }, 6000)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/global-var.less";
@import "~animate.css/animate.css";

.main {
  margin: 2px 0 0 6px;
  padding:5px;
  color:#fff;
  flex:1;
  border: 1px solid @desc-text-color;
  position:relative;
  .notice {
    position: absolute;
    right:10%;
    bottom:10%;
    font-size: 25px;
    font-family: 'led';
    color: @light-number-color;
  }
}

</style>
