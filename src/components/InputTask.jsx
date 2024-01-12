import React, { useEffect } from "react";
import { useTodo } from "./ContextProvider";

const InputTask = ({
  onkeyHandler,
  setInput,
  input,
  isEditTask,
  editTaskTitle,
  setEditTaskTitle,
  editTaskkeyHandler,
}) => {
  const { theme, taskDetails, setTaskDetails } = useTodo();
  const lableHandler = (color, name) => {
    setTaskDetails({ ...taskDetails, lableName: name, color: color });
  };

  const lables = [
    {
      id: 1,
      lableName: "Improvement",
      color: "bg-red-500",
    },
    {
      id: 2,
      lableName: "Study",
      color: "bg-orange-500",
    },
    {
      id: 3,
      lableName: "Sport",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      lableName: "Productivity",
      color: "bg-purple-500",
    },
    {
      id: 4,
      lableName: "Work",
      color: "bg-red-500",
    },
    {
      id: 4,
      lableName: "Meditation",
      color: "bg-orange-500",
    },
    {
      id: 4,
      lableName: "Shopping",
      color: "bg-green-400",
    },
  ];
  return (
    <div>
      <input
        type="text"
        autoFocus="autoFocus"
        value={isEditTask ? editTaskTitle : input}
        className={`rounded-lg border-1 border-solid p-2 focus:border-[#35B2EA]  focus:ring-0  ${
          theme === "light"
            ? "bg-[#d2d3d4d1] border-[#8080806b] text-black border-neutral-400"
            : "bg-[#252b2ed1] text-white"
        } w-full `}
        onChange={(e) => {
          isEditTask
            ? setEditTaskTitle(e.target.value)
            : setInput(e.target.value);
        }}
        onKeyDown={isEditTask ? editTaskkeyHandler : onkeyHandler}
      />
      <div className="flex items-center gap-x-2 py-2 pl-[1px] pr-1 w-full overflow-x-scroll">
        {lables.map((lable, key) => {
          return (
            <div
              key={key}
              value={lable.lableName}
              className={` ${lable.color} rounded px-[4px] py-[2px] text-[13px] font-lighter text-white`}
              onClick={() => lableHandler(lable.color, lable.lableName)}
            >
              {lable.lableName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputTask;
