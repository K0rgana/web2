import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        task: 'start to add more tasks',
        status: false,
      }
    ],
  },
  getters:{
    
  },
  mutations: {
    add_todo(state, todo){
      state.todos.push({
        id: todo.id,
        task: todo.task,
        status: false,
      })
    },
    delete_todo(state, id) {
      const index = state.todos.findIndex(el => el.id == id)
      state.todos.splice(index, 1)
    },
  },
  actions: {
    addTodo(context, todo) {
      setTimeout(() => {
        context.commit('add_todo', todo)
      }, 100)
    },
    deleteTodo(context, id) {
      setTimeout(() => {
        context.commit('delete_todo', id)
      }, 100)
    }
  },
  modules: {
  }
})
