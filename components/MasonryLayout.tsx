import { leftImage, rightImage } from "@/helpers/constant";
import Image from "next/image";

const MasonryLayout = () => {
  return (
    <div>
      <div className="font-semibold text-xl px-6 mb-3">Album ảnh cưới</div>

      <div className="grid grid-cols-7 gap-x-1.5">
        <div className="col-span-4">
          {leftImage.map((image) => (
            <div
              key={image.id}
              className="relative mb-1.5"
              style={{ height: image.height }}
            >
              <Image
                src={image.src}
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
          ))}
        </div>

        <div className="col-span-3">
          {rightImage.map((image) => (
            <div
              key={image.id}
              className="relative mb-1.5"
              style={{ height: image.height }}
            >
              <Image
                src={image.src}
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
          ))}
        </div>

        <div className="col-span-7">
          <div className="relative h-60 mb-1.5">
            <Image
              src="/image10.jpg"
              alt="image"
              className="object-cover"
              fill={true}
            />
          </div>

          <div className="flex gap-1.5 mb-1.5">
            <div className="relative h-32 w-full">
              <Image
                src="/image12.jpg"
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
            <div className="relative h-32 w-full">
              <Image
                src="/image13.jpg"
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>

          <div className="relative h-60 mb-1.5">
            <Image
              src="/image11.jpg"
              alt="image"
              className="object-cover"
              fill={true}
            />
          </div>

          <div className="flex gap-1.5 mb-1.5">
            <div className="relative h-72 w-full">
              <Image
                src="/image14.jpg"
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
            <div className="relative h-72 w-full">
              <Image
                src="/image15.jpg"
                alt="image"
                className="object-cover"
                fill={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasonryLayout;
