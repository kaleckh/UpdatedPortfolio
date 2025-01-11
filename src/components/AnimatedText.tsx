import { motion } from "framer-motion";

const AnimatedText = ({ text }: { text: string }) => {
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
      animate="hidden"
      whileInView="visible"
      viewport={{ once: true }}
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
