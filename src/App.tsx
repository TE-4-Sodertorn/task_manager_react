import { useReducer } from "react";
import "./App.css";
import TaskInput from "./components/task.input";
import TaskList from "./components/task.list";
import TaskContext from "./context/task.context";
import { TaskReducer } from "./reducers/task.reducer";
import type { TaskState } from "./types";

const initialTasks: TaskState = [];

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  console.log(tasks);
  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      <div>
        <h1>Task manager</h1>
        <hr />
        <TaskInput />
        <hr />
        <TaskList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;
