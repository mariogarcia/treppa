let __id=1;

export function uniqueId() {
    return __id++;
}

export function createTask({title, description}) {
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
