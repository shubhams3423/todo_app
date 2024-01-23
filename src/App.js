import { Route, Routes } from "react-router";
import "./App.css";

import MainComponent from "./components/MainComponent";
import PassedTodoList from "./components/PassedTodoList";
function App() {
  return (
    <div className=" max-w-[430px] m-auto  ">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="passedtodolist" element={<PassedTodoList />} />
        <Route path="taskList" element={<MainComponent />} />
      </Routes>
    </div>
  );
}

export default App;
