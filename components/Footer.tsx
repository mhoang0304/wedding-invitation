import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full [490px] mt-4 before:absolute before:bg-black/10  before:inset-0 before:z-1">
      <div className="h-[490px]">
        <Image
          src="/TAW00718.JPG"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="absolute w-full bg-black/45 font-semibold text-white py-2 bottom-60 z-2">
        <div className="text-center text-xl mb-1">Thank you!</div>
        <div className="text-center text-lg">Rất hân hạnh được đón tiếp</div>
      </div>
    </div>
  );
};

export default Footer;
