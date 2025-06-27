import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import { Task, TaskSchema } from "$/schemas/TaskSchema";
import { StatusCodes } from "http-status-codes";
import { TodoList } from "$/service/todoService";

export function validateData(schema: z.ZodTypeAny) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
          message: `${issue.path.join(".")} is ${issue.message}`,
        }));
        res.status(StatusCodes.BAD_REQUEST).json({ error: "Invalid data", details: errorMessages });
      } else {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal Server Error" });
      }
    }
  };
}

export function verifyIdTask(TodoList: Task[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const id = Number(req.params.id);
    const found = TodoList.some((task) => task.id === id);
    if (!found) {
      res.status(StatusCodes.NOT_FOUND).json({ error: "Task does not exist" });
      return;
    }
    next();
  };
}
