let __id=1;

export function uniqueId() {
    return __id++;
}

export const createTask = ({title, description}) => {
    return {
        type: 'CREATE_TASK',
        payload: {
            id: uniqueId(),
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
