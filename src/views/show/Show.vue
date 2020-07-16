<template>
  <div class="bg-container full-conainer column-container">
    <dv-border-box-9 style="height:120px;">
      <div class="box-content-container">
        <show-header :defaultTabIndex="contentIndex" @content-changed="contentChangedHandler"></show-header>
      </div>
    </dv-border-box-9>
    <show-main class="portion-1" v-if="contentIndex===0"></show-main>
    <div v-else-if="contentIndex===1">other</div>
    <ShowGuide v-else />
  </div>
</template>

<script>
import ShowHeader from '@/views/show/ShowHeader'
import ShowMain from '@/views/show/ShowMain'
import ShowGuide from '@/views/show/ShowGuide'

export default {
  components: {
    ShowHeader,
    ShowMain,
    ShowGuide
  },
  data () {
    return {
      contentIndex: 0
    }
  },
  methods: {
    contentChangedHandler (index) {
      this.contentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
  .bg-container{
    background-size: 100% 100%;
    background-image: url('../../assets/background-show.png');
  }
</style>
