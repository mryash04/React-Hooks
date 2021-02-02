import React from 'react';
import "./Pagination.css";

const Pagination = (props) => {
    return (
        <div className="pagination">
            {props.gotoNextPage && <button onClick={props.gotoNextPage}>Next Page</button>}
            {props.gotoPrevPage && <button onClick={props.gotoPrevPage}>Prev Page</button>}
        </div>
    )
}

export default Pagination;