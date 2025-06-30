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
    <form className="todoForm" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("title")} type="text" placeholder="Title" />
      {errors.title && <div className="text-red-500">{errors.title.message}</div>}

      <input {...register("description")} type="text" placeholder="Description" />

      <button type="submit" disabled={isSubmitting || addTask.isPending}>
        {addTask.isPending ? "Adding..." : "Add"}
      </button>
    </form>
  );
};
