import React from 'react';
import GroceryItem from './GroceryItem';
import {Grocery_List} from './assets/scss/GroceryList.scss';

function GroceryList({groceries}) {
    return (
        <ol className={Grocery_List}>
            {/*
                Warning: Each child in a list should have a unique "key" prop. => 해결 위해 key property 사용
            */}
            {groceries.map(e => <GroceryItem key={e.no} name={e.name} count={e.count} />) }
        </ol>
    );
}

export default GroceryList;