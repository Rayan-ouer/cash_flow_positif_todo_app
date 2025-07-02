import React from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const TasksModal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex justify-center items-center bg-black/20 z-50">
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-6 rounded-xl shadow-lg transition-all"
        style={{
          backgroundColor: "rgb(var(--background))",
          color: "rgb(var(--foreground))",
        }}>
        {children}
      </div>
    </div>
  );
};
