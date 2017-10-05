export default {
    doneTodos(state){
        return state.todos.filter(todo => todo.done)
    },
    doneTodosCount(state){
    	return 1
    }
}