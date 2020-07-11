<template>
  <div class="weather">
    <span class="weather-date">{{ weatherDate }}</span>
    <div class="weather-brief" :class="{ alarm:alarm}">
      <span>{{ weatherBrief }}</span>
    </div>
    <div class="weather-graphic">
      <svg-icon class="weather-graphic-icon" :icon-class="weatherName" />
      <div class="weather-graphic-temperature"> <span class="led">{{ temperature }}</span>℃</div>
    </div>
    <ul class="weather-details">
      <li>
        <span class="weather-detail-key">相对湿度:</span>
        <span class="weather-detail-value">{{ Math.floor(Math.random()*(95-85))+85 }}%</span>
      </li>
      <li>
        <span class="weather-detail-key">风向风力:</span>
        <span class="weather-detail-value">南风1级</span>
      </li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'WeatherBoard',
  components: {
  },
  props: {
    weatherDate: {
      type: String,
      default: () => moment().format('HH:mm实况')
    },
    alarm: {
      type: Boolean,
      default: false
    },
    weatherBrief: {
      type: String,
      default: ''
    },
    weatherName: {
      type: String,
      default: 'day'
    },
    temperature: {
      type: Number,
      require: true,
      default: 0
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import "../style/global-var.less";
.weather {
  display: flex;
  flex-direction: column;
  text-align: center;
  padding:0 16px;
  color: @desc-text-color;
  background-color: fade(@main-theme-color, 20%);
  .weather-date {
    padding: 12px 0;
  }
  .weather-brief{
    margin: 0 -16px;
    padding: 6px 0;
    background-color: fade(@main-theme-color, 30%);
    &.alarm{
      background-color: @light-number-color;
      color:#000;
    }
  }
  .weather-graphic {
    display: flex;
    padding: 10px 20px 8px;
    margin: 0 -16px;
    border-bottom: 1px solid @main-theme-color;
    .weather-graphic-icon{
      flex:1;
      width: 50px;
      height:58px
    }
    .weather-graphic-temperature{
      display: flex;
      align-items: center;
      .led {
        color: @light-number-color;
        margin-right:6px;
      }
    }

  }
  .weather-details {
    font-size: 14px;
    padding:15px 0;
    .weather-detail-key {
      margin-right:8px;
    }
    .weather-detail-value{
      color:#fff;
    }
  }
}
</style>
