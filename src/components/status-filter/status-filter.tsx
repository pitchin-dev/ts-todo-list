import React from 'react';

function StatusFilter():JSX.Element {
    return (
        <div className="status-filter__btn-group">
            <button className="status-filter__btn">
                All
            </button>
            <button className="status-filter__btn">
                Done
            </button>
            <button className="status-filter__btn">
                Important
            </button>
        </div>
    );
}

export default StatusFilter;