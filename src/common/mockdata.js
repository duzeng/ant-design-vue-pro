import * as styles from '@/style/global-var.js'
// eslint-disable-next-line  no-unused-vars
import * as echarts from 'echarts'
import { rgba } from '@/utils/rgbHelper'
// eslint-disable-next-line no-unused-vars
import myProjects from './projects.json'
import { quickSort } from '@/utils/sort'

import MapOptionBuilder from './MapOptionBuilder'

 export const scrollBoard = {

      header: ['站点', '属性', '数据状态', '变化量', '速度', '加速度'],
      headerBGC: rgba(styles.mainThemeColor, 0.2),
      oddRowBGC: rgba(styles.mainThemeColor, 0.1),
      evenRowBGC: rgba(styles.mainThemeColor, 0.1),
      rowNum: 5,
      data: [
        ['GX-DB02', 'DX', 'OK', '2.38 mm', '0.45 mm/d', '-0.46 mm/d^2'],
        ['2号孔(9m)', 'DXY', 'OK', '0.35 mm', '0.06 mm/d', '-0.17 mm/d^2'],
        ['GX-DB02', 'DY', 'OK', '7.48 mm', '1.43 mm/d', '-1.12 mm/d^2'],
        ['一号点', 'DXY', 'OK', '0.60 mm', '0.18 mm/d', '-0.27 mm/d^2'],
        ['二号点', 'DXY', 'OK', '0.68 mm', '0.15 mm/d', '1.53 mm/d^2'],
        ['DB2', 'DX', 'OK', '-0.98 mm', '-0.14 mm/d', '0.13 mm/d^2'],
        ['5号孔(15m)', 'DX', 'OK', '-0.35 mm', '-0.05 mm/d', '0.14 mm/d^2']
      ],
      align: ['center', 'center', 'center']
    }

export const projectStats = [
  {
      number: 92,
      name: '边坡'
  },
  {
      number: 11,
      name: '桥梁'
  },
  {
      number: 3,
      name: '隧道'
  },
  {
      number: 3,
      name: '矿山'
  },
  {
      number: 2,
      name: '尾矿库'
  }
]
export const projects = [
 '水府庙大桥', '滑油洞尾矿库', '永定0401滑坡'
]

export const specialProjects = quickSort(myProjects.filter(item =>
  item.projectStatusCode !== 0 && item.projectStatusCode !== 300), { key: 'projectStatusCode', desc: true }).slice(0, 6)
export const pieChart = {

  legend: {
    left: 10,
    bottom: 20,
    itemGap: 32,
    itemWidth: 13,
    itemHeight: 13,
    textStyle: {
      color: '#fff'
    },
    data: ['地表位移', '深部位移', '降雨量', '地下水位', '应力', '压力']
  },
  colors: ['rgb(15,215,176)', // 绿
    'rgb(229,64,66)', // 红
    'rgb(21,92,238)', // 深蓝
    'rgb(235,180,33)', // 黄
    'rgb(100,216,48)',
    'rgb(6,157,251)', // 浅蓝
    'rgb(120,98,255)', // 紫
    'rgb(41,187,255)',
    'rgb(17,235,249)'
  ],
  series: [
    {
        name: '测点类型',
        type: 'pie',
        radius: ['40%', '60%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          position: 'outside',
          alignTo: 'edge',
          margin: '10%',
          formatter: function (params) {
            // '{b}(个) {d}%'
            return [
                `{desc|${params.name}}`,
                `{number|${params.percent}%}`
            ].join('\n')
          },
          rich: {
            desc: {
              color: styles.descTextColor,
              fontSize: 14
            },
            number: {
              color: '#fff',
              fontSize: 14,
              marginTop: 11
            }
          }
        },
        labelLine: {
          length: 25,
          length2: 30,
          lineStyle: {
            color: styles.descTextColor
          }
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
            }
        },
        data: [
          { name: '地表位移', value: 139 },
          { name: '深部位移', value: 353 },
          { name: '降雨量', value: 292 },
          { name: '地下水位', value: 172 },
          { name: '应力', value: 379 },
          { name: '压力', value: 459 }
        ]
    },
    {
      name: 'title',
      type: 'pie',
      label: {
        show: true,
        position: 'center',
        formatter: function (params) {
          return [
            `{number|${params.value}}`,
            `{desc|${params.name}}`
        ].join('\n')
        },
        rich: {
          number: {
            color: styles.lightNumberColor,
            fontSize: 45,
            fontFamily: 'led regular',
            lineHeight: 60
          },
          desc: {
            color: styles.descTextColor,
            fontSize: 20
          }

        }
      },

      radius: ['59.99%', '60%'],
      data: [
        { name: '测点总数', value: 2565 }
      ]
    }
]
}

// eslint-disable-next-line no-unused-vars
function generateLinesDatas (arrs, toCoord) {
  return arrs.map(item => {
    return {
      coords: [
        [item.longitude, item.latitude],
        toCoord
      ],
      lineStyle: {
        normal: {
          color: styles.lightNumberColor,
          width: Math.floor(Math.random() * 10), // 尾迹线条宽度
          opacity: 0.01, // 尾迹线条透明度
          curveness: 0.2 // 尾迹线条曲直度
        }
      }
    }
  })
}

// eslint-disable-next-line no-unused-vars
function generateScatterDatas (arrs) {
  return arrs.map(item => {
        return [item.longitude, item.latitude, 1]
  })
}

export const mapOptions = [new MapOptionBuilder({ center: [113.004, 27.515] })
.effectScatter(generateScatterDatas(myProjects), '#b0eeff')
.build(),

  new MapOptionBuilder({ center: [113.004, 27.515] })
.effectScatter([[113.004, 27.515, 1]], '#b0eeff')
.lines([{ coords: [[114, 28], [113.004, 27.515]] }, ...generateLinesDatas(myProjects, [113.004, 27.515])], styles.lightNumberColor)
.build()
]
