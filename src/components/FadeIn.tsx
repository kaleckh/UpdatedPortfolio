import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay: number;
}

const FadeIn = ({ children, delay }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
