import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "./ContextProvider";
import { MdKeyboardArrowRight } from "react-icons/md";
const PassedTodoList = () => {
  const { setTasks, setCurrentDate, tasks, setTaskTypes, taskTypes } =
    useTodo();
  const [userName, setUserName] = useState("");
  const [passedTodoListDates, setPassedTodoListDates] = useState([]);
  useEffect(() => {
    setPassedTodoListDates(JSON.parse(localStorage.getItem("dates")));
    setUserName(localStorage.getItem("userName"));
  }, []);
  const navigate = useNavigate("");
  const handlePassedTodoListDates = (date) => {
    setTasks(JSON.parse(localStorage.getItem(date)) || []); //task updated
    setTaskTypes(
      taskTypes.map((task, key) => {
        if (task.id === 1) {
          task.totalTasksCount = tasks?.length;
          return task;
        } else return task;
      })
    );
    //Initializing completed tasks
    setTaskTypes(
      taskTypes.map((task, key) => {
        if (task.id === 2) {
          const completedTaskCount = tasks
            .map((task, key) => task.isCompletedTask)
            .filter((task, key) => task !== false)?.length;
          task.completedTasks = completedTaskCount;
          return task;
        } else return task;
      })
    );
    setCurrentDate(date);
    navigate("/taskList");
  };
  const handleUserName = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("userName", userName);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex justify-between items-center p-3 bg-black text-white">
        <input
          type="text"
          placeholder="User name"
          className="rounded bg-transparent p-1 text-base opacity-90 border-transparent font-bold focus:border-transparent grow focus:ring-0 placeholder:text-gray-300"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          onKeyDown={handleUserName}
        />
        <MdKeyboardArrowRight
          className="text-2xl"
          onClick={() => navigate("/")}
        />
      </div>
      <hr className="p-[0.4px] bg-gray-500" />
      <div className="p-3 flex flex-col gap-y-5">
        {passedTodoListDates.map((todoListDate, key) => (
          <ul
            key={key}
            className={`flex ${
              key % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <li
              className="bg-[#3838381c] text-lg cursor-pointer font-semibold shadow-[2px_3px_7px_#00000096] text-[#2f2f2f] rounded-xl p-3 w-52"
              onClick={() => handlePassedTodoListDates(todoListDate)}
            >
              {todoListDate}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PassedTodoList;
