import type { Task, TaskAction, TaskState } from "../types";

export const TaskReducer = (state: TaskState, action: TaskAction): TaskState => {
  switch (action.type) {
    case "ADD": {
      const newTask: Task = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        completed: action.payload.completed,
      };
      return [...state, newTask];
    }
    case "REMOVE": {
      return state.filter((task) => task.id !== action.payload.id);
    }
    case "TOGGLE": {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    }
    default:
      return state;
  }
};
