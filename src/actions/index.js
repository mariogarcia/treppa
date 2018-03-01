export const fetchTasks = () => {
    return {
        type: 'FETCH_TASKS_REQUEST',
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

export function fetchTasksFailed(error) {
    return {
        type : 'FETCH_TASKS_FAILED',
        payload: {
            error
        }
    }
}
