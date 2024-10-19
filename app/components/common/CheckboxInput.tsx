import React from "react";

interface CheckboxInputProps {
  isChecked: boolean;
  onToggle: () => void;
}

export default function CheckboxInput({
  isChecked,
  onToggle,
}: CheckboxInputProps) {
  return (
    <div className="relative top-1 mr-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className="appearance-none w-5 h-5 border border-black checked:border-violet-600 rounded-full checked:bg-violet-600 transition-all duration-200 ease-in-out cursor-pointer"
      />
      <svg
        className={`absolute w-3 h-3 text-white top-1 left-1 pointer-events-none transition-opacity duration-200 ${
          isChecked ? "opacity-100" : "opacity-0"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}
