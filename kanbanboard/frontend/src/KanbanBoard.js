import React from 'react';
import CardList from './CardList'
import {Kanban_board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    return (
        <div className={Kanban_board}>
            <CardList /> 
        </div>
    );
}

export default KanbanBoard;