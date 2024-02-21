import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
        <div>
            {todos.map(todo => <Todo key={todo.id} {...todo} />)}
        </div>
    )
}
