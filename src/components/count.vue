<template>
  <div class="hello">
  <p>{{ name }}</p>
  <p>{{ name1 }}</p>
  <p>//{{ count }}</p>
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
    <button @click="HIDE_LOADING">+</button>
    <button @click="decrement">-</button>
  </p>
doneTodosCount：<p>{{doneTodosCount}}</p>
  doneTodos：<p className="123" v-for="item in doneTodos">{{item.id}}</p>
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
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import _ from 'lodash'
window._ = _
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
  computed:{
      ...mapState({
      // 箭头函数可使代码更简练
        name: state => state.ruleForm.name,
        name1:function(state){
          return _.get(state, "ruleForm.name1");
        },
        count:  "count",
        obj: state => state.obj,
        isRed (){
          return this.$store.state.isRed
        }
      }),
      ...mapGetters([
      'doneTodosCount',
      'doneTodos'
    ])
      
  },
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
    // HIDE_LOADING () {
    //   this.$store.commit('HIDE_LOADING',5)
    //   // this.$store.commit('ADD_OBG')
    // },
    decrement () {
      this.$store.commit('decrement',{
        amount: 10
      })
    },
    ...mapMutations([
      'HIDE_LOADING', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

    ]),
    ...mapActions([
      'decrement', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
    ]),
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
