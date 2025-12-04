import type { ReactNode } from "react";
import { createContext, useReducer } from "react";
import { TaskReducer } from "../reducers/task.reducer";
import type { TaskContextType, TaskState } from "../types";

const initialTasks: TaskState = [];

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
};

export default TaskContext;
