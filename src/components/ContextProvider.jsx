import moment from "moment";
import { useContext, useState, createContext, useRef } from "react";

const TodoContext = createContext("");
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [tasks, setTasks] = useState([]);
  const [showInputTask, setShowInputTask] = useState(false);
  const [showEditOption, setShowEditOption] = useState(-1);
  const [taskMenuId, setTaskMenuId] = useState(-1);
  const [date, setDate] = useState(moment().format("MMM Do YY"));
  const [taskTypes, setTaskTypes] = useState([
    {
      id: 1,
      taskType: "All tasks",
      totalTasksCount: 0,
    },
    {
      id: 2,
      taskType: "Completed tasks",
      completedTasks: 0,
    },
  ]);
  const completedTaskCount = useRef(0);
  const [taskDetails, setTaskDetails] = useState({
    taskTitle: "",
    lableName: "",
    bgColor: "",
    isCompletedTask: false,
    id: 0,
  });
  return (
    <TodoContext.Provider
      value={{
        theme,
        setTheme,
        tasks,
        setTasks,
        taskDetails,
        setTaskDetails,
        completedTaskCount,
        taskTypes,
        setTaskTypes,
        showInputTask,
        setShowInputTask,
        showEditOption,
        setShowEditOption,
        taskMenuId,
        setTaskMenuId,
        date,
        setDate,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
const useTodo = () => useContext(TodoContext);
export { ContextProvider, useTodo };
