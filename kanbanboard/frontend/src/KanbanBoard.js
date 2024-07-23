import React, {useState, useEffect} from 'react';
import CardList from './CardList'
import {Kanban_board} from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
    const [cards, setCards] = useState([]);
    const toDoList = cards.filter(card => card.status === 'ToDo');
    const doingList = cards.filter(card => card.status === 'Doing');
    const doneList = cards.filter(card => card.status === 'Done');
    
    const fetchCards = async () => {
        try {
            const response = await fetch(`/api`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if(!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }

            const json = await response.json();

            if(json.result !== 'success') {
                throw new Error(json.message);
            }
            setCards(json.data);
        } catch(err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className={Kanban_board}>
            <CardList title="To DO" cards={toDoList} /> 
            <CardList title="Doing" cards={doingList} /> 
            <CardList title="Done" cards={doneList} /> 
        </div>
    );
}

export default KanbanBoard;