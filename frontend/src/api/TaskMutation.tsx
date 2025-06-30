import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Task } from "@/types/TaskSchema";
import { api } from "@/api/TaskApi";

export const useAddTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTask: Omit<Task, "id" | "status" | "description">) =>
      api.post<Task>("/tasks", {
        ...newTask,
        status: 0,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => api.delete(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useToggleTaskStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => api.patch(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
