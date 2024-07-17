import React from 'react';
import {Task_List} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList(props) {
    return (
        <div className={Task_List}>
            <ul>
                <Task />
            </ul>
        </div>
    );
}

export default TaskList;