import React from 'react';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card(props) {
    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${Card_Title_Open}`}>Stroy Board 작성</div>
            <div className='Card_Details'>
                기능 기반의 화면 목업 작업
                <TaskList />
            </div>
        </div>
    );
}

export default Card;