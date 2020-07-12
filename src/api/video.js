import request from '@/utils/request'

export function listVideos (projectId) {
  return request({
    url: `/projects/${projectId}/videos`,
    method: 'get'
  })
}
