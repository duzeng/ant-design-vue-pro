import VeLine from 'v-charts/lib/line.common'
import VeBar from 'v-charts/lib/bar.common'
import VePie from 'v-charts/lib/pie.common'
import VeBmap from 'v-charts/lib/bmap.common'
import VeAmap from 'v-charts/lib/amap.common'
export default function install (Vue) {
  Vue.component(VeLine.name, VeLine)
  Vue.component(VeBar.name, VeBar)
  Vue.component(VePie.name, VePie)
  Vue.component(VeBmap.name, VeBmap)
  Vue.component(VeAmap.name, VeAmap)
}
