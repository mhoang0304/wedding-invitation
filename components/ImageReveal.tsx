import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

type AnimationType = "slideUp" | "slideLeft" | "slideRight" | "fadeIn";

interface ImageRevealProps {
  src: string;
  alt: string;
  height: number;
  className?: string;
  animationType?: AnimationType;
}

const getVariants = (type: AnimationType): Variants => {
  let initial = {};

  switch (type) {
    case "slideLeft":
      initial = { x: -100, opacity: 0 };
      break;
    case "slideRight":
      initial = { x: 100, opacity: 0 };
      break;
    case "fadeIn":
      initial = { opacity: 0, scale: 0.9 };
      break;
    case "slideUp":
    default:
      initial = { y: 100, opacity: 0 };
      break;
  }

  return {
    hidden: initial,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
};

const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  height,
  className,
  animationType = "slideUp",
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const variants = getVariants(animationType);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`relative mb-1.5 ${className}`}
      style={{ height: height }}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </motion.div>
  );
};

export default ImageReveal;
