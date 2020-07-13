import Mock from 'mockjs2'
import { builder } from '../util'
import projects from './projects.json'
const projectStats = [
  {
      number: 302, // 92,
      name: '边坡'
  },
  {
      number: 31, // 11,
      name: '桥梁'
  },
  {
      number: 26, // 3,
      name: '隧道'
  },
  {
      number: 15, // 3,
      name: '矿山'
  },
  {
      number: 10, // 2,
      name: '尾矿库'
  }
]

Mock.mock(/\/api\/projects\/stats/, 'get', (options) => {
  return builder(projectStats)
})

Mock.mock(/\/api\/projects/, 'get', (options) => {
  return builder(projects)
})
