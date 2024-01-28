import React, { useState } from "react";
import Datepicker from "tailwind-datepicker-react";
import { useNavigate } from "react-router-dom";
import { useTodo } from "./ContextProvider";
import moment from "moment";
import { IoIosArrowBack } from "react-icons/io";
const NewTodoList = () => {
  const { setDate, setTasks } = useTodo();
  const navigate = useNavigate("");
  const options = {
    todayBtn: false,
    datepickerClassNames: "top-24",
  };

  const [show, setShow] = useState(true);
  const handleChange = (selectedDate) => {
    setDate(moment(selectedDate).format("MMM Do YY"));
    setTasks([]);
    const response = localStorage.getItem("dates");
    if (
      response !== null &&
      !JSON.parse(response).includes(moment(selectedDate).format("MMM Do YY"))
    ) {
      localStorage.setItem(
        "dates",
        JSON.stringify([
          ...JSON.parse(response),
          moment(selectedDate).format("MMM Do YY"),
        ])
      );
    }
  };
  const handleClose = (state) => {
    setShow(state);
    navigate("/");
  };
  return (
    <div className="relative max-w-sm px-3 pt-4 pb-6 h-screen bg-[#000000eb]">
      <div>
        <IoIosArrowBack
          className=" text-white cursor-pointer text-lg mb-4"
          onClick={() => navigate("/")}
        />
      </div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default NewTodoList;
