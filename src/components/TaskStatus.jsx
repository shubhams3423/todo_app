import React from "react";
import { useTodo } from "./ContextProvider";

const TaskStatus = () => {
  const taskTypes = ["All Tasks"];
  const { totalTasks, completedTasks, theme } = useTodo();
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-x-2">
        {taskTypes.map((task, key) => {
          return (
            <div className="flex" key={key}>
              <h3
                className={`${
                  theme === "light" ? "text-[#23272F]" : "text-white"
                } font-bold text-[13px] pr-2`}
              >
                {task}
              </h3>
              <p
                className={` rounded-lg px-3 text-xs flex items-center font-semibold text-white  bg-[#666464] `}
              >
                {totalTasks}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-x-2">
        <h4
          className={`${
            theme === "light" ? "text-[#515151]" : "text-[#cfcece]"
          } text-[10px] font-bold tracking-[0.6px]`}
        >
          Completed Tasks
        </h4>
        <p className="bg-[#666464] rounded-md px-[10px] text-xs text-white">
          {completedTasks}
        </p>
      </div>
    </div>
  );
};

export default TaskStatus;
