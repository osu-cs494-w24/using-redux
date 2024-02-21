import styled from '@emotion/styled'

const TodoContainer = styled.div`
    margin: 3px;
    text-decoration: ${props => props.completed && 'line-through'};
    button {
        margin-right: 5px;
    }
`

export default function Todo({ text, completed, id }) {
    return (
        <TodoContainer completed={completed}>
            <button>&#x2714;</button>
            {text}
        </TodoContainer>
    )
}
