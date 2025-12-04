import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";
import { TaskReducer } from "../reducers/task.reducer";
import type { TaskContextType, TaskState } from "../types";

const initialTasks: TaskState = [];

const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  return <TaskContext.Provider value={{ tasks, dispatch }}>{children}</TaskContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTaskContext must be used within a TaskProvider");
  }

  return context;
};

export default TaskContext;
