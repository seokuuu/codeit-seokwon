// components/CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  bgColor?: string;
  textColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  bgColor = "bg-white",
  textColor = "text-black",
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex justify-center items-center text-sm  gap-1 p-2 px-4 rounded mr-2 min-w-fit common-border rounded-3xl  ${bgColor} ${textColor} ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
