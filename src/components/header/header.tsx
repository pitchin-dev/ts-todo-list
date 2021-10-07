import React from 'react';

function Header():JSX.Element {
    return (
        <div className="header">
            <h1 className="header__title">ToDo List APP</h1>
            <p className="header__info">1 to do, 2 done</p>
        </div>
    );
}

export default Header;