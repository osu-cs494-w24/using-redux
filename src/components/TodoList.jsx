import { useSelector } from 'react-redux'

import { selectTodos } from '../redux/todosSlice'

import Todo from './Todo'

export default function TodoList() {
    const todos = useSelector(selectTodos)
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </div>
    )
}
