// import * as styles from '@/style/global-var.js'

export default class MapOptionBuilder {
  constructor ({ center }) {
    this.center = center
    this.series = []
  }

  effectScatter (data, color, dataIndex4LableName) {
    const obj = {
      type: 'effectScatter',
      coordinateSystem: 'bmap',
      symbolSize: (value, data) => value[2],
      itemStyle: {
        color: color,
        shadowBlur: 10,
        shadowColor: '#333'
      },
      showEffectOn: 'render',
      rippleEffect: {
        // scale: 3,
        brushType: 'stroke'
      },
      hoverAnimation: true,
      label: {
        formatter: (params) => {
          return params.data[dataIndex4LableName]
        },
        position: 'right',
        fontSize: 16,
        show: true
      },
      data: [
        ...data // 经度，纬度，value，...
      ]
    }

    this.serie(obj)
    return this
  }

  scatter (data, color) {
    const obj = {
      type: 'scatter',
      coordinateSystem: 'bmap',
      symbolSize: (value, params) => value[2],
      itemStyle: {
        color: color
      },
      data: [
        ...data
      ]
    }

    this.serie(obj)
    return this
  }

  /**
   *
   * @param {*} data
   *           //   {
          //   coords: [
          //     [114, 28],
          //     [113.004, 27.515]
          //   ]
          // }
   */
  lines (data, color) {
    const obj = {
          type: 'lines',
          coordinateSystem: 'bmap',
          symbol: 'circle',
          effect: {
            show: true,
            period: 4, // 箭头指向速度，值越小速度越快
            delay: 3000,
            trailLength: 0.2, // 特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'pin', // 箭头图标
            symbolSize: 5 // 图标大小
          },
          lineStyle: {
            normal: {
              color: color,
              width: 4, // 尾迹线条宽度
              opacity: 0.01, // 尾迹线条透明度
              curveness: 0.2 // 尾迹线条曲直度
            }
          },
          data: [
            ...data

        ]
        }

        this.serie(obj)
        return this
  }

  serie (data) {
    this.series.push(data)
    return this
  }

  build () {
    return {
      settings: {
        key: 'XcoBZG4BDwVpguHroSeN0TicUORIjScs',
        bmap: {
          map: 'china',
          center: this.center,
          zoom: 7,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                    color: '#044161'
                }
              },
              {
                featureType: 'land',
                elementType: 'all',
                stylers: {
                    color: '#132142'// '#004981'
                }
              },
              {
                featureType: 'boundary',
                elementType: 'geometry',
                stylers: {
                    color: '#064f85'
                }
              },
              {
                featureType: 'railway',
                elementType: 'all',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'highway',
                elementType: 'geometry',
                stylers: {
                    color: '#004981'
                }
              },
              {
                featureType: 'highway',
                elementType: 'geometry.fill',
                stylers: {
                    color: '#005b96',
                    lightness: 1
                }
              },
              {
                featureType: 'highway',
                elementType: 'labels',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry',
                stylers: {
                    color: '#004981'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                    color: '#00508b'
                }
              },
              {
                featureType: 'poi',
                elementType: 'all',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'green',
                elementType: 'all',
                stylers: {
                    color: '#056197',
                    visibility: 'off'
                }
              },
              {
                featureType: 'subway',
                elementType: 'all',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'manmade',
                elementType: 'all',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'local',
                elementType: 'all',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'arterial',
                elementType: 'labels',
                stylers: {
                    visibility: 'off'
                }
              },
              {
                featureType: 'boundary',
                elementType: 'geometry.fill',
                stylers: {
                    color: '#029fd4'
                }
              },
              {
                featureType: 'building',
                elementType: 'all',
                stylers: {
                    color: '#1a5787'
                }
              },
              {
                featureType: 'label',
                elementType: 'all',
                stylers: {
                    color: '#33569f',
                    fontSize: 11,
                    visibility: 'off'
                }
              }
            ]
        }
        }
      },
      tooltip: { show: true },
      series: this.series

    }
  }
}
