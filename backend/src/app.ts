import dotenv from "dotenv";
import express, { type Request, type Response, type Application } from "express";
import { taskRoute } from "@/routes/TaskRoutes";
import cors from "cors";

dotenv.config();

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/tasks", taskRoute);
