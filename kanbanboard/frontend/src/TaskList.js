import React, {useRef} from 'react';
import {Task_List, Input_Add_Task} from './assets/scss/TaskList.scss';
import Task from './Task';

function TaskList({tasks, handleRemoveClick, handleAddTask, cardNo}) {
    const inputRef = useRef(null);

    return (
        <div className={Task_List}>
            <ul>
                {
                    tasks?.map(task => <Task
                                        key={task.no}
                                        no={task.no}
                                        name={task.name}
                                        done={task.done}
                                        handleRemoveClick={handleRemoveClick} />)
                }
            </ul>
            <input ref={inputRef} className={Input_Add_Task} type='text' placeholder='태스크 추가'
                onKeyDown={(e) => {
                    if(e.key==="Enter") {
                        handleAddTask({
                            name:e.target.value,
                            cardNo: cardNo
                        })
                    }
                }}>
            </input>
        </div>
    );
}

export default TaskList;