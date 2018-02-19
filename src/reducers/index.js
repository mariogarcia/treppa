import { uniqueId } from '../actions'

const mockTasks = [
    {
        id: uniqueId(),
        title: "Learn Redux",
        description: "The store, actions, and reducers, oh my!",
        status: "In Progress"
    },
    {
        id: uniqueId(),
        title: "Peace on Earth",
        description: "No big deal",
        status: "In Progress"
    }
];

export default function tasks(state = {tasks: mockTasks}, action) {
    switch(action.type) {
      case 'CREATE_TASK':
        return {
            tasks: state.tasks.concat(action.payload)
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
        return { tasks: tasks }

      default:
        return state
    }
}
