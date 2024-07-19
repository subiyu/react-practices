import React from 'react';
import CardList from './CardList'
import {Kanban_board} from './assets/scss/KanbanBoard.scss';
import cards from './assets/json/data';

function KanbanBoard() {
    const toDoList = cards.filter(card => card.status === 'ToDo');
    const doingList = cards.filter(card => card.status === 'Doing');
    const doneList = cards.filter(card => card.status === 'Done');

    console.log(doingList);

    return (
        <div className={Kanban_board}>
            <CardList title="To DO" cards={toDoList} /> 
            <CardList title="Doing" cards={doingList} /> 
            <CardList title="Done" cards={doneList} /> 
        </div>
    );
}

export default KanbanBoard;