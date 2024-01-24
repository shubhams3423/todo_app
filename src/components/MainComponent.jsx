import React, { useEffect } from "react";
import TopMenu from "./TopMenu";
import TaskContainer from "./TaskContainer";
import { useTodo } from "./ContextProvider";
import moment from "moment";

const MainComponent = () => {
  const { theme } = useTodo();
  useEffect(() => {
    const response = localStorage.getItem("dates");

    if (response === null)
      localStorage.setItem(
        "dates",
        JSON.stringify([moment().format("MMM Do YY")])
      );
    if (
      response !== null &&
      !JSON.parse(response).includes(moment().format("MMM Do YY"))
    ) {
      localStorage.setItem(
        "dates",
        JSON.stringify([...JSON.parse(response), moment().format("MMM Do YY")])
      );
    }
  }, []);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-black" : "bg-white"
      }   h-screen overflow-hidden flex flex-col m-auto`}
    >
      <TopMenu />
      <TaskContainer />
    </div>
  );
};

export default MainComponent;
