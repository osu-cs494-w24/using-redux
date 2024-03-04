import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './todosSlice'
import visibilityFilterReducer from './visibilityFilterSlice'

const store = configureStore({
    reducer: {
        todos: todosReducer,
        visibilityFilter: visibilityFilterReducer
    }
})

store.subscribe(() => {
    console.log("== store:", store.getState())
})

export default store
