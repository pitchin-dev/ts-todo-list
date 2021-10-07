import React from 'react';

function AddItem():JSX.Element {
    return (
        <form className="add-item">
            <input type="text" className="add-item-input" placeholder="Type to add" />
            <button className="add-item-btn">Add</button>
        </form>
    );
}

export default AddItem;