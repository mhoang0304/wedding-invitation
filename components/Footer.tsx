import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <div className="relative flex items-center h-[75vh]">
      <Image
        src="/footer.jpg"
        alt="banner"
        className="object-cover"
        fill={true}
      />

      <div className="absolute w-full bg-black/35 font-semibold text-white py-2">
        <div className="text-center text-xl mb-1">Thank you!</div>
        <div className="text-center text-lg">Rất hân hạnh được đón tiếp</div>
      </div>
    </div>
  );
};

export default Footer;
