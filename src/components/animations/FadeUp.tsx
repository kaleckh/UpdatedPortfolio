import { easeIn, motion } from "framer-motion";
import { ReactNode } from "react";

const defaultAnimation = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(3px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};

const FadeUp = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      variants={defaultAnimation}
      animate={"hidden"}
      initial="hidden"
      viewport={{ once: true }}
      whileInView={"visible"}
      exit={"exit"}
      transition={{
        duration: 0.35,
        ease: easeIn,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
