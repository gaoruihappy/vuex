import * as types from './mutation-types'

export default {
    [types.HIDE_LOADING](state) {
        console.log(123)
    	state.ruleForm.name = 'newname';
    }
}
