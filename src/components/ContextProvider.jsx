import { useContext, useState, createContext, useRef } from "react";

const TodoContext = createContext("");
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [totalTasks, setTotalTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [tasks, setTasks] = useState([]);
  const completedTaskCount = useRef(0);
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    lableName: "",
    color: "",
    isCompletedTask: false,
    id: 0,
  });
  return (
    <TodoContext.Provider
      value={{
        theme,
        setTheme,
        totalTasks,
        setTotalTasks,
        completedTasks,
        setCompletedTasks,
        tasks,
        setTasks,
        taskDetails,
        setTaskDetails,
        completedTaskCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
const useTodo = () => useContext(TodoContext);
export { ContextProvider, useTodo };
