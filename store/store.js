import { userService } from "../services/user.service.js"

const { createStore } = Redux

export const SET_TODOS = "SET_TODOS"
export const REMOVE_TODO = "REMOVE_TODO"
export const ADD_TODO = "ADD_TODO"
export const SET_USER = "SET_USER"

const initialState = {
  todos: [],
  loggedinUser: userService.getLoggedinUser(),
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
    case ADD_TODO:
      return { ...state, todos: [...state.todos, cmd.todo] }

    case SET_USER:
      return { ...state, loggedinUser: cmd.loggedinUser }

    default:
      return state
  }
}

export const store = createStore(appReducer)
