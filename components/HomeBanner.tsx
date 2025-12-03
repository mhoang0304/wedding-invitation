import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative h-[80vh] text-white before:absolute before:inset-0 before:z-1 before:bg-black/35">
      <Image
        src="/TAW01147.JPG"
        alt="banner"
        className="object-cover"
        fill={true}
      />

      <div className="absolute inset-0 z-2 flex flex-col items-center justify-end pb-12">
        <div className="mb-16 text-4xl font-bold">Nhà có hỷ</div>

        <div className="mb-3 text-sm font-semibold text-white">
          Ngày 21 Tháng 12 Năm 2025
        </div>

        <div className="font-dancing-700 flex w-full justify-evenly text-3xl">
          <div>Minh Hoàng</div>
          <div>&</div>
          <div>Mai Phương</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
