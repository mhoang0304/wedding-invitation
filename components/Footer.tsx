import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="relative mt-4 w-full before:absolute before:inset-0 before:z-1 before:bg-black/10">
      <div className="h-[246px]">
        <Image
          src="/TAW00457.JPG"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="absolute bottom-12 z-2 w-full bg-black/45 py-2 font-semibold text-white">
        <div className="mb-1 text-center text-xl">Thank you!</div>
        <div className="text-center text-lg">Rất hân hạnh được đón tiếp</div>
      </div>
    </div>
  );
};

export default Footer;
