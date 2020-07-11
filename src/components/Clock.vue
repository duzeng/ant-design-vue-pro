<template>
  <div class="clock row-container main-axis-center-container cross-axis-center-container">
    <div class="clock-date">{{ currentDate }}</div>
    <div class="row-container">
      <div class="clock-time led" :class="{'isColon': item===':'}" v-for="(item,index) in timeArr" :key="index">
        <div class="clock-time-number" v-if="item!==':'">{{ item }}</div>
        <span class="led" v-else>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    data () {
      return {
        timeArr: []
      }
    },
    computed: {
      currentDate () {
        return moment().format('yyyy年MM月DD日[/]dddd')
      }
    },
    mounted () {
      this.startClock()
    },
    beforeDestroy () {
      this.interval && clearInterval(this.interval)
    },
    methods: {
      startClock () {
        this.getTimeArr()
        this.interval = setInterval(() => this.getTimeArr(), 1000)
      },
      getTimeArr () {
        this.timeArr = moment().format('HH:mm:ss').split('')
      }
    }
}
</script>

<style lang="less" scoped>
@import "../style/global-var.less";
    .clock {
      color:@main-theme-color;
      font-size: 20px;
      >div:first-child {
        margin-right:18px;
      }
      .clock-date {
        font-weight: bold;
      }
      .clock-time {
        color:@light-number-color;
        >*{
            margin-right: 5px;
        }
        .clock-time-number {
          box-shadow: inset 4px 6px 6px fade(@desc-text-color,30%),
          inset -4px -6px 6px fade(@desc-text-color,30%);
          padding:6px 8px;
        }
      }
    }
</style>
