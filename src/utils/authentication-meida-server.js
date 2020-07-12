// const url = require('url');
import { md5 } from '@/utils/crypto-util'
import { timestampByYears } from '@/utils/date-util'

export function authenticate (rtmpUrlString, privatekey, type) {
  const tempUrl = new URL(rtmpUrlString)
  const tempPath = tempUrl.pathname
  //* 时间戳
  const timestamp = timestampByYears(new Date(), 1)
  const abc = `${tempPath}-${timestamp}-${privatekey}`
  const hashValue = md5(abc)
  if (type === 'flv') {
    tempUrl.href += '.flv'
  }
  tempUrl.searchParams.append('sign', `${timestamp}-${hashValue}`)
  return tempUrl.href
}

export const privatekey = 'rushstreaminggo@405A'
