<template>
  <ul class="project-sum">
    <li class="project-sum-item" v-for="item in projects" :key="item.projectID">
      <div class="project-sum-left-container">
        <div class="project-sum-rect"></div>
        <span>{{ item.projectName }}</span>
      </div>

      <div class="project-sum-status" :class="`project-sum-status${item.projectStatusCode}`"></div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ProjectSumBar',
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
@import "../style/global-var.less";
@red-alert-color: rgb(229,64,66);
@yellow-alert-color: rgb(235,180,33);
@blue-alert-color: rgb(21,92,238);
  .project-sum{
      .project-sum-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: fade(@main-theme-color, 10%);
        color:@desc-text-color;
        margin-bottom: 6px;
        padding:10px 22px;
        .project-sum-left-container {
          display: flex;
          align-items: center;
          .project-sum-rect {
            width:8px;height: 8px;
            background-color: rgb(10,95,158);
            margin-right: 30px;
          }
        }

        .project-sum-status {
          width:10px;height: 10px;
          background-color: rgb(15,215,176);
          border-radius: 5px;
          &203 {
            background-color: @red-alert-color;
            box-shadow:0 0 3px @red-alert-color;
            animation: flash203 1s linear infinite;
          }
          &202 {
            background-color: @yellow-alert-color;
            box-shadow:0 0 3px @yellow-alert-color;
            animation: flash202 2s linear infinite;
          }
          &201 {
            background-color: @blue-alert-color;
            box-shadow:0 0 3px @blue-alert-color;
            animation: flash202 3s linear infinite;
          }
        }
      }
  }

  @keyframes flash203{
    0%{ opacity: 1;}
    50%{ opacity: 0.4;}
    100%{ opacity: 1;}
  }
  @keyframes flash202{
    0%{ opacity: 1;}
    50%{ opacity: 0.6;}
    100%{ opacity: 1;}
  }

  @keyframes flash201{
    0%{ opacity: 1;}
    50%{ opacity: 0.6;}
    100%{ opacity: 1;}
  }
</style>
