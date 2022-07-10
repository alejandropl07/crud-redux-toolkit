import "./App.css";
import TaskForm from "./components/TaskForm";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>CRUD Redux Toolkit</h1>
      <TaskForm />
      <TasksList />
    </div>
  );
}

export default App;
