/* eslint-disable import/no-anonymous-default-export */
import { createContext, useEffect, useState } from "react";

const TasksContext = createContext();

const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  //recibe un string por que se convirtio antes
  useEffect(() => {
    const item = localStorage.getItem("tasks");
    //aca lo transforma a objeto
    const tasks = JSON.parse(item);

    if (Array.isArray(tasks) && tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  //ejecuta el codigo cada que cambia algo

  const addTask = (task) => {
    setTasks([
      ...tasks,
      { id: tasks.length, title: task.title, descripcion: task.descripcion },
    ]);
  };

  const deleteTask = (id) => {
    setTasks([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTask = (updatedTask) => {
    setTasks([
      ...tasks.map((task) =>
        task.id === updatedTask.id
          ? {
              id: updatedTask.id,
              title: updatedTask.title,
              descripcion: updatedTask.descripcion,
            }
          : {
              id: task.id,
              title: task.title,
              descripcion: task.descripcion,
            }
      ),
    ]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TasksContext.Provider>
  );
};
export  { TasksContext, TasksProvider };
