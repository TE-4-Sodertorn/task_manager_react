import { useTaskContext } from "../hooks/use.task";
import type { Task } from "../types";

const TaskItem = ({ id, title, description, completed }: Task) => {
  const { dispatch } = useTaskContext();

  const toggleTask = () => dispatch({ type: "TOGGLE", payload: { id } });
  const removeTask = () => dispatch({ type: "REMOVE", payload: { id } });

  return (
    <li className={`task-item ${completed ? "task-item--done" : ""}`}>
      <label className="task-item__main">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleTask}
        />
        <div>
          <div className="task-item__title">{title}</div>
          <div className="task-item__description">{description}</div>
        </div>
      </label>
      <div className="task-item__actions">
        <span className="task-item__status">{completed ? "Done" : "Pending"}</span>
        <button
          type="button"
          onClick={removeTask}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
