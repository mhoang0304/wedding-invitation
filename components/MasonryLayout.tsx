import Image from "next/image";

const MasonryLayout = () => {
  const leftImage = [
    {
      id: 1,
      src: "/image1.jpg",
      height: 365,
    },
    {
      id: 2,
      src: "/image2.jpg",
      height: 350,
    },
    {
      id: 3,
      src: "/image3.jpg",
      height: 350,
    },
    {
      id: 4,
      src: "/image4.jpg",
      height: 360,
    },
  ];

  const rightImage = [
    {
      id: 5,
      src: "/image5.jpg",
      height: 260,
    },
    {
      id: 6,
      src: "/image6.jpg",
      height: 280,
    },
    {
      id: 7,
      src: "/image7.jpg",
      height: 300,
    },
    {
      id: 8,
      src: "/image8.jpg",
      height: 280,
    },
    {
      id: 9,
      src: "/image2.jpg",
      height: 300,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-7 gap-1.5">
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
      </div>

      <div></div>
    </div>
  );
};

export default MasonryLayout;
