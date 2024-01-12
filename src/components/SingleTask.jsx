import React, { useEffect, useState } from "react";
import { useTodo } from "./ContextProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import InputTask from "./InputTask";
import moment from "moment";
const SingleTask = () => {
  const {
    tasks,
    setTasks,
    theme,
    taskDetails,
    setTaskDetails,
    setCompletedTasks,
  } = useTodo();
  const [taskMenuId, setTaskMenuId] = useState(-1);
  const [showEditOption, setShowEditOption] = useState(-1);
  const [taskId, setTaskId] = useState();
  const [editTaskTitle, setEditTaskTitle] = useState("");
  useEffect(() => {
    tasks.length > 0 &&
      localStorage.setItem(moment().format("MMM Do YY"), JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const storedTaskList = JSON.parse(
      localStorage.getItem(moment().format("MMM Do YY")) || null
    );
    if (storedTaskList !== null) {
      setTasks(storedTaskList);
    }
  }, []);
  const taskMenuList = [
    {
      id: 1,
      feature: "remove",
    },
    {
      id: 2,
      feature: "edit",
    },
  ];
  const editTaskkeyHandler = (e) => {
    if (e.key === "Enter" && editTaskTitle !== "") {
      setTasks(
        tasks.map((taskObj, key) => {
          if (taskObj.id === taskId) {
            return {
              ...taskObj,
              taskTitle: editTaskTitle,
              lableName:
                taskDetails.lableName === ""
                  ? taskObj.lableName
                  : taskDetails.lableName,
              color:
                taskDetails.color === "" ? taskObj.color : taskDetails.color,
            };
          } else {
            return taskObj;
          }
        })
      );
      setTaskDetails({ taskTitle: "", lableName: "", color: "" });
      setShowEditOption(-1);
      setTaskMenuId(-1);
    }
  };

  const handleTaskMenu = (taskId) => {
    taskMenuId === -1 ? setTaskMenuId(taskId) : setTaskMenuId(-1);
  };

  const handleTaskOptions = (featureId, taskId) => {
    switch (featureId) {
      case 1:
        tasks.length === 1 &&
          localStorage.setItem(
            moment().format("MMM Do YY"),
            JSON.stringify([])
          );
        setTasks(tasks.filter((task, key) => task.id !== taskId));
        break;
      case 2:
        setShowEditOption(taskId);
        setTaskId(taskId);
        setEditTaskTitle(
          tasks.find((taskObj) => taskObj.id === taskId).taskTitle
        );
        break;
      default:
    }
  };
  const handleCompletedTasks = (taskId) => {
    setTasks(
      tasks.map((task, key) => {
        if (task.id === taskId) {
          if (!task.isCompletedTask) {
            task.isCompletedTask = true;
          } else {
            task.isCompletedTask = false;
          }
          return task;
        }
        return task;
      })
    );
  };

  return (
    <div className="absolute left-0 right-0 h-full overflow-y-scroll  p-2 pb-4">
      {tasks.map((task, key) => {
        return showEditOption === task.id ? (
          <InputTask
            key={key}
            isEditTask={true}
            editTaskTitle={editTaskTitle}
            setEditTaskTitle={setEditTaskTitle}
            editTaskkeyHandler={editTaskkeyHandler}
            taskId={task.id}
          />
        ) : (
          <div
            key={key}
            className={`  ${
              theme === "light" ? "bg-[#868686ad]" : "bg-[#07050c61]"
            }  rounded-lg flex items-start justify-between  p-3 relative mb-3  `}
          >
            <div className="flex ">
              <input
                type="checkbox"
                id={task.id}
                checked={task.isCompletedTask}
                className="rounded-full h-5 w-5  cursor-pointer bg-white  text-green-600  focus:border-transparent focus:ring-0"
                onChange={() => handleCompletedTasks(task.id)}
              />
              <div className="ms-4 me-2">
                <label
                  htmlFor={task.id}
                  className={`mb-1 break-all ${
                    taskMenuId === task.id && "opacity-[0.3]"
                  } ${
                    task.isCompletedTask
                      ? `line-through ${
                          theme === "light"
                            ? "text-[#00000082]"
                            : "text-gray-500"
                        }`
                      : `${
                          theme === "light"
                            ? "text-black font-medium"
                            : "text-white"
                        }`
                  } `}
                >
                  {task.taskTitle}
                </label>
                <div
                  className={`${task.color} rounded py-[2px] px-1 w-fit text-white font-lighter text-[11px]`}
                >
                  {task.lableName}
                </div>
              </div>
            </div>
            <div>
              <BiDotsVerticalRounded
                className="text-white text-lg cursor-pointer"
                onClick={() => handleTaskMenu(task.id)}
              />
            </div>
            {taskMenuId === task.id && (
              <div
                className={`rounded-md z-10 ${
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } absolute right-[1.8rem] p-[0.40rem] top-[0.9rem] flex flex-col w-32 `}
              >
                {taskMenuList.map((menuItem, key) => (
                  <p
                    className="font-semibold opacity-[0.8] cursor-pointer text-sm"
                    onClick={() => handleTaskOptions(menuItem.id, task.id)}
                  >
                    {menuItem.feature}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SingleTask;
