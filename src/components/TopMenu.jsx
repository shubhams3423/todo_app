import React from "react";
import Navbar from "./Navbar";
import TodoInfo from "./TodoInfo";
import TaskStatus from "./TaskStatus";
import { useTodo } from "./ContextProvider";

const TopMenu = () => {
  const { theme } = useTodo();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      } App px-3 pb-6 pt-4`}
    >
      <Navbar />
      <TodoInfo />
      <TaskStatus />
    </div>
  );
};

export default TopMenu;
