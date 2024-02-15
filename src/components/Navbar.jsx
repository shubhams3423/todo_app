import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FiMoon } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { useTodo } from "./ContextProvider";
import { useNavigate } from "react-router";
const Navbar = () => {
  const { theme, setTheme } = useTodo();
  const navigate = useNavigate();
  const handleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className={`flex justify-between`}>
      <div>
        <IoIosArrowBack
          className={`${
            theme === "light" ? "text-[#23272F]" : "text-white"
          } cursor-pointer text-lg`}
          onClick={() => navigate("/passedtodolist")}
        />
      </div>
      <div>
        {theme === "light" ? (
          <FiMoon
            onClick={handleTheme}
            className="text-[#23272F] text-lg cursor-pointer"
          />
        ) : (
          <LuSun
            onClick={handleTheme}
            className="text-white text-lg cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
