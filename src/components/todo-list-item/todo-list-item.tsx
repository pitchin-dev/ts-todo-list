type TodoItemProps = {
    todoItem: {
        id: number,
        label: string,
    }, 
}

function TodoListItem({todoItem: {id, label},}: TodoItemProps):JSX.Element {
    return (
        <li key={id} className="todo-list-item">{label}</li>
    );
}

export default TodoListItem;