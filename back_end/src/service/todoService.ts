import { validateData } from "$/middleware/validationMiddleware";
import { Task, Status } from "$/schemas/TaskSchema";

export var TodoList: Task[] = [];

export function getTask(): Task[] {
  return TodoList;
}

export function addTask(NewTask: Task) {
  NewTask.id = TodoList.length + 1;
  TodoList.push(NewTask);
}

export function deleteTask(id: number) {
  const toDelete = TodoList.findIndex((task) => task.id === id);
  if (toDelete === -1) return;
  TodoList.splice(toDelete, 1);
}

export function updateStatusTask(id: number) {
  const toUpdate = TodoList.findIndex((task) => task.id === id);
  if (toUpdate === -1) return;
  if (TodoList[toUpdate].status === Status.pending) TodoList[toUpdate].status = Status.done;
  else TodoList[toUpdate].status = Status.pending;
}
