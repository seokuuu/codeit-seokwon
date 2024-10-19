import React from "react";

interface MemoSectionProps {
  memo: string;
  onMemoChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MemoSection: React.FC<MemoSectionProps> = ({ memo, onMemoChange }) => {
  return (
    <div className="desktop:w-3/5 desktop:h-[100%] mobile:h-[50%] bg-yellow-100 rounded-lg p-4 flex flex-col relative overflow-hidden">
      <h3 className="flex ml-auto mr-auto text-amber-800 font-semibold mb-2">
        Memo
      </h3>
      <div className="flex-grow relative flex items-center justify-center">
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
        <textarea
          value={memo}
          onChange={onMemoChange}
          className="w-full h-full flex items-center text-center justify-center bg-transparent leading-[32px] border-none resize-none focus:ring-0 text-gray-700 z-10 relative leading-8 text-lg p-0 custom-scrollbar text-center"
        />
      </div>
    </div>
  );
};

export default MemoSection;
