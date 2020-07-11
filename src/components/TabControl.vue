<template>
  <div
    class="tab-container row-container main-axis-center-container"
    :class="{'main-axis-space-between-container': spaceBetween}">
    <div
      v-for="(item,index) in datas"
      :key="index"
      class="tab-item"
      :class="{ 'selected':selectedTabIndex===index, 'has-radius':hasRadius,'bold-border':boldBorder }"
      @click="tabHandler(index)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => ['选项一', '选项二']
    },
    spaceBetween: {
      type: Boolean,
      default: false
    },
    hasRadius: {
      type: Boolean,
      default: false
    },
    boldBorder: {
      type: Boolean,
      default: false
    },
    defaultTabIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      selectedTabIndex: this.defaultTabIndex
    }
  },
  methods: {
    tabHandler (index) {
      this.selectedTabIndex = index
      this.$emit('tab-changed', this.selectedTabIndex)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../style/global-var.less";
    .tab-container{
      min-width: 220px;
      .tab-item{
        color:@main-theme-color;
        padding: 6px 18px;
        //margin-right: 20px;
        border: 1px solid @main-theme-color;
        cursor: pointer;
        &.selected {
          background-color: fade(@main-theme-color,30%);
          box-shadow: inset 14px 2px 18px   fade(@main-theme-color,40%),
          inset -14px -2px 18px fade(@main-theme-color,40%);
          color:white
        }
        &.has-radius{
          border-radius: 8px;
        }
        &.bold-border{
          border-width: 2px;
        }
      }
    }
</style>
