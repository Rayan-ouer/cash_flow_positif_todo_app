import { useState } from "react";
import { useDeleteTask, useToggleTaskStatus } from "@/api/TaskMutation";
import type { Task } from "@/types/TaskSchema";

export const TaskItem = ({ task }: { task: Task }) => {
  const [showDescription, setShowDescription] = useState(false);
  const deleteTask = useDeleteTask();
  const toggleStatus = useToggleTaskStatus();

  return (
    <li className="bg-gray-800 text-white rounded-xl shadow-lg p-5 mb-4 transition-all hover:shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <h3 className={`text-xl font-semibold ${task.status ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => toggleStatus.mutate(task.id)}
            className="flex items-center transition text-gray-300 hover:text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
               className="fill-current">
              <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </button>

          <button
            onClick={() => deleteTask.mutate(task.id)}
            className="flex items-center transition text-gray-300 hover:text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              className="fill-current">
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3">
              <path d="m480-500 160-160H320l160 160Zm280-340q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560ZM200-320v120h560v-120H200Zm560-80v-360H200v360h560Zm-560 80v120-120Z" />
            </svg>
          </button>
        </div>
      </div>

      {showDescription && (
        <p className="mt-2 text-sm text-gray-300">{task.description || "No description"}</p>
      )}
    </li>
  );
};
