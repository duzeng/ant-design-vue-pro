import request from '@/utils/request'

export function listAllProjects () {
  return request({
    url: '/projects',
    method: 'get'
  })
}

export function listProjectStats () {
  return request({
    url: '/projects/stats',
    method: 'get'
  })
}

export function listSpecialProjects () {
  return request({
    url: '/specialProjects',
    method: 'get'
  })
}
