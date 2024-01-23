import React, { useEffect, useState } from "react";
import { useTodo } from "./ContextProvider";
import { BiDotsVerticalRounded } from "react-icons/bi";
import InputTask from "./InputTask";
import moment from "moment";
import { toast } from "react-toastify";
const SingleTask = () => {
  const {
    tasks,
    setTasks,
    theme,
    taskDetails,
    setTaskDetails,
    taskTypes,
    setTaskTypes,
    setShowInputTask,
    showEditOption,
    setShowEditOption,
    taskMenuId,
    setTaskMenuId,
    currentDate,
  } = useTodo();
  const [editTaskId, setEditTaskId] = useState();
  const [editTaskTitle, setEditTaskTitle] = useState("");
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
  useEffect(() => {
    tasks?.length > 0 &&
      localStorage.setItem(currentDate, JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    const storedTaskList = JSON.parse(
      localStorage.getItem(currentDate) || null
    );
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

  const editTaskkeyHandler = (e) => {
    if (e.key === "Enter" && editTaskTitle !== "") {
      setTasks(
        tasks.map((taskObj, key) => {
          if (taskObj.id === editTaskId) {
            return {
              ...taskObj,
              taskTitle: editTaskTitle,
              lableName:
                taskDetails.lableName === ""
                  ? taskObj.lableName
                  : taskDetails.lableName,
              bgColor:
                taskDetails.bgColor === ""
                  ? taskObj.bgColor
                  : taskDetails.bgColor,
            };
          } else {
            return taskObj;
          }
        })
      );
      setTaskDetails({ taskTitle: "", lableName: "", bgColor: "" });
      setShowEditOption(-1);
      setTaskMenuId(-1);
    }
  };

  const handleTaskMenu = (taskId) => {
    taskMenuId === -1 ? setTaskMenuId(taskId) : setTaskMenuId(-1);
  };

  const handleTaskMenuOptions = (featureId, taskId) => {
    //featureId===1 is remove task
    //featureId===2 is edit task
    switch (featureId) {
      case 1:
        tasks?.length === 1 &&
          localStorage.setItem(currentDate, JSON.stringify([]));
        setTasks(tasks.filter((task, key) => task.id !== taskId));
        setTaskTypes(
          taskTypes.map((task, key) => {
            switch (task.id) {
              case 1:
                task.totalTasksCount -= 1;
                setTaskMenuId(-1);
                return task;
              case 2:
                let checkIsTaskCompleted;
                checkIsTaskCompleted = tasks.find(
                  (taskObj) => taskObj.id === taskId
                ).isCompletedTask;
                if (checkIsTaskCompleted) task.completedTasks -= 1;
                setTaskMenuId(-1);
                return task;
              default:
            }
          })
        );
        break;
      case 2:
        setShowInputTask(false);
        setEditTaskId(taskId);
        setEditTaskTitle(
          tasks.find((taskObj) => taskObj.id === taskId).taskTitle
        );
        setShowEditOption(taskId);
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
            //increment in completed task count
            setTaskTypes(
              taskTypes.map((task, key) => {
                if (task.id === 2) {
                  task.completedTasks += 1;
                  //For toast msg
                  task.completedTasks ===
                    taskTypes.find((taskTypeObj) => taskTypeObj.id === 1)
                      .totalTasksCount &&
                    toast.success("All tasks are completed 🎉🎉🎉 ");
                  return task;
                } else return task;
              })
            );
          } else {
            task.isCompletedTask = false;
            //decrement in completed task count
            setTaskTypes(
              taskTypes.map((task, key) => {
                if (task.id === 2) {
                  task.completedTasks -= 1;
                  return task;
                } else return task;
              })
            );
          }
          return task;
        }
        return task;
      })
    );
  };

  return (
    <div className="scrollbar-hide absolute left-0 right-0 h-full overflow-y-scroll  p-2 pb-4">
      {tasks.map((task, key) => {
        return showEditOption === task.id ? (
          <InputTask
            key={key}
            isEditTask={true}
            editTaskTitle={editTaskTitle}
            setEditTaskTitle={setEditTaskTitle}
            editTaskkeyHandler={editTaskkeyHandler}
          />
        ) : (
          <div
            key={key}
            className={`${
              theme === "light" ? "bg-[#868686ad]" : "bg-[#07050c61]"
            }  rounded-lg flex items-start justify-between  p-3 relative mb-3  `}
          >
            <div className="flex ">
              <input
                type="checkbox"
                id={task?.id}
                checked={task?.isCompletedTask}
                className="rounded-full h-5 w-5 text-[17px]  cursor-pointer bg-white  text-green-600  focus:border-transparent focus:ring-0"
                onChange={() => handleCompletedTasks(task.id)}
              />
              <div className="ms-4 me-2">
                <label
                  htmlFor={task?.id}
                  className={`mb-1 break-all ${
                    taskMenuId === task?.id && "opacity-[0.3]"
                  } ${
                    task?.isCompletedTask
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
                  {task?.taskTitle}
                </label>
                <div
                  className={`${task.bgColor} rounded py-[2px] px-1 w-fit text-white font-lighter text-[11px]`}
                >
                  {task?.lableName}
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
                    key={key}
                    className="font-semibold opacity-[0.8] cursor-pointer text-sm"
                    onClick={() => handleTaskMenuOptions(menuItem.id, task.id)}
                  >
                    {menuItem?.feature}
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
