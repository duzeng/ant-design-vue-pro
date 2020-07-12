<template>
  <main class="main row-container">
    <div class="portion-1 column-container">
      <dv-border-box-11 class="portion-1" :color="[styles.mainThemeColor,styles.transparentColor]" title="气象信息">
        <div class="box-content-container padding-top-60">
          <TabControl :datas="projects" :defaultTabIndex="2"/>
          <div class="row-container weatherboard-container">
            <WeatherBoard weatherName="rainy-6" weatherBrief="暴雨天气" :temperature="25" alarm/>
            <WeatherBoard :weatherDate="moment().add(1,'days').format('DD日白天')" weatherName="rainy-4" weatherBrief="小雨" :temperature="28" />
            <WeatherBoard :weatherDate="moment().add(1,'days').format('DD日夜间')" weatherName="rainy-7" weatherBrief="中雨" :temperature="23" />
          </div>
        </div>
      </dv-border-box-11>
      <dv-border-box-11 class="portion-1" :color="[styles.mainThemeColor,styles.transparentColor]" title="项目汇总">
        <div class="box-content-container padding-top-60 grid-container">
          <LedBoard
            v-for="(item,index) in projectStats"
            :key="index"
            :ledNumber="item.number"
            :ledDesc="item.name"
            width="100%"
            height="100%"/>
        </div>
      </dv-border-box-11 >
      <dv-border-box-11 class="portion-2" title="测点统计" :color="[styles.mainThemeColor,styles.transparentColor]">
        <div class="box-content-container">
          <ve-pie height="100%" v-bind="pieChart"></ve-pie>
        </div>
      </dv-border-box-11>
    </div>
    <div class="portion-3 column-container">
      <dv-border-box-8 class="portion-2" :color="[styles.mainThemeColor,styles.transparentColor]" title="综合展示信息">
        <div class=" box-content-container map-container">
          <TabControl
            class="map-tab"
            :datas="['项目地图','数据地图','九大模块']"
            :defaultTabIndex="centralModuleIndex"
            @tab-changed="mapTabChangedHandler"/>
          <ve-bmap
            v-if="centralModuleIndex<=1"
            width="100%"
            height="100%"
            v-bind="mapConfig"
          />
          <div class="system-module-container" v-else>
            <a-row>
              <a-col :span="8" v-for="index in 8" :key="index">
                <a-card class="system-module-card">
                  <img slot="cover" :src="`${publicPath}img/temp/${index}.png`" :alt="index">
                </a-card>
              </a-col>
            </a-row>
          </div>
        </div>
      </dv-border-box-8>
      <dv-border-box-11 class="portion-1 padding-top-60" :color="[styles.mainThemeColor,styles.transparentColor]" title="数据动态">
        <div class="box-content-container">
          <dv-scroll-board :config="scrollBoard" class="scrollBoard"/>
        </div>
      </dv-border-box-11>
    </div>
    <div class="portion-2 column-container">

      <dv-border-box-11 title="重点关注" :color="[styles.mainThemeColor,styles.transparentColor]">
        <div class="box-content-container padding-top-60">
          <ProjectSumBar :projects="specialProjects" />
        </div>
      </dv-border-box-11>
      <dv-border-box-11 class="portion-2" :color="[styles.mainThemeColor,styles.transparentColor]" title="现场实景">
        <div class="box-content-container column-container padding-top-60">
          <TabControl :datas="projects" :defaultTabIndex="1"/>
          <div class="portion-2" style="margin-top:20px;">
            <Camera v-if="videoInfos.length>0" :video="videoInfos[0]"/>
            <!-- <img width="100%" height="100%" src="https://server.zhilicloud.net:8619/files/projects/430922_BP_TJHYD/scene/1591052156_0c891505-3047-4790-b553-b60cf8fb5f98_1591052157.jpg"> -->
          </div>
          <div class="portion-1 row-container scene-image-gallery">
            <div class="portion-1">
              <img width="100%" height="100%" src="https://server.zhilicloud.net:8619/files/projects/430922_BP_TJHYD/scene/1591052155_a932fac3-4457-46d7-95da-41af5110aee3_1591052156.jpg">
            </div>
            <div class="portion-1">
              <img width="100%" height="100%" src="https://server.zhilicloud.net:8619/files/projects/431302_BP_LDFW/scene/1591007804_1b5425e8-fbfb-4244-b26f-136d35afcfb8_1591007805.jpg">
            </div>
          </div>
        </div>
      </dv-border-box-11>
    </div>

  </main>
</template>
<script>
import moment from 'moment'
import * as config from '@/common/mockdata'
import LedBoard from '@/components/LedBoard'
import TabControl from '@/components/TabControl'
import WeatherBoard from '@/components/WeatherBoard'
import ProjectSumBar from '@/components/ProjectSumBar'
import * as styles from '@/style/global-var.js'
import { listVideos } from '@/api/video'
import Camera from '@/components/video/Camera'

export default {
  components: {
    LedBoard,
    TabControl,
    WeatherBoard,
    ProjectSumBar,
    Camera
  },
  data () {
    this.moment = moment
    return {
      publicPath: process.env.BASE_URL,
      styles,
      ...config,
      mapConfig: {},
      centralModuleIndex: 1,
      videoInfos: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init () {
        this.videoInfos = (await listVideos(93)).result
        this.updateMapConfig(parseInt(this.centralModuleIndex))
    },
    mapTabChangedHandler (index) {
      this.centralModuleIndex = index
      if (!Array.isArray(this.mapOptions)) return
      this.updateMapConfig(parseInt(index))
    },
    updateMapConfig (index) {
      if (index <= this.mapOptions.length - 1) {
         this.mapConfig = this.mapOptions[index]
       }
    }
  }
}

</script>
<style lang="less" scoped>
@import "../../style/global-var.less";

.main{
  color:#fff;
  flex:1;
  .weatherboard-container{
    padding: 10px 0;
    >div{
      flex:1;
      margin-right:3px;
      &:nth-last-child(1){
        margin-right: 0;
      }
    }
  }
  .map-container {
    padding:4px;
    position: relative;
    .map-tab{
      position: absolute;
      top:40px;
      left:50%;
      transform: translateX(-50%);
      z-index: 9999;
    }
    .system-module-container {
      .system-module-card {
        background-color: fade(@main-theme-color, 10%);
      }
    }

  }
  .scrollBoard {
    color: @info-text-color
  }
  .grid-container {
    display:grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    grid-template-rows: 50% 50%;
    padding: 80px 30px 40px;
  }

  .scene-image-gallery{
    margin-top:10px;
    >div {
      margin-right: 10px;
      &:last-child{
        margin-right: 0;
      }
    }
  }

}

</style>
