import { LOCATION } from "@/helpers/constant";
import { Modal } from "antd";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

type ModalQrProps = {
  isOpen: boolean;
  closeModalQr: () => void;
};

const ModalQr: React.FC<ModalQrProps> = ({ isOpen, closeModalQr }) => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  return (
    <Modal open={isOpen} footer={null} onCancel={closeModalQr}>
      <div>
        <div className="mb-4 text-center text-lg font-semibold">
          Mừng cưới dến {location === LOCATION.BA_VI ? "cô dâu" : "chú rể"}
        </div>

        <div className="relative h-[420px] w-full">
          <Image
            src={location === LOCATION.BA_VI ? "" : "/qr-1.jpeg"}
            alt="qr"
            className="object-cover"
            fill={true}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ModalQr;
