import React from 'react';
import GroceryItem from './GroceryItem';

function GroceryList(props) {
    $.ajax({
        success: function() {
            GroceryList();
        }
    })
    return (
        <ol className={'grocery-list'}>
            {/*
                count: 수량  
            */}
            <GroceryItem name={'Milk'} count={10}/>
            <GroceryItem name={'Egg'} count={30}/>
            <GroceryItem name={'Bread'} count={20}/>
        </ol>
    );
}

export default GroceryList;