// components/common/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor = "bg-white",
  textColor = "text-black",
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center text-sm gap-1 p-2 px-10 rounded mr-2 min-w-fit common-border rounded-3xl 
      ${bgColor} ${textColor} ${className}
      ${disabled ? "slate-200 " : "hover:opacity-80"}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
