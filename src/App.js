import { Route, Routes } from "react-router";
import "./App.css";

import MainComponent from "./components/MainComponent";
import PassedTodoList from "./components/PassedTodoList";
import NewTodoList from "./components/NewTodoList";
function App() {
  return (
    <div className=" max-w-[430px] m-auto  ">
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="passedtodolist" element={<PassedTodoList />} />
        <Route path="newtodolist" element={<NewTodoList />} />
      </Routes>
    </div>
  );
}

export default App;
