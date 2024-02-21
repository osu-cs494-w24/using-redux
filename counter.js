/*
 * { count: 0 }
 */

import { createStore } from 'redux'

/*
 * Increment action
 *
 * { type: "INCREMENT", amount: 3 }
 */
function incrementAction(amount) {
    return {
        type: "INCREMENT",
        amount: amount
    }
}

/*
 * Decrement action
 *
 * { type: "DECREMENT", amount: 3 }
 */
function decrementAction(amount) {
    return {
        type: "DECREMENT",
        amount: amount
    }
}

/*
 * Reducer
 */
function counterReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                count: state.count + action.amount
            }
        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.amount
            }
        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log("== new state:", store.getState())
})

store.dispatch(incrementAction(3))
store.dispatch(incrementAction(5))
store.dispatch(decrementAction(2))
store.dispatch(incrementAction(1))
store.dispatch(decrementAction(4))
