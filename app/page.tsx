"use client";

import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import MasonryLayout from "@/components/MasonryLayout";
import TimeLine from "@/components/TimeLine";
import { Button } from "antd";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin"; // Plugin cần thiết
import Image from "next/image";
import { useEffect } from "react";

// Đăng ký plugin (chỉ cần chạy một lần)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin);
}

export default function Home() {
  const openGoogleMap1 = () => {
    window.open(
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.599167116449!2d105.83530747541789!3d21.008698780635576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad0038489635%3A0xd4326cffd4eb28b4!2sVCCI%20Tower!5e0!3m2!1svi!2s!4v1763399737310!5m2!1svi!2s",
    );
  };

  const openGoogleMap2 = () => {
    window.open(
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d479.95282885691955!2d105.39181687825334!3d21.124223082340084!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134618b262512fb%3A0x4beff3487c6ec096!2zTFBCYW5rIFThuqNuIEzEqW5o!5e0!3m2!1svi!2s!4v1763400568528!5m2!1svi!2s",
    );
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // 1. Tính toán chiều cao cuộn tối đa
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    let scrollTween: gsap.core.Tween;

    const startAutoScroll = () => {
      scrollTween = gsap.to(window, {
        duration: 65,
        scrollTo: {
          y: maxScroll,
          autoKill: false,
        },
        ease: "linear",
        delay: 1, // Bắt đầu cuộn sau 1 giây
        // onComplete: () => { /* Có thể thêm logic sau khi cuộn xong */ }
      });
    };

    // 3. Hàm để dừng hoạt ảnh cuộn
    const killScroll = () => {
      if (scrollTween) {
        // Dừng hoạt ảnh đang chạy trên đối tượng 'window'
        scrollTween.kill();
        // console.log("Auto-scroll stopped due to user interaction.");
      }
      // Quan trọng: Gỡ bỏ tất cả các event listeners sau khi đã tương tác
      removeListeners();
    };

    // 4. Định nghĩa các sự kiện tương tác của người dùng
    const interactionEvents = [
      "wheel", // Cuộn chuột
      "mousedown", // Nhấn chuột (chuột trái, phải)
      "touchstart", // Chạm vào màn hình
      "keydown", // Nhấn phím
      "pointerdown", // Tương tác của pointer (chuột, bút, ngón tay)
    ];

    // 5. Hàm thêm Event Listeners
    const addListeners = () => {
      interactionEvents.forEach((event) => {
        // Lắng nghe sự kiện trên đối tượng window, gọi killScroll khi có tương tác
        window.addEventListener(event, killScroll, {
          once: true,
          passive: true,
        });
      });
    };

    // 6. Hàm gỡ bỏ Event Listeners (để tránh rò rỉ bộ nhớ)
    const removeListeners = () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, killScroll);
      });
    };

    // Khởi động
    startAutoScroll();
    addListeners();

    // 7. Dọn dẹp (Cleanup)
    return () => {
      // Đảm bảo dừng hoạt ảnh và gỡ bỏ listeners khi component bị hủy (unmount)
      if (scrollTween) {
        scrollTween.kill();
      }
      removeListeners();
    };
  }, []);

  return (
    <div className="mx-auto max-w-3xl bg-[#f0f1ec]">
      <HomeBanner />

      <div className="mb-4 py-4 text-center">
        <div className="text-lg font-bold">Quý khách thân mến</div>
        <div className="mb-2">
          Khoảnh khắc thiêng liêng nhất cuộc đời chúng tôi
        </div>
        <div className="mx-auto h-px w-[65%] bg-black"></div>
      </div>

      <div className="mb-5 text-center font-medium">
        <div className="text-xl font-semibold">Trân trọng kính mời</div>
        <div className="mb-8">Bạn và gia đình tới dự lễ thành hôn của</div>
        <div className="text-[26px] font-semibold">Minh Hoàng & Mai Phương</div>
      </div>

      <div className="relative mb-9 h-[535px] text-white before:absolute before:inset-0 before:z-1 before:bg-black/50">
        <Image
          src="/banner1.jpg"
          alt="banner"
          className="object-cover"
          fill={true}
        />

        <div className="absolute inset-0 z-2 py-8 text-center">
          <div className="text-lg font-semibold">Địa điểm</div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            <div className="font-semibold">
              Trung tâm tiệc cưới & Hội Nghị Seasons
            </div>
            <div className="">Tầng 2, Tháp VCCI Tower</div>
            <div className="">9 Đào Duy Anh - Đống Đa - Hà Nội</div>
          </div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <div className="flex flex-col gap-1.5">
            <div className="font-semibold">Chủ Nhật - 11h30</div>
            <div>Ngày 21 Tháng 12 Năm 2025</div>
          </div>
          <div className="mx-auto my-4 h-14 w-0.5 bg-white"></div>

          <Button color="default" variant="solid" onClick={openGoogleMap1}>
            Xem địa chỉ
          </Button>
        </div>
      </div>

      <div className="mt-8 mb-10">
        <Countdown />
      </div>

      <div className="mb-10">
        <TimeLine />
      </div>

      <MasonryLayout />

      {/* <div className="mt-20 md:flex-row flex gap-12 justify-center mb-10">
        <div>
          <div className="text-center text-lg mb-1">Nhà trai</div>
          <Button type="primary" onClick={openGoogleMap1}>
            Xem bản đồ
          </Button>
        </div>

        <div>
          <div className="text-center  text-lg mb-1">Nhà gái</div>
          <Button type="primary" onClick={openGoogleMap2}>
            Xem bản đồ
          </Button>
        </div>
      </div> */}

      <div className="fixed bottom-4 left-3 z-20 flex h-9 w-9 animate-spin items-center justify-center overflow-hidden rounded-full bg-[#727e5f]">
        <Image
          src="/music-note-sparkle.png"
          alt="banner"
          width={24}
          height={24}
        />
      </div>

      <Footer />
    </div>
  );
}
// text-[#800020]
// text-[#5A0F1B]
