import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative h-[80vh] before:absolute before:bg-black/35 text-white before:inset-0 before:z-1">
      <Image
        src="/banner.jpg"
        alt="banner"
        className="object-cover"
        fill={true}
      />

      <div className="absolute z-2 inset-0 flex flex-col items-center justify-end pb-12">
        <div className="font-bold text-4xl mb-12">Nhà có hỷ</div>

        <div className="text-sm mb-3 text-white font-semibold">
          Ngày 21 Tháng 12 Năm 2025
        </div>

        <div className="flex justify-evenly font-semibold w-full text-2xl">
          <div>Minh Hoàng</div>
          <div>&</div>
          <div>Mai Phương</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
