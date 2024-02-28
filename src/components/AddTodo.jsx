import { useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

import { addTodo } from '../redux/todosSlice'

const AddTodoForm = styled.form`
    margin: 3px;
    button {
        margin-right: 5px;
    }
`

export default function AddTodo() {
    const [ text, setText ] = useState("")
    const dispatch = useDispatch()
    return (
        <AddTodoForm onSubmit={(e) => {
            e.preventDefault()
            console.log("Added new todo:", text)
            dispatch(addTodo(text))
            setText("")
        }}>
            <button>+</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </AddTodoForm>
    )
}
