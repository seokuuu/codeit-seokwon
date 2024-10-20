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

/**
 *
 * @description CustomButton 컴포넌트는 버튼을 보여주는 컴포넌트입니다.
 * @param {CustomButtonProps} { bgColor, textColor, children, onClick, type, className, disabled } - bgColor, textColor, children, onClick, type, className, disabled를 받아옵니다.
 * bgColor - 배경 색상
 * textColor - 텍스트 색상
 * children - 버튼 안에 들어갈 내용
 * onClick - 클릭 이벤트 핸들러
 * type - 버튼 타입
 * className - 커스텀 클래스
 * disabled - 비활성화 여부
 * @returns {JSX.Element} CustomButton 컴포넌트를 반환합니다.
 */

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
