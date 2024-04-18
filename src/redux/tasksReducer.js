import * as type from "./type";

export default function tasksReducer(state=[],action){
    switch(action.type){
        case type.LIST_TASKS:
            return  [...state];   
        case type.CREATE_TASK:
            return  [...state, action.newTask];
        case type.UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updatedTask
                    };
                }
                return task;
            });
        case type.DELETE_TASK:
            return state.filter(task => task.id !== action.id);
        default:
            return state;
    }
}