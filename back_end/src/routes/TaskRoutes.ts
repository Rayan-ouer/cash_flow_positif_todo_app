import { app } from "$/app";
import { validateData } from "$/middleware/validationMiddleware";
import express, { type Application, type Request, type Response } from "express";
import * as todoService from "$/service/todoService";
import { Task, TaskSchema } from "$/schemas/TaskSchema";

export const taskRoute = express.Router();

taskRoute.get("/", (_req: Request, res: Response) => {
  res.send("Test");
  console.log(todoService.getTask());
});

taskRoute.post("/", (req: Request, res: Response) => {
  const NewTask: Task = req.body;
  console.log(NewTask);
});
