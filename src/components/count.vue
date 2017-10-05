<template>
  <div class="hello">
  <p>{{ name }}</p>
  <p>{{ count }}</p>
  <p  @click="pClick">
  asdf
  asdf
  asdf
  asdf
  asdf
  </p>
  <p v-on:click="pClick()">
  {{as}}
  </p>
  <p :class="isRed?'a':'b'" >
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  <p>{{doneTodosCount}}</p>
  <p v-for="item in doneTodos">{{item.id}}</p>
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
      ruleForm:{
        name:'oldname'
      }
    }
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    name: state => state.ruleForm.name,
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
      this.$store.commit('HIDE_LOADING',5)
      // this.$store.commit('ADD_OBG')
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
</style>
