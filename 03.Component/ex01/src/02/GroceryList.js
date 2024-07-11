import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList({groceries}) {
    // const groceryItems = [];
    // groceries.forEach((grocery) => {
    //     groceryItems.push(<GroceryItem name={grocery.name} count={grocery.count} />);
    // });

    // return (
    //     <ol className={'grocery-list'}>
    //         {groceryItems}
    //     </ol>
    // );

    return (
        <ol className={'grocery-list'}>
            {/*
                Warning: Each child in a list should have a unique "key" prop. => 해결 위해 key property 사용
            */}
            {groceries.map(e => <GroceryItem key = {e.no} name={e.name} count={e.count} />) }
        </ol>
    );
}

export default GroceryList;