const { createStore } = Redux

// doesnt identify redux^

export const INCREMENT_BY = "INCREMENT_BY"

const initialState = {
  count: 46,
  toDos: [],
  isLoading: false,
  filterBy: [],
}

export function appReducer(state = initialState, cmd = {}) {
  switch (cmd.type) {
    case INCREMENT_BY:

    default:
      return state
  }
}

export const store = createStore(appReducer)
