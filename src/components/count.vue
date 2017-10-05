<template>
  <div class="hello">
  <input v-focus>
  <div  v-demo:hello.a.b="message"></div>
  <p>{{ count }}</p>
  <p  @click="pClick">
  asdf
  </p>
  <p v-on:click="pClick()">
  {{as}}
  </p>
  <p :class="isRed?'a':'b'" >是红色吗
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  count数量<p>{{doneTodosCount}}</p>
  count.id==trued的id<p v-for="item in doneTodos">{{item.id}}</p>
  <ul id="repeat-object" class="demo">
    <li v-for="value in obj">
      {{ value }}
    </li>
  </ul>
  <div v-for="(value, key, index) in obj">
    {{ index }}. {{ key }} : {{ value }}
  </div>
  </div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
  name:'count',
  data (){
    return {
      as:23,
      message: 'hello!'
    }
  },

  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,
    obj: state => state.obj,
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    },
    doneTodos (){
      return this.$store.getters.doneTodos
    },
    isRed (){
      return this.$store.state.isRed
    }
  }),
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   },
  //   isRed (){
  //     return this.$store.state.isRed
  //   }
  // },
  methods: {
    pClick : function (){
      this.$store.state.isRed = false;
    },
    increment () {
      console.log(this.$options)
      this.message="新修改"
      this.$toast('asd');
      this.$store.commit('increment',5)
      this.$store.commit('ADD_OBG')
    },
    decrement () {
      this.$store.commit('decrement',{
        amount: 10
      })
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.a{
  color:red;
}
</style>
