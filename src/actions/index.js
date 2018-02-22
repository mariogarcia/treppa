import * as api from '../api'
import { CALL_API } from '../middleware/api'

export const FETCH_TASKS_REQUEST = 'FETCH_TASKS_REQUEST'
export const FETCH_TASKS_SUCCEEDED = 'FETCH_TASKS_SUCCEEDED'
export const FETCH_TASKS_FAILED = 'FETCH_TASKS_FAILED'

export const CREATE_TASKS_REQUEST = 'CREATE_TASKS_REQUEST'
export const CREATE_TASKS_SUCCEEDED = 'CREATE_TASKS_SUCCEEDED'
export const CREATE_TASKS_FAILED = 'CREATE_TASKS_FAILED'

export const EDIT_TASKS_REQUEST = 'EDIT_TASKS_REQUEST'
export const EDIT_TASKS_SUCCEEDED = 'EDIT_TASKS_SUCCEEDED'
export const EDIT_TASKS_FAILED = 'EDIT_TASKS_FAILED'

export const createTask = ({title, description, status = 'Unstarted'}) => {
    return {
        [CALL_API]: {
            types: [
                CREATE_TASKS_REQUEST,
                CREATE_TASKS_SUCCEEDED,
                CREATE_TASKS_FAILED
            ],
            endpoint: '/task',
            method: 'POST',
            body: {
                title,
                description,
                status
            }
        }
    }
}

export const fetchTasks = () => {
    return {
        [CALL_API]: {
            types: [
                FETCH_TASKS_REQUEST,
                FETCH_TASKS_SUCCEEDED,
                FETCH_TASKS_FAILED
            ],
            endpoint: '/task',
            method: 'GET'
        }
    }
}

export const editTask = (id, params = {}) => {
    return {
        [CALL_API]: {
            types: [
                EDIT_TASKS_REQUEST,
                EDIT_TASKS_SUCCEEDED,
                EDIT_TASKS_FAILED
            ],
            endpoint: '/task',
            method: 'PUT',
            body: {
                ...params,
                id
            }
        }
    }
}
