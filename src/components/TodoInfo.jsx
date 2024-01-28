import React from "react";
import { useTodo } from "./ContextProvider";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const TodoInfo = () => {
  const { theme, date } = useTodo();
  const navigate = useNavigate("");
  return (
    <div className="flex items-center justify-between mb-4 mt-1">
      <h2
        className={`${
          theme === "light" ? "text-[#23272F]" : "text-white"
        } text-3xl font-bold opacity-80`}
      >
        {date}
      </h2>
      <div>
        <button
          className={`w-6 aspect-square	rounded-full  bg-gray-500 text-white flex justify-center items-center`}
          onClick={() => navigate("/newtodolist")}
        >
          <GoPlus className="text-xl font-bold" />
        </button>
      </div>
    </div>
  );
};

export default TodoInfo;
