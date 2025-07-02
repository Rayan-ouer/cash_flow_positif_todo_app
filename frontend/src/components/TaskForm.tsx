import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useAddTask } from "@/api/TaskMutation";
import { TaskFormSchema, TaskFormType } from "@/types/TaskSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormType>({
    resolver: zodResolver(TaskFormSchema),
  });

  const addTask = useAddTask();

  const onSubmit: SubmitHandler<TaskFormType> = (data) => {
    addTask.mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
     className="max-w-md w-full mx-auto space-y-4 p-6 rounded-lg shadow-md bg-indigo-500 bg-opacity-25 text-white"
      onSubmit={handleSubmit(onSubmit)}
      style={{
        backgroundColor: "rgb(var(--background))",
        color: "rgb(var(--foreground))",
      }}>
      <div>
        <input
          {...register("title")}
          type="text"
          placeholder="Title"
          className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "rgb(var(--input-bg, 255,255,255))",
            color: "rgb(var(--foreground))",
            borderColor: "rgb(var(--border))",
          }}
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
      </div>

      <div>
        <input
          {...register("description")}
          type="text"
          placeholder="Description"
          className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            backgroundColor: "rgb(var(--input-bg, 255,255,255))",
            color: "rgb(var(--foreground))",
            borderColor: "rgb(var(--border))",
          }}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || addTask.isPending}
        className="w-full bg-blue-800 text-white py-2 px-4 rounded hover:bg-blue-700 transition disabled:opacity-50">
        {addTask.isPending ? "Adding..." : "Submit"}
      </button>
    </form>
  );
};
