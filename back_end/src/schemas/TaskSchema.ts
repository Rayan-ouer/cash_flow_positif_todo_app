import { z } from "zod";

enum Status {
  pending = 0,
  done = 1,
}

export const TaskSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  status: z.nativeEnum(Status),
});

export type Task = z.infer<typeof TaskSchema>;
