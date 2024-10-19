import React from "react";

const AddImageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M37.9466 5.33337H26.6666C14.8845 5.33337 5.33325 14.8846 5.33325 26.6667V37.9734C5.33325 49.7554 14.8845 59.3067 26.6666 59.3067H37.9466C49.7287 59.3067 59.2799 49.7554 59.2799 37.9734V26.6667C59.2799 14.8846 49.7287 5.33337 37.9466 5.33337ZM21.6533 16.32C24.5988 16.32 26.9866 18.7079 26.9866 21.6534C26.9866 24.5989 24.5988 26.9867 21.6533 26.9867C18.7077 26.9867 16.3199 24.5989 16.3199 21.6534C16.3199 18.7079 18.7077 16.32 21.6533 16.32ZM41.3599 53.6534C48.9096 50.8339 53.9231 43.6323 53.9466 35.5734L53.8666 30.9867C53.8666 29.8934 53.6533 27.84 53.6533 27.84H49.3066C39.2436 27.8706 30.0548 33.5633 25.5466 42.56C22.2744 39.6348 18.0424 38.0122 13.6533 38H10.4266C10.1886 44.1993 13.5557 49.9775 19.0666 52.8267C21.0367 53.8762 23.2344 54.4256 25.4666 54.4267H36.5866C38.2107 54.4499 39.8262 54.1882 41.3599 53.6534Z"
        fill="#E2E8F0"
      />
    </svg>
  );
};

export default AddImageIcon;
