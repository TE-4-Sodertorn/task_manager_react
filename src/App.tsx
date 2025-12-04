import "./App.css";
import TaskInput from "./components/task.input";
import TaskList from "./components/task.list";
import { TaskProvider } from "./context/task.context";

function App() {
  return (
    <TaskProvider>
      <main className="app">
        <header className="app__header">
          <h1>Task manager</h1>
          <p>Shared state handled with React context + reducer.</p>
        </header>
        <TaskInput />
        <TaskList />
      </main>
    </TaskProvider>
  );
}

export default App;
