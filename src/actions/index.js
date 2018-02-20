import * as api from '../api'

export const createTask = ({title, description, status = 'Unstarted'}) => {
    return (dispatch) => {
        api.createTask({title, description, status}).then(resp => {
            dispatch(createTaskSucceeded(resp.data))
        })
    }
}

export const createTaskSucceeded = (task) => {
    return {
        type: 'CREATE_TASK_SUCCEEDED',
        payload: {
            task
        }
    }
}

export function fetchTasks() {
    return (dispatch) => {
        api.fetchTasks().then(resp => {
            dispatch(fetchTaskSucceeded(resp.data))
        })
    }
}

export function fetchTaskSucceeded(tasks) {
    return {
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks
        }
    }
}

export const changeTaskStatus = (id, params = {}) => {
    return {
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
    }
}
