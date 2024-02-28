import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './todosSlice'

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

store.subscribe(() => {
    console.log("== store:", store.getState())
})

export default store
