import React from "react";
import { useTodo } from "./ContextProvider";

const TasksStatus = () => {
  const { theme, taskTypes } = useTodo();
  return (
    <div className="flex justify-between">
      {taskTypes.map((task, key) => {
        return (
          <div className="flex" key={key}>
            <h3
              className={`${
                theme === "light" ? "text-[#23272F]" : "text-white"
              } font-medium text-[13px] pr-2`}
            >
              {task.taskType}
            </h3>
            <p
              className={`${
                theme === "light" ? "bg-[#07050c61]" : "bg-[#484848]"
              } rounded-lg px-3 text-xs flex items-center font-semibold text-white  bg-[#07050c61]`}
            >
              {task.id === 1 && task.totalTasksCount}
              {task.id === 2 && task.completedTasks}
            </p>
          </div>
        );
      })}
    </div>
  );
};
//
export default TasksStatus;
