import axios from "axios";
import type { Task } from "@/types/TaskSchema";
import { useQuery } from "@tanstack/react-query";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchTasks = async (): Promise<Task[]> => {
  const res = await api.get<Task[]>("/tasks");
  return res.data;
};

export const useTasks = () =>
  useQuery<Task[], Error>({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
