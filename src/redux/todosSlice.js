import { createSlice } from '@reduxjs/toolkit'

import { filterValues, selectFilterValue } from './visibilityFilterSlice'

let currId = 1
const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        addTodo(state, action) {
            state.push({
                text: action.payload,
                completed: false,
                id: currId++
            })
        },
        toggleTodo(state, action) {
            const todo = state.find(t => t.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        }
    }
})

console.log("== slice:", todosSlice)
console.log("== addTodo:", todosSlice.actions.addTodo("This is a new todo"))

export default todosSlice.reducer
export const { addTodo, toggleTodo } = todosSlice.actions
export const selectTodos = todosSlice.selectSlice

export function selectFilteredTodos(state) {
    const todos = selectTodos(state)
    const filterValue = selectFilterValue(state)
    switch (filterValue) {
        case filterValues.showCompleted:
            return todos.filter(todo => todo.completed)
        case filterValues.showActive:
            return todos.filter(todo => !todo.completed)
        default:
            return todos
    }
}
