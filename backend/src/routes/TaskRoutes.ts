import { app } from "@/app";
import { validateData, verifyIdTask } from "@/middleware/validationMiddleware";
import express, { type Application, type Request, type Response } from "express";
import * as todoService from "@/service/todoService";
import { Task, CreateTaskSchema } from "@/schemas/TaskSchema";
import { StatusCodes } from "http-status-codes";

export const taskRoute = express.Router();

taskRoute.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).json(todoService.getTask());
});

taskRoute.post("/", validateData(CreateTaskSchema), (req: Request, res: Response) => {
  const NewTask: Task = req.body;
  todoService.addTask(NewTask);
  res.status(StatusCodes.CREATED).json(NewTask);
});

taskRoute.delete("/:id", verifyIdTask(todoService.TodoList), (req: Request, res: Response) => {
  const id = Number(req.params.id);
  todoService.deleteTask(id);
  res.status(StatusCodes.OK).json({ message: `Task ${id} deleted.` });
});

taskRoute.patch("/:id", verifyIdTask(todoService.TodoList), (req: Request, res: Response) => {
  const id = Number(req.params.id);
  todoService.updateStatusTask(id);
  res.status(StatusCodes.OK).json({ message: `Task ${id} updated.` });
});
