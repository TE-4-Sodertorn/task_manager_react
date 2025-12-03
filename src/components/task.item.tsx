import type React from "react";
import { useContext } from "react";
import TaskContext from "../context/task.context";
import type { Task } from "../types";

const TaskItem: React.FC<Task> = ({ id, title, description, completed }) => {
  const { dispatch } = useContext(TaskContext);
  return (
    <li>
      {title} - {description} - {completed ? "Completed" : "Not Completed"}
      <button onClick={() => dispatch({ type: "REMOVE", payload: { id: id! } })}>Remove</button>
    </li>
  );
};

export default TaskItem;
