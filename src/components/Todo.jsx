import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

import { toggleTodo } from '../redux/todosSlice'

const TodoContainer = styled.div`
    margin: 3px;
    text-decoration: ${props => props.completed && 'line-through'};
    button {
        margin-right: 5px;
    }
`

export default function Todo({ text, completed, id }) {
    const dispatch = useDispatch()
    return (
        <TodoContainer completed={completed}>
            <button
                onClick={() => dispatch(toggleTodo(id))}
            >&#x2714;</button>
            {text}
        </TodoContainer>
    )
}
