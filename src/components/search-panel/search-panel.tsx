import React from 'react';

function SearchPanel():JSX.Element {
    return (
        <form className="search__form">
            <input type="text" className="search__input" placeholder="Type to search"/>
        </form>
    );
}

export default SearchPanel;