import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const NewTodoList = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-y-hidden h-screen flex">
      <div className="bg-[#3b00f34a] flex gap-8 flex-col  rounded-lg p-6 w-[85%] sm:w-64 m-auto shadow-[1px_1px_10px_#80008057] ">
        <h1 className="text-2xl font-bold">
          Start your day having todolist with you!!!
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/taskList")}
            className={`w-16 aspect-square	rounded-full shadow-[0_0_20px_#80008094] bg-[#800080ba] text-white flex justify-center items-center`}
          >
            <FaArrowRight className="text-2xl font-bold " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTodoList;
