import { useState } from "react";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";
import { TasksModal } from "@/components/AddTaskModalButton.tsx";
import IconeButton from "@/ui/IconeButton";
import AddIcone from "@/assets/icons/add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?react";

export function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center min-h-screen py-8 px-4"
      style={{
        backgroundColor: "rgb(var(--background))",
        color: "rgb(var(--foreground))",
      }}>
        <div className="font-montserrat text-3xl mb-4">
          <h1>Task manager</h1>
        </div>
      <div className="mb-4">
        <IconeButton onClick={() => setOpen(true)} text="Add Task" color="bg-blue-800">
          <AddIcone className="w-5 h-5" />
        </IconeButton>
      </div>

      <TaskList />

      <TasksModal open={open} onClose={() => setOpen(false)}>
        <TaskForm />
      </TasksModal>
    </div>
  );
}
