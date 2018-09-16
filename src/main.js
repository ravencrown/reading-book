import Vue from 'vue'
import App from './App'

// 生产环境下提示关闭
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'pages': [
      'pages/books/main'
    ],
    'window': {
      'navigationBarBackgroundColor': '#EA5149',
      'navigationBarTextStyle': 'black',
      'navigationBarTitleText': '渡鸦图书',
      'backgroundTextStyle': 'light'
    }
  }
}
