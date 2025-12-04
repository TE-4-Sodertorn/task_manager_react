import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useTaskContext } from "../hooks/use.task";
import type { TaskDraft } from "../types";

const TaskInput = () => {
  const { dispatch } = useTaskContext();
  const [task, setTask] = useState<TaskDraft>({
    completed: false,
    description: "",
    title: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const field = name as "title" | "description";
    setTask((prevTask) => ({
      ...prevTask,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!task.title.trim()) {
      return;
    }

    dispatch({
      type: "ADD",
      payload: {
        ...task,
        title: task.title.trim(),
        description: task.description.trim(),
      },
    });
    setTask({
      completed: false,
      description: "",
      title: "",
    });
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter a task title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Add a bit more detail"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
