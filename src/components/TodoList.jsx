import { useSelector } from 'react-redux'

import { selectFilteredTodos } from '../redux/todosSlice'

import Todo from './Todo'

export default function TodoList() {
    const todos = useSelector(selectFilteredTodos)
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </div>
    )
}
