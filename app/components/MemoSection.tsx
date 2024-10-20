import React, { useState } from "react";

interface MemoSectionProps {
  memo: string;
  onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MemoSection: React.FC<MemoSectionProps> = ({ memo, onMemoChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="desktop:w-3/5 desktop:h-[100%] mobile:h-[50%] bg-yellow-100 rounded-lg p-4 flex flex-col relative overflow-hidden">
      <h3 className="text-center text-amber-800 font-semibold mb-2">Memo</h3>
      <div className="flex-grow relative">
        <div
          className="absolute inset-0 bg-yellow-100"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent, transparent 31px, #EFDA97 31px, #EFDA97 32px)
            `,
            backgroundSize: "100% 32px",
            backgroundRepeat: "repeat-y",
          }}
        />
        {isEditing ? (
          <textarea
            value={memo}
            onChange={onMemoChange}
            onBlur={handleBlur}
            className="w-full h-full absolute top-0 left-0 bg-transparent leading-[32px] border-none resize-none focus:ring-0 text-gray-700 z-10 p-0 custom-scrollbar text-center"
            style={{ lineHeight: "32px" }}
            autoFocus
          />
        ) : (
          <div
            onClick={handleDivClick}
            className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-gray-700 z-10 cursor-text overflow-auto custom-scrollbar"
          >
            <p
              className="text-center leading-[32px]"
              style={{ whiteSpace: "pre-wrap" }}
            >
              {memo || "클릭하여 메모를 입력하세요"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MemoSection;
