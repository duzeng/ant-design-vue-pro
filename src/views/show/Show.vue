<template>
  <div class="bg-container full-conainer column-container">
    <dv-border-box-9 style="height:120px;">
      <div class="box-content-container">
        <show-header></show-header>
      </div>
    </dv-border-box-9>
    <show-main class="portion-1"></show-main>
  </div>
</template>

<script>
import ShowHeader from '@/views/show/ShowHeader'
import ShowMain from '@/views/show/ShowMain'
export default {
  components: {
    ShowHeader,
    ShowMain
  }
}
</script>

<style lang="less" scoped>
  .bg-container{
    background-size: 100% 100%;
    background-image: url('../../assets/background-show.png');
  }
</style>
