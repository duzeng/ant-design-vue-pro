import message from 'ant-design-vue/es/message'
// import defaultSettings from '../defaultSettings';
import themeColor from './themeColor.js'

// let lessNodesAppended
const colorList = [
  {
    key: '薄暮', color: '#F5222D'
  },
  {
    key: '火山', color: '#FA541C'
  },
  {
    key: '日暮', color: '#FAAD14'
  },
  {
    key: '明青', color: '#13C2C2'
  },
  {
    key: '极光绿', color: '#52C41A'
  },
  {
    key: '拂晓蓝（默认）', color: '#1890FF'
  },
  {
    key: '极客蓝', color: '#2F54EB'
  },
  {
    key: '酱紫', color: '#722ED1'
  },
  {
    key: '致力蓝', color: '#22ADD6'
  },
  {
    key: '致力橙', color: '#FE6608'
  },
  {
    key: '致力灰', color: '86898E'
  }
]

const updateTheme = newPrimaryColor => {
  const hideMessage = message.loading('正在切换主题！', 0)
  themeColor.changeColor(newPrimaryColor).finally(() => {
    setTimeout(() => {
      hideMessage()
    }, 10)
  })
}

const updateColorWeak = colorWeak => {
  // document.body.className = colorWeak ? 'colorWeak' : '';
  const app = document.body.querySelector('#app')
  colorWeak ? app.classList.add('colorWeak') : app.classList.remove('colorWeak')
}

export { updateTheme, colorList, updateColorWeak }
