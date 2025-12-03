import { createContext } from "react";
import { type TaskContextType } from "../types";

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  dispatch: () => {},
});

export default TaskContext;
