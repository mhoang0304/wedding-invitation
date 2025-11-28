import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full">
      <div className="relative w-72 mx-auto h-96">
        <Image
          src="/chibi.jpeg"
          alt="banner"
          className="object-cover"
          fill={true}
        />
      </div>

      <div className="absolute w-full bg-black/35 font-semibold text-white py-2 bottom-0">
        <div className="text-center text-xl mb-1">Thank you!</div>
        <div className="text-center text-lg">Rất hân hạnh được đón tiếp</div>
      </div>
    </div>
  );
};

export default Footer;
