import * as types from './mutation-types'
import vuex from 'vuex'
export default {
    decrement ({commit}) {
    	// console.log(vuex.engine);
    	// var $ref = vuex.engine.$ref;
    	commit(types.decrement)
    }
}