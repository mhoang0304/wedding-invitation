import { GiftOutlined } from "@ant-design/icons";
import ModalQr from "./ModalQr";
import { useState } from "react";

const GiftBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModalQr = () => {
    setIsOpen(true);
  };

  const closeModalQr = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="fixed right-3 bottom-4 z-20 flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-[#800020]"
        onClick={openModalQr}
      >
        <GiftOutlined style={{ color: "#ffffff" }} />
      </div>

      <ModalQr isOpen={isOpen} closeModalQr={closeModalQr} />
    </>
  );
};

export default GiftBox;
