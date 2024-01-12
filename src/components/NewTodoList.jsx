import React from "react";
import AddNewTodoListButton from "./AddNewTodoListButton";
import { FaArrowRight } from "react-icons/fa6";
const NewTodoList = () => {
  return (
    <div className="overflow-y-hidden bg-[#b582e385] h-screen flex">
      <div className="bg-white flex gap-8 flex-col  rounded-lg p-6 w-[85%] sm:w-64 m-auto shadow-[1px_2px_26px_#80008057] ">
        <h1 className="text-2xl font-bold">
          Start your day having todolist with you!!!
        </h1>
        <div className="flex justify-center">
          <AddNewTodoListButton
            btnBgColor={"bg-purple-700"}
            size={"w-16"}
            textSize={"text-3xl"}
            icon={<FaArrowRight className="text-2xl font-bold " />}
            isNewTodoList={true}
          />
        </div>
      </div>
    </div>
  );
};

export default NewTodoList;
