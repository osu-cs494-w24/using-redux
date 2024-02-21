import { useState } from 'react'
import styled from '@emotion/styled'

const AddTodoForm = styled.form`
    margin: 3px;
    button {
        margin-right: 5px;
    }
`

export default function AddTodo() {
    const [ text, setText ] = useState("")
    return (
        <AddTodoForm onSubmit={(e) => {
            e.preventDefault()
            console.log("Added new todo:", text)
            setText("")
        }}>
            <button>+</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </AddTodoForm>
    )
}
