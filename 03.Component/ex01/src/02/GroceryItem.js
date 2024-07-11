import React from 'react';

function GroceryItem({name, count}) {
    //name += "!!!"; 가능
    return (
        <li>
            <strong>{name}</strong>
            <span>{count}</span>
        </li>
    );
}

export default GroceryItem;