import React from 'react';

const DeleteLastItem = (props) => (
    <div>
        <button onClick={props.onDeleteLastItem} disabled={props.noItemsFound()}>
            Delete Last Item
        </button>
    </div>
);

export default DeleteLastItem;