const mockTasks = [
    {
        id: 1,
        title: "Learn Redux",
        description: "The store, actions, and reducers, oh my!",
        status: "In Progress"
    }
];

export default function tasks(state = {tasks: mockTasks}, action) {
    return state
}
