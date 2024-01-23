import React from "react";
import AddNewTaskButtton from "./AddNewTaskButtton";
import { useTodo } from "./ContextProvider";
import SingleTask from "./SingleTask";

const TaskContainer = () => {
  const { theme } = useTodo();
  return (
    <div
      className={`${
        theme === "light" ? "bg-[#d9d8db8f]" : "bg-[#252b2ed1]"
      } rounded-t-2xl p-4 grow flex flex-col gap-y-2`}
    >
      <AddNewTaskButtton />
      <div className={` rounded-2xl h-full`}>
        <div className={`flex items-center text-white mb-1`}>
          <div
            className={`w-4 h-4 ${
              theme === "light" ? "bg-[#32ffe280]" : "bg-[#b9f1e8]"
            } mr-3 font-bold  rounded flex items-center justify-center`}
          >
            <p
              className={`${
                theme === "light" ? "bg-[#009ce3]" : "bg-[#00ffde]"
              } rounded-sm  h-[6px] w-[6px]`}
            ></p>
          </div>
          <h5
            className={`${
              theme === "light" ? "text-black" : "text-white"
            } font-semibold `}
          >
            Todo
          </h5>
        </div>
        <div className=" h-full relative">
          <SingleTask />
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
