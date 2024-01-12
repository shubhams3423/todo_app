import React from "react";
import { useTodo } from "./ContextProvider";
import AddNewTodoListButton from "./AddNewTodoListButton";
import { GoPlus } from "react-icons/go";
import moment from "moment";

const TodoInfo = () => {
  const { theme } = useTodo();
  return (
    <div className="flex items-center justify-between mb-4 mt-1">
      <h2
        className={`${
          theme === "light" ? "text-[#23272F]" : "text-white"
        } text-3xl font-bold opacity-80`}
      >
        {moment().format("MMM Do YY")}
      </h2>
      <AddNewTodoListButton
        btnBgColor={"bg-gray-500"}
        size={"w-6"}
        icon={<GoPlus className="text-xl font-bold" />}
      />
    </div>
  );
};

export default TodoInfo;
