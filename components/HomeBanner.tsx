import "@/style/main.css";
import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative h-[80vh] text-white before:absolute before:inset-0 before:z-1 before:bg-black/15">
      <Image
        src="/TAW00351.JPG"
        alt="banner"
        className="object-cover"
        fill={true}
      />

      <div className="font-dancing gold-text absolute inset-0 top-12 flex justify-center text-5xl font-bold text-white text-shadow-lg">
        Nhà có hỷ
      </div>

      <div className="absolute inset-0 z-2 flex flex-col items-center justify-end pb-3">
        {/* <div className="mb-3 text-sm font-semibold text-white">
          Ngày 21 Tháng 12 Năm 2025
        </div> */}

        <div className="font-dancing flex w-full justify-center text-3xl font-semibold">
          <div>Minh Hoàng</div>
          <div className="mx-4">&</div>
          <div>Mai Phương</div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
