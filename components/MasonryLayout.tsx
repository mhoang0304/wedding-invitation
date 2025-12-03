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
            alt="Ảnh cưới lớn 1"
            height={240}
            animationType="fadeIn"
          />

          <div className="mb-1.5 flex gap-1.5">
            <div className="w-full">
              <ImageReveal
                src="/TAW00531.JPG"
                alt="Ảnh ngang 1"
                height={128}
                animationType="slideRight"
              />
            </div>
            <div className="w-full">
              <ImageReveal
                src="/TAW00667.JPG"
                alt="Ảnh ngang 2"
                height={128}
                animationType="slideLeft"
              />
            </div>
          </div>

          <ImageReveal
            src="/TAW00457.JPG"
            alt="Ảnh cưới lớn 2"
            height={240}
            animationType="fadeIn"
          />

          <div className="mb-1.5 flex gap-1.5">
            <div className="w-full">
              <ImageReveal
                src="/TAW01261.JPG"
                alt="Ảnh dọc 1"
                height={288}
                animationType="slideUp"
              />
            </div>
            <div className="w-full">
              <ImageReveal
                src="/TAW01458.JPG"
                alt="Ảnh dọc 2"
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
