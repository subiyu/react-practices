import React, {useState, useEffect} from 'react';
import {_Task, Task_Remove} from './assets/scss/Task.scss';

function Task({no, name, done, handleRemoveClick}) {
    const [isDone, setIsDone] = useState(done === 'Y');

    const handleCheckboxChange = async (event) => {
        const updatedDone = event.target.checked ? 'Y' : 'N';
        setIsDone(event.target.checked);

        try {
            const response = await fetch('/api/task', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    no,
                    done: updatedDone 
                })
            });

            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if (json.result !== 'success') {
                throw new Error(json.message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        setIsDone(done === 'Y');
    }, [done]);

    return (
        <li className={_Task}>
            <input
                type='checkbox'
                checked={isDone}
                onChange={handleCheckboxChange}
            />
            {name}
            <a href='#' className={Task_Remove} onClick={(e)=> {
                    e.preventDefault();
                    handleRemoveClick(no);
                    }} />
        </li>
    );
}

export default Task;