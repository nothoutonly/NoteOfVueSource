// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

let childComp = {
  template: '<div>{{msg}}</div>',
  created () {
    console.log('child created')
  },
  mounted () {
    console.log('child mounted')
  },
  data () {
    return {
      msg: 'Hello Vue'
    }
  }
}

Vue.mixin({
  created () {
    console.log('parent created')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(childComp)
})
