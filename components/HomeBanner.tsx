import "@/style/main.css";
import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="relative h-[80vh] text-white">
      <Image
        src="/TAW00351.JPG"
        alt="banner"
        className="object-cover"
        fill={true}
      />

      <div className="font-dancing gold-text absolute inset-0 top-12 flex justify-center text-5xl font-bold text-white text-shadow-lg">
        Nhà có hỷ
      </div>
    </div>
  );
};

export default HomeBanner;
