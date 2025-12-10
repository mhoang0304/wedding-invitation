import { leftImage, rightImage } from "@/helpers/constant";
import React from "react";
import ImageReveal from "./ImageReveal";

const MasonryLayout: React.FC = () => {
  return (
    <div>
      <div className="mb-3 px-6 text-xl font-semibold">Album ảnh cưới</div>

      <div className="grid grid-cols-7 gap-x-1.5">
        <div className="col-span-4">
          {leftImage.map((image) => (
            <ImageReveal
              key={image.id}
              src={image.src}
              height={image.height}
              alt="Ảnh cưới"
              animationType="slideUp"
            />
          ))}
        </div>

        <div className="col-span-3">
          {rightImage.map((image) => (
            <ImageReveal
              key={image.id}
              src={image.src}
              height={image.height}
              alt="Ảnh cưới"
              animationType="slideUp"
            />
          ))}
        </div>

        <div className="col-span-7">
          <ImageReveal
            src="/TAW01249.JPG"
            alt="wedding-image"
            height={285}
            animationType="fadeIn"
            classImage="object-[center_-100px]"
          />

          <div className="mb-1.5 flex gap-1.5">
            <div className="w-full">
              <ImageReveal
                src="/TAW00667.JPG"
                alt="wedding-image"
                height={145}
                animationType="slideRight"
              />
            </div>
            <div className="w-full">
              <ImageReveal
                src="/TAW00579.JPG"
                alt="wedding-image"
                height={145}
                animationType="slideLeft"
              />
            </div>
          </div>

          <ImageReveal
            src="/TAW00284.JPG"
            alt="wedding-image"
            height={285}
            animationType="fadeIn"
            classImage="object-[center_-140px]"
          />

          <div className="mb-1.5 flex gap-1.5">
            <div className="w-full">
              <ImageReveal
                src="/TAW01328.JPG"
                alt="wedding-image"
                height={288}
                animationType="slideUp"
              />
            </div>
            <div className="w-full">
              <ImageReveal
                src="/TAW01458.JPG"
                alt="wedding-image"
                height={288}
                animationType="slideUp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
