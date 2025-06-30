import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.boolean(),
});

export const TaskFormSchema = z.object({
  title: z.string().min(1, "Title is mandatory"),
  description: z.string().optional(),
});

export type TaskFormType = z.infer<typeof TaskFormSchema>;
export type Task = z.infer<typeof TaskSchema>;
