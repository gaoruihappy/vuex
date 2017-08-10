
// 定义一个混合对象
<template>
<div>mixin{{msg}}</div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 'mymixin',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
// 定义一个使用混合对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})
var component = new Component() // -> "hello from mixin!"
</script>