import React, {useState, useEffect} from 'react';
import {_Card, Card_Title, Card_Title_Open} from './assets/scss/Card.scss';
import TaskList from './TaskList';

function Card({card}) {
    const [isToggled, setIsToggled] = useState(false);
    const [tasks, setTasks] = useState([]);

    const handleClick = () => {
        setIsToggled(!isToggled);
    }

    const fetchTasks = async () => {
        try {
            const response = await fetch(`/api/task/${card.no}`, {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: null
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }
            setTasks(json.data);
        } catch (err) {
            console.error(err);
        }
    }

    const handleRemoveClick = async (no) => {
        try {
            const response = await fetch(`/api/task/${no}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();
            if (json.result !== 'success') {
                throw new Error(json.message);
            }
        } catch (err) {
            console.error('태스크 삭제 실패:', err);
        }
    };

    const handleAddTask = async (task) => {
        try {
            const response = await fetch('/api/task', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }

            setTasks(prevTasks => [
                ...prevTasks, task
            ]);
        } catch (err) {
            console.error('태스크 추가 실패:', err);
        }

    };

    useEffect(() => {
        if (isToggled) {
            fetchTasks();
        }
    }, [isToggled, card.no, tasks]);

    return (
        <div className={_Card}>
            <div className={`${Card_Title} ${false ? Card_Title_Open : ''}`} onClick={handleClick}>
                {card.title}
            </div>
            
            <div className='Card_Details'>
                {card.description}
                {isToggled && (
                    <TaskList tasks={tasks} handleRemoveClick={handleRemoveClick} handleAddTask={handleAddTask} cardNo={card.no}/>
                )}
            </div>
        </div>
    );
}

export default Card;