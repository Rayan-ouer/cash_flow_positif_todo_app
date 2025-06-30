import { z } from "zod";

export enum Status {
  pending = 0,
  done = 1,
}

export const TaskSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string().optional(),
  status: z.nativeEnum(Status),
});

export const CreateTaskSchema = TaskSchema.omit({ id: true }).extend({
  status: z.literal(Status.pending),
});
export type CreateTask = z.infer<typeof CreateTaskSchema>;
export type Task = z.infer<typeof TaskSchema>;
