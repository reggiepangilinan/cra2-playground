export type TodoModel = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export type TodosState = {
    todos: TodoModel[],
    error?: string,
    requestPending: boolean
};
