import Vue from 'vue';
import Vuex from 'vuex';
import {SHOW_LOADING,HIDE_LOADING,ADD_OBG} from './type';
Vue.use(Vuex);

const state = {
	count:2,  
	isRed:true,
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

const mutations = {
    increment (state, n) {
        state.count += n
    },
    decrement (state, payload) {
        state.count -= payload.amount
      },
    red: state => {
    	state.isRed = true
    },
    notRed :state => {
    	state.isRed = false
    },
    [ADD_OBG] (){
        console.log(123)
        Vue.set(state.obj, 'newProp', 123)
    }
  }
const getters = {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
        return getters.doneTodos.length
      }
  }

const actions={
	
}


export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
