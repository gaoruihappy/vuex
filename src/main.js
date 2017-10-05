// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';
import store from './store/store'
import Toast from './components/toast/index'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Toast)
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
Vue.directive('demo', {
  update: function (el, binding, vnode) {
  	// debugger
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'oldValue: '      + s(binding.oldValue) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  customOption: 'foo',
  created: function () {
    console.log(this.$options.customOption) // => 'foo'
    console.log(this.$options) // => 'foo'
  }
})

