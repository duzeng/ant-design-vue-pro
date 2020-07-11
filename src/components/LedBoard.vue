<template>
  <div class="led-board" :style="{ width:width,height:height}">
    <p class="led-board-number led">{{ ledNumber }}</p>
    <p class="led-board-desc">{{ ledDesc }}</p>
  </div>
</template>

<script>
export default {
  name: 'LedBoard',
  props: {
    width: {
      type: String,
      default: '80px'
    },
    height: {
      type: String,
      default: '70px'
    },
    ledNumber: {
      type: Number,
      default: 0
    },
    ledDesc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/global-var.less";

  .led-board {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid fade(@main-theme-color,25%);
    background-color: fade(@main-theme-color, 10%);
    .led-board-number {
      margin:0;
      color: @light-number-color;
    }
    .led-board-desc {
      margin: 0;
      color: @desc-text-color;
      font-size: 13px;
    }
  }
</style>
