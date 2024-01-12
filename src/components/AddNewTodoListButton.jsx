import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "./ContextProvider";
const AddNewTodoListButton = ({ btnBgColor, size, icon, isNewTodoList }) => {
  const navigate = useNavigate();
  const addNewTodoList = () => {
    navigate("/taskList");
  };
  return (
    <div>
      <button
        onClick={addNewTodoList}
        className={`${size} aspect-square	rounded-full shadow-[0_0_26px_#80008094] ${btnBgColor} text-white flex justify-center items-center`}
      >
        {icon}
      </button>
    </div>
  );
};

export default AddNewTodoListButton;
