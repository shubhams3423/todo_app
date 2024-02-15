import React, { useRef } from "react";
import { useTodo } from "./ContextProvider";

const InputTask = ({
  addNewTaskHandler,
  setInput,
  input,
  isEditTask,
  isAddNewTask,
  editTaskTitle,
  setEditTaskTitle,
  editTaskkeyHandler,
}) => {
  const { theme, taskDetails, setTaskDetails } = useTodo();
  const inputRef = useRef(null);
  const lableHandler = (bgColor, name) => {
    setTaskDetails({ ...taskDetails, lableName: name, bgColor: bgColor });
    inputRef.current.focus();
  };

  const lables = [
    {
      id: 1,
      lableName: "Improvement",
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      lableName: "Study",
      bgColor: "bg-orange-500",
    },
    {
      id: 3,
      lableName: "Sport",
      bgColor: "bg-yellow-500",
    },
    {
      id: 4,
      lableName: "Productivity",
      bgColor: "bg-purple-500",
    },
    {
      id: 4,
      lableName: "Work",
      bgColor: "bg-red-500",
    },
    {
      id: 4,
      lableName: "Meditation",
      bgColor: "bg-orange-500",
    },
    {
      id: 4,
      lableName: "Shopping",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div>
      <input
        type="text"
        autoFocus="autoFocus"
        ref={inputRef}
        value={(isEditTask && editTaskTitle) || (isAddNewTask && input)}
        className={`rounded-lg border-1 border-solid p-2 focus:border-[#35B2EA]  focus:ring-0  ${
          theme === "light"
            ? "bg-[#d2d3d4d1] border-[#8080806b] text-black border-neutral-400"
            : "bg-[#252b2ed1] text-white"
        } w-full`}
        onChange={(e) => {
          isEditTask
            ? setEditTaskTitle(e.target.value)
            : setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          isEditTask && editTaskkeyHandler(e);
          isAddNewTask && addNewTaskHandler(e);
        }}
      />
      <div className="flex items-center gap-x-2 py-2 pl-[1px] pr-1 w-full overflow-x-scroll">
        {lables.map((lable, key) => {
          return (
            <div
              key={key}
              className={`${lable.bgColor} rounded px-[4px] py-[2px] text-[13px] font-lighter text-white`}
              onClick={() => lableHandler(lable.bgColor, lable.lableName)}
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
