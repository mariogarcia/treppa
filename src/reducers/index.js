export default function tasks(state = {tasks: []}, action) {
    switch(action.type) {
      case 'EDIT_TASKS_SUCCEEDED':
        return {
            isLoading: false,
            tasks: action.payload.tasks
        };

      case 'CREATE_TASK_SUCCEEDED':
        return {
            isLoading: false,
            tasks: state.tasks.concat(action.payload.task)
        }

      case 'FETCH_TASKS_REQUEST':
        return {
            isLoading: true,
            tasks: []
        }

      case 'FETCH_TASKS_SUCCEEDED':
        return {
            isLoading: false,
            tasks: action.payload.tasks
        };

      case 'FETCH_TASKS_FAILED':
        return {
            isLoading: false,
            error: action.payload.error,
            tasks: []
        };
      default:
        return state
    }
}
