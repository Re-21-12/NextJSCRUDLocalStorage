import { useContext, useState } from "react";
import { TasksContext } from "./TasksContext";
import { TaskCard } from "../Components/TaskCard";
export default function Home() {
  const { tasks, addTask } = useContext(TasksContext);
  /*const [newTask, setNewTask] = useState({title: "", descripcion: ""});*/
  /*const handleAddTask = () => {
addTask(newTask);
setNewTask({title: "", descripcion: ""});
};*/
  if (Array.isArray(tasks) && tasks.length == 0) {
    return (
      <div>
        <h1 className="text-white text-4xl font-bold text-center">
          No hay tareas pendientes...
        </h1>
      </div>
    );
  }
  //if (Array.isArray(tasks) && tasks.length > 0) {
  return (
    <div>
      {tasks.map((task) => {
        return <TaskCard task={task} key={task.id} />;
      })}
    </div>
  );
  //}
}
