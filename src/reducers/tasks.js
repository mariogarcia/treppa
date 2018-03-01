const initialState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default function tasks(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_TASKS_REQUEST': return {
          ...state,
          isLoading: true
      };

      case 'FETCH_TASKS_SUCCEEDED': return {
          isLoading: false,
          tasks: action.payload.tasks
      };

      case 'FETCH_TASKS_FAILED': return {
          ...state,
          isLoading: false,
          error: action.payload.error
      };

      default: return state;
    }
}
