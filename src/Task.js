import React from 'react';
import { TASK_STATUSES } from './utils';
import './Task.css'

const TaskStatus = ({task, onStatusChange}) => {
    const changeStatus = (e) => {
        onStatusChange(task.id, e.target.value);
    }
    return (
        <select defaultValue={task.status} onChange={changeStatus}>
            {TASK_STATUSES.map(s => {
                return (<option key={s} value={s}>{s}</option>)
            })}
        </select>
    )
}

const Task = (props) => {
    return (
        <div className="task">
            <div className="task-header">
                <div>{props.task.title}</div>
                <span>
                    <TaskStatus
                        task={props.task}
                        onStatusChange={props.onStatusChange}/>
                </span>
            </div>
            <hr />
            <div className="task-body">{props.task.description}</div>
        </div>
    );
}

export default Task;
