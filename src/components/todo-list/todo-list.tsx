import React from 'react';

function TodoList():JSX.Element {
    return (
        <ul className="todo-list">
            <li className="todo-list-item">Item 1</li>
            <li className="todo-list-item">Item 2</li>
            <li className="todo-list-item">Item 3</li>
        </ul>
    );
}

export default TodoList;