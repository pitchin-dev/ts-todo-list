import React, {useState} from 'react';
import {data} from '../../mock';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import StatusFilter from '../status-filter/status-filter';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';

function App():JSX.Element {
    const [todos, setTodos] = useState(data);
    const todoCount = todos.length;
    const doneCount = todos.filter((item) => item.isDone).length;
    return (
        <div className="app">
            <Header todoCount={todoCount} doneCount={doneCount} />
            <SearchPanel />
            <StatusFilter />
            <TodoList todos={todos}/>
            <AddItem />
        </div>
    );
}

export default App;