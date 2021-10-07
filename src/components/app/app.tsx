import React from 'react';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';
import StatusFilter from '../status-filter/status-filter';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';

function App():JSX.Element {
    return (
        <div className="app">
            <Header />
            <SearchPanel />
            <StatusFilter />
            <TodoList />
            <AddItem />
        </div>
    );
}

export default App;