import { useRef, useState } from "react";

type IconeButtonProps = {
  children: React.ReactNode;
  text: string;
  color?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function IconeButton({ children, text, color, ...props }: IconeButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`font-montserrat flex items-center px-20 py-1 rounded-lg
        text-white transition-colors duration-300
        ${color || "bg-gray-600"}`}
      {...props}>
      {children}
      <div
        style={{
          transform: hovered ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s ease-out",
          width: hovered ? (ref.current?.offsetWidth ?? 0) : 0,
        }}
        className="overflow-x-hidden transition-all duration-300 ease-out whitespace-nowrap">
        <span ref={ref}>{text}</span>
      </div>
    </button>
  );
}
