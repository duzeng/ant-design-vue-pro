import SvgIcon from '@/components/SvgIcon' // svg component

function requireAllIcons (context) {
  const allModules = context.keys().map(context)
  return allModules
}

export default (Vue) => {
  Vue.component('svg-icon', SvgIcon)
  requireAllIcons(require.context('../assets/svgs', true, /\.svg$/))
}
