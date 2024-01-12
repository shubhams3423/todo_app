import { Route, Routes } from "react-router";
import "./App.css";
import NewTodoList from "./components/NewTodoList";
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NewTodoList />} />
        <Route path="taskList" element={<MainComponent />} />
      </Routes>
    </>
  );
}

export default App;
