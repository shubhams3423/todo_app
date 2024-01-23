import React from "react";
import TopMenu from "./TopMenu";
import TaskContainer from "./TaskContainer";
import { useTodo } from "./ContextProvider";

const MainComponent = () => {
  const { theme } = useTodo();
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      }   h-screen overflow-hidden flex flex-col`}
    >
      <TopMenu />
      <TaskContainer />
    </div>
  );
};

export default MainComponent;
