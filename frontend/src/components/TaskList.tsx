import { useTasks } from "@/api/TaskApi";
import { TaskItem } from "@/components/TaskItem";

export const TaskList = () => {
  const { data: tasks, isLoading, error } = useTasks();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <ul className="space-y-4 w-full max-w-2xl mx-auto px-4 mt-6">
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};
