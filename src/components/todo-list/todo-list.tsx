import TodoListItem from '../todo-list-item/todo-list-item';

type TodoListProps = {
    todos: {
        id: number,
        label: string,
        isImportant: boolean,
        isDone: boolean,
    }[],
}

function TodoList({todos}: TodoListProps):JSX.Element {
    const items = todos.map((todoItem) => <TodoListItem todoItem={todoItem} />)
    return (
        <ul className="todo-list">
            {items}
        </ul>
    );
}

export default TodoList;