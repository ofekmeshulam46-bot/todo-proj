const { createStore } = Redux

export const SET_TODOS = "SET_TODOS"
export const REMOVE_TODO = "REMOVE_TODO"

const initialState = {
  count: 46,
  todos: [],
  isLoading: false,
  filterBy: [],
}

export function appReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case SET_TODOS:
      return { ...state, todos: cmd.todos }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== cmd.todoId),
      }
    default:
      return state
  }
}

export const store = createStore(appReducer)
