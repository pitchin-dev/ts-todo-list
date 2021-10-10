type HeaderProps = {
    todoCount: number,
    doneCount: number,
}

function Header({todoCount, doneCount}: HeaderProps):JSX.Element {
    return (
        <div className="header">
            <h1 className="header__title">ToDo List APP</h1>
            <p className="header__info">{todoCount} to do, {doneCount} done</p>
        </div>
    );
}

export default Header;