import React, { useEffect } from "react";
import TopMenu from "./TopMenu";
import TaskContainer from "./TaskContainer";
import { useTodo } from "./ContextProvider";
import moment from "moment";

const MainComponent = () => {
  const { theme, date, setTasks, setTaskTypes, taskTypes } = useTodo();
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

    //getting stored data
    const storedTaskList = JSON.parse(localStorage.getItem(date)) || [];
    if (storedTaskList !== null) {
      setTasks(storedTaskList);
      //Initializing total tasks
      setTaskTypes(
        taskTypes.map((task, key) => {
          if (task.id === 1) {
            task.totalTasksCount = storedTaskList?.length;
            return task;
          } else return task;
        })
      );
      //Initializing completed tasks
      setTaskTypes(
        taskTypes.map((task, key) => {
          if (task.id === 2) {
            const completedTaskCount = storedTaskList
              .map((task, key) => task.isCompletedTask)
              .filter((task, key) => task !== false)?.length;
            task.completedTasks = completedTaskCount;
            return task;
          } else return task;
        })
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
