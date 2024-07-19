import React from 'react';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({card}) {
    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${Card_Title_Open}`}>{card.title}</div>
            <div className='Card_Details'>
                {card.description}
                <TaskList tasks={card.tasks}/>
            </div>
        </div>
    );
}

export default Card;