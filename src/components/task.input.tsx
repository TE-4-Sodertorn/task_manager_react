import React, { useContext, useState } from "react";
import TaskContext from "../context/task.context";
import type { Task, TaskContextType } from "../types";

const TaskInput = () => {
  const { dispatch } = useContext<TaskContextType>(TaskContext);
  const [task, setTask] = useState<Task>({
    id: "",
    completed: false,
    description: "",
    title: "",
  });

  console.log(task);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: task });
    setTask({
      completed: false,
      description: "",
      title: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={task.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        id="description"
        value={task.description}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
