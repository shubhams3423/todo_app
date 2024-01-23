import React from "react";
import { useTodo } from "./ContextProvider";
import { GoPlus } from "react-icons/go";
import moment from "moment";

const TodoInfo = () => {
  const { theme, currentDate } = useTodo();
  return (
    <div className="flex items-center justify-between mb-4 mt-1">
      <h2
        className={`${
          theme === "light" ? "text-[#23272F]" : "text-white"
        } text-3xl font-bold opacity-80`}
      >
        {currentDate}
      </h2>
      <div>
        {/* <button
          className={`w-6 aspect-square	rounded-full  bg-gray-500 text-white flex justify-center items-center`}
        >
          <GoPlus className="text-xl font-bold" />
        </button> */}
      </div>
    </div>
  );
};

export default TodoInfo;
