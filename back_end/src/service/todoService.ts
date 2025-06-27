import { Task } from "$/schemas/TaskSchema";

export var TodoList: Task[] = [];

export function getTask(): Task[] {
    console.log("Test\n");
  return TodoList;
}

export function addTask() {
  TodoList.push();
}
