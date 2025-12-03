import { useContext } from "react";
import TaskContext from "../context/task.context";
import type { TaskContextType } from "../types";
import TaskItem from "./task.item";

const TaskList = () => {
  const { tasks } = useContext<TaskContextType>(TaskContext);
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  );
};

export default TaskList;
