import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
Vue.use(Vuex);

const state = {
	count:2,  
	isRed:true,
  ruleForm:{
    name:'myname'
  },
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'aaa', done: true },
      { id: 3, text: 'bbb', done: false },
      { id: 4, text: 'ccc', done: false },
    ],
    obj: {
      FirstName: 'John',
      LastName: 'Doe',
      Age: 30
    }
  }

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
