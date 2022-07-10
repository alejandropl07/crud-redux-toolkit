import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const { tasks } = useSelector((state) => state);
  console.log(tasks);
  return (
    <div className="App">
      <h1>CRUD Redux Toolkit</h1>
    </div>
  );
}

export default App;
