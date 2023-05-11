import { TasksContext } from "@/pages/TasksContext";
import { useRouter } from "next/router";
import React, { useContext } from "react";

export const TaskCard = ({ task }) => {
  const router = useRouter();
  const { deleteTask } = useContext(TasksContext);
  /*<div onClick={()=> router.push(`edit/${task.id}`)}>TaskCard</div>*/

  return (
    <div>
      <div
        className="bg-gray-800 text-white p-4 rounded-md capitalize "
        onClick={() => router.push(`edit/${task.id}`)}
      >
        <h1 className="text-xl font-bold">{task.title}</h1>
        <p className="text-gray-500 text-sm">{task.descripcion}</p>
        <button
          className="bg-red-500 px-2 py-1 rounded-m mt-4 rounded-md hover:bg-red-400" //onClick={()=>deleteTask(task.id)} Una funcion fantasma que invoca un parametro este se rellena con el evento y dentro de los parentesis ingresamos el dato que deseamos solicitar
          onClick={(e) => {
            e.stopPropagation();
            const accept = window.confirm(
              "Estas seguro de querer eliminar la tarea?"
            );
            if (accept) deleteTask(task.id);
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
