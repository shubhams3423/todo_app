import React, { useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useTodo } from "./ContextProvider";
import InputTask from "./InputTask";

const AddNewTaskButtton = () => {
  const {
    tasks,
    setTasks,
    theme,
    taskDetails,
    setTaskDetails,
    taskTypes,
    setTaskTypes,
    showInputTask,
    setShowInputTask,
    setShowEditOption,
    setTaskMenuId,
  } = useTodo();
  const [input, setInput] = useState("");

  const addNewTaskHandler = (e) => {
    if (e.key === "Enter" && input !== "") {
      setTasks([
        ...tasks,
        {
          ...taskDetails,
          taskTitle: input,
          id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        },
      ]);
      //Increment in total tasks
      setTaskTypes(
        taskTypes.map((task, key) => {
          if (task.id === 1) {
            task.totalTasksCount += 1;
            return task;
          } else return task;
        })
      );
      setInput("");
      setTaskDetails({
        ...taskDetails,
        taskTitle: "",
        lableName: "",
        bgColor: "",
      });
      setShowInputTask(false);
    }
  };
  return (
    <div className="h-20 relative">
      {!showInputTask ? (
        <div
          className={`w-full rounded-md absolute h-[2.6rem] ${
            theme === "light" ? "bg-[#2F76BA]" : "bg-[#9186e7]"
          } p-2 flex items-center justify-center  text-white cursor-pointer`}
          onClick={() => {
            setShowEditOption(-1);
            setTaskMenuId(-1);
            setShowInputTask(true);
          }}
        >
          <GoPlus className="text-2xl font-bold mr-2" />
          <p className="text-lg font-semibold">Add Task</p>
        </div>
      ) : (
        <InputTask
          setShowInputTask={setShowInputTask}
          addNewTaskHandler={addNewTaskHandler}
          input={input}
          setInput={setInput}
          isAddNewTask={true}
        />
      )}
    </div>
  );
};

export default AddNewTaskButtton;
