import React from "react";

const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.5 4L12.5 12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M12.5 4L4.5 12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default DeleteIcon;
