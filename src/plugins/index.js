import DataV from './data-v-plugin.js'
import VChartsPlugin from './v-chart-plugin'
import SvgIconPlugin from './svg-icon-plugin'

export default (Vue) => {
  Vue.use(DataV)
  Vue.use(VChartsPlugin)
  Vue.use(SvgIconPlugin)
}
