import * as api from '../api'

export const createTask = ({title, description}) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            title,
            description,
            status: "Unstarted"
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

export function fetchTaskSucceeded(tasks) {
    return {
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks
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
