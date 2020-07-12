import Mock from 'mockjs2'
import { builder } from '../util'

//
const videos = [
    { 'videoID': 12, 'videoCode': 'TJHYD_VID_01', 'videoName': '清水坝1号点', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/DS-2CD3T27EDWD-L20190127AACHC90900161', 'stationID': 963, 'station': { 'stationID': 963, 'stationCode': 'TJHYD_VID_01', 'stationName': '清水坝1号', 'projectID': 58, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '0', 'reservedField2': '人工', 'isBased': null }, 'isShow': true },
    { 'videoID': 13, 'videoCode': 'TJHYD_VID_02', 'videoName': '基础坝1号点', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/DS-2CD3T27EDWD-L20190410AACHD06934820', 'stationID': 964, 'station': { 'stationID': 964, 'stationCode': 'TJHYD_VID_02', 'stationName': '基础坝1号', 'projectID': 58, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '0', 'reservedField2': '人工', 'isBased': null }, 'isShow': true },
    { 'videoID': 7, 'videoCode': 'GXZML_VID_PTZ01', 'videoName': '钟马高速1号', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/iDS-2DF8437I5X-AFW-SP20190505CCCHD16285056X', 'stationID': 957, 'station': { 'stationID': 957, 'stationCode': 'GXZML_VID_PTZ01', 'stationName': '钟马高速1号', 'projectID': 56, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '1', 'reservedField2': '人工', 'isBased': null }, 'isShow': true },
    { 'videoID': 8, 'videoCode': 'GXZML_VID_PTZ03', 'videoName': '钟马高速3号', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/iDS-2DF8437I5X-AFW-SP20190506CCCHD16285058X', 'stationID': 958, 'station': { 'stationID': 958, 'stationCode': 'GXZML_VID_PTZ03', 'stationName': '钟马高速3号', 'projectID': 56, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '1', 'reservedField2': '人工', 'isBased': null }, 'isShow': true },
    { 'videoID': 9, 'videoCode': 'GXZML_VID_PTZ02', 'videoName': '钟马高速2号', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/iDS-2DF8437I5X-AFW-SP20190505CCCHD16285057X', 'stationID': 959, 'station': { 'stationID': 959, 'stationCode': 'GXZML_VID_PTZ02', 'stationName': '钟马高速2号', 'projectID': 56, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '1', 'reservedField2': '人工', 'isBased': null }, 'isShow': true },
    { 'videoID': 15, 'videoCode': 'XT_VID_PTZ01', 'videoName': '湘潭天易经开区一号视频点', 'videoURL': 'wss://server.zhilicloud.net:18443/camera/DS-2DC6420IW-A20191105AACHD82071265W', 'stationID': 1057, 'station': { 'stationID': 1057, 'stationCode': 'XT_VID_01', 'stationName': '湘潭天易经开区一号视频点', 'projectID': 93, 'longitude': null, 'latitude': null, 'stationTypeID': 9, 'alarmServerStatus': '1', 'reservedField2': '自动', 'isBased': null }, 'isShow': true }
  ]

Mock.mock(/\/api\/projects\/(\d+)\/videos/, 'get', (options) => {
  const reg = /\/api\/projects\/(\d+)\/videos/
  const result = reg.exec(options.url)
  const id = parseInt(result[1])

  return builder(videos.filter(item => item.station.projectID === id))
})
