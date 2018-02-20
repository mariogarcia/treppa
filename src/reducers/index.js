export default function tasks(state = {tasks: []}, action) {
    switch(action.type) {
      case 'CREATE_TASK_SUCCEEDED':
        return {
            tasks: state.tasks.concat(action.payload.task)
        }

      case 'EDIT_TASK':
        const { payload } = action;
        const tasks = state.tasks.map(task => {
            if (task.id === payload.id) {
                return {
                    ...task,
                    ...payload.params
                }
            } else {
                return task;
            }
        });

        return {
            tasks: tasks
        }

      case 'FETCH_TASKS_SUCCEEDED':
        return {
            tasks: action.payload.tasks
        };

      case 'EDIT_TASKS_SUCCEEDED':
        return {
            tasks: action.payload.tasks
        };

      default:
        return state
    }
}
