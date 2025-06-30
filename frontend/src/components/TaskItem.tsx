import type { Task } from "@/types/TaskSchema";
import { useDeleteTask, useToggleTaskStatus } from "@/api/TaskMutation";

export const TaskItem = ({ task }: { task: Task }) => {
  const deleteTask = useDeleteTask();
  const toggleStatus = useToggleTaskStatus();

  return (
    <li className="flex gap-4 items-center justify-between">
      <div>
        <strong>{task.title}</strong> — {task.status ? "Done" : "Pending"}
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={() => toggleStatus.mutate(task.id)}>Toggle</button>
        <button onClick={() => deleteTask.mutate(task.id)}>Delete</button>
      </div>
    </li>
  );
};
