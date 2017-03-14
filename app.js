// import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './src/App.vue'
// import foo from './src/foo.vue'

Vue.use(ElementUI)
App.el = '#root'
// foo.el = '#root'

export default new Vue(App)
