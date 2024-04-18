import * as type from "./type";

// List all tasks

export const listAllTasks = () => ({
    type : type.LIST_TASKS,
})

// Create a new task
export const addTask = newTask => ({
    type : type.CREATE_TASK,
    newTask
})

// Update a task
export const updateTask = (id,updatedTask) => ({
    type : type.UPDATE_TASK,
    id,
    updatedTask,
})

// Delete a task
export const deleteTaskById = id => ({
    type : type.DELETE_TASK,
    id
})
