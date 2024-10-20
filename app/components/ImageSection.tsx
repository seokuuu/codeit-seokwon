// components/ImageSection.tsx
import React from "react";
import Image from "next/image";
import EditIcon from "./icons/EditIcon";
import AddImageIcon from "./icons/AddImageIcon";
import PlusIcon from "./icons/PlusIcon";

interface ImageSectionProps {
  imageUrl: string;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * @description ImageSection 컴포넌트는 이미지를 보여주는 컴포넌트입니다.
 * @param {ImageSectionProps} { imageUrl, onImageUpload } - imageUrl과 onImageUpload 함수를 받아옵니다.
 * @returns {JSX.Element} ImageSection 컴포넌트를 반환합니다.
 */

const ImageSection: React.FC<ImageSectionProps> = ({
  imageUrl, // 이미지 URL
  onImageUpload, // 이미지 업로드 핸들러
}) => {
  return (
    <div className="desktop:w-2/5 desktop:h-[100%] mobile:h-[50%] flex flex-col items-center justify-center  rounded-lg relative">
      {imageUrl ? (
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt="Todo"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <label
            htmlFor="image"
            className="absolute bottom-2 right-2 bg-white bg-opacity-30 border border-slate-900 rounded-full p-2 cursor-pointer shadow-md"
          >
            <EditIcon />
          </label>
        </div>
      ) : (
        <>
          <label>
            <AddImageIcon />
          </label>
          <label
            htmlFor="image"
            className="absolute bottom-2 right-2 bg-slate-200 rounded-full p-2 cursor-pointer shadow-md"
          >
            <PlusIcon />
          </label>
        </>
      )}
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default ImageSection;
