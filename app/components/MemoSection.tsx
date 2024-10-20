import React, { useState } from "react";

interface MemoSectionProps {
  memo: string;
  onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

/**
 * 
 * @description MemoSection 컴포넌트는 메모를 보여주는 컴포넌트입니다.
 * @param {MemoSectionProps} { memo, onMemoChange } - memo와 onMemoChange 함수를 받아옵니다.
 * memo: 메모 내용
 * onMemoChange: 메모 변경 핸들러
 * @returns {JSX.Element} MemoSection 컴포넌트를 반환합니다.

 */

const MemoSection: React.FC<MemoSectionProps> = ({ memo, onMemoChange }) => {
  const [isEditing, setIsEditing] = useState(false);

  // 메모 클릭 시 편집 모드로 전환
  const handleDivClick = () => {
    setIsEditing(true);
  };

  // 텍스트 에어리어 포커스 아웃 시 편집 모드 해제
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
