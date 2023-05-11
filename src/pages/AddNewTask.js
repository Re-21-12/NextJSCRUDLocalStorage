import React, { useState, useContext, useEffect } from "react";
import { TasksContext } from "./TasksContext";
import { useRouter } from "next/router";

export default function AddNewTask({ params }) {
  const [task, setTask] = useState({ title: "", descripcion: "" });
  const { addTask, tasks, updateTask } = useContext(TasksContext);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const taskToUpdate = tasks.find((task) => task.id === parseInt(id));
      if (taskToUpdate) {
        setTask({
          id: taskToUpdate.id,
          title: taskToUpdate.title,
          descripcion: taskToUpdate.descripcion,
        });
      } else {
        router.push("/");
      }
    }
  }, [id,router, tasks]);

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const updatedTask = { ...task };
      updateTask(updatedTask);
    } else {
      addTask(task);
    }
    router.push("/");
    setTask({ title: "", descripcion: "" });
  };

  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 rounded-md"
      >
        <h1 className="text-2xl font-bold text-white mb-3 text-center">
          Registra una tarea:
        </h1>
        <input
          name="title"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Ingresa tu tarea..."
          value={task.title}
          autoFocus
          onChange={handleChange}
        />
        <textarea
          name="descripcion"
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe una descripcion..."
          value={task.descripcion}
          onChange={handleChange}
        ></textarea>
        <button
          className="bg-indigo-500 px-3 py-1 text-white rounded-md"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
