import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useTodo } from "./ContextProvider";
import InputTask from "./InputTask";

const AddNewTaskButtton = () => {
  const { tasks, setTasks, theme, taskDetails, setTaskDetails } = useTodo();
  const [input, setInput] = useState("");
  const [showInputTask, setShowInputTask] = useState(false);

  const onkeyHandler = (e) => {
    if (e.key === "Enter" && input !== "") {
      setTasks([
        ...tasks,
        {
          ...taskDetails,
          isCompletedTask: false,
          taskTitle: input,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]);
      setInput("");
      setTaskDetails({ taskTitle: "", lableName: "", color: "" });
      setShowInputTask(false);
    }
  };
  return (
    <div className="h-20  relative">
      {!showInputTask ? (
        <div
          className={`w-full rounded-md absolute h-[2.6rem] ${
            theme === "light" ? "bg-[#2F76BA]" : "bg-[#9186e7]"
          } p-2 flex items-center justify-center  text-white cursor-pointer`}
          onClick={() => setShowInputTask(true)}
        >
          <GoPlus className="text-2xl font-bold mr-2" />
          <p className="text-lg font-semibold">Add Task</p>
        </div>
      ) : (
        <InputTask
          setShowInputTask={setShowInputTask}
          onkeyHandler={onkeyHandler}
          input={input}
          setInput={setInput}
        />
      )}
    </div>
  );
};

export default AddNewTaskButtton;
