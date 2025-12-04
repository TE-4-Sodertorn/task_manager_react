import { useTaskContext } from "../context/task.context";
import TaskItem from "./task.item";

const TaskList = () => {
  const { tasks } = useTaskContext();

  if (!tasks.length) {
    return <p className="empty-state">No tasks yet. Add your first task above.</p>;
  }

  return (
    <ul className="task-list">
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
