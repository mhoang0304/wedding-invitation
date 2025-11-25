import Image from "next/image";

const MasonryLayout = () => {
  const images = [
    {
      id: 1,
      src: "/image1.jpg",
      height: 400,
    },
    {
      id: 2,
      src: "/image2.jpg",
      height: 400,
    },
    {
      id: 3,
      src: "/image3.jpg",
      height: 400,
    },
    {
      id: 4,
      src: "/image4.jpg",
      height: 300,
    },
    {
      id: 5,
      src: "/image5.jpg",
      height: 350,
    },
    {
      id: 6,
      src: "/image6.jpg",
      height: 450,
    },
    {
      id: 7,
      src: "/image7.jpg",
      height: 360,
    },
    {
      id: 8,
      src: "/image8.jpg",
      height: 300,
    },
  ];

  return (
    <div className="columns-2 space-y-4">
      {images.map((image) => (
        <div key={image.id} className="break-inside-avoid">
          <img
            src={image.src}
            alt="image"
            className={`w-full object-cover h-[${image.height}px]`}
          />
        </div>
      ))}
    </div>
  );
};

export default MasonryLayout;
