import { motion } from "framer-motion";

interface Props {
  text: string;
  animate?: string;
}

const AnimatedText = ({ text, animate = "hidden" }: Props) => {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      filter: "blur(200px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.span
      initial="hidden"
      animate={animate}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.09 }}
    >
      {text.split("").map((char, index) => (
        <motion.span variants={defaultAnimations} key={index}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
