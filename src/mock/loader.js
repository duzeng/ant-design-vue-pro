const fs = require('fs')
const path = require('path')

export default (dir) => {
  // const dir = __dirname
  // eslint-disable-next-line
  const self = __filename.substring(__dirname.length + 1) 
  const files = fs.readdirSync(dir)// fs.readdirSync(path.join(dir, 'services'))
  const reg = /\.js$/

  files.filter(item => reg.test(item)).forEach(item => {
    require(path.resolve(dir, item))
  })
}
