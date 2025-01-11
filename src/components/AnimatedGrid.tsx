import { motion } from "framer-motion";
import styled from "styled-components";

const GridWrapper = styled.div`
  position: absolute;
  right: 10rem;
`;

const AnimatedGrid = () => {
  const lineAnimation = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 2, ease: "easeInOut" } },
  };

  return (
    <GridWrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 400"
        width="400"
        height="400"
      >
        <defs>
          <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0.7" stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="fadeMask">
            <rect
              width="100%"
              height="100%"
              rx="40"
              ry="40"
              fill="url(#fade)"
            />
          </mask>
        </defs>

        <g mask="url(#fadeMask)">
          {/* Vertical lines */}
          {["50", "100", "150", "200", "250", "300", "350"].map((x, i) => (
            <motion.line
              key={`vertical-${i}`}
              x1={x}
              y1="0"
              x2={x}
              y2="400"
              stroke="rgba(255, 255, 255, .4)"
              strokeWidth="0.5"
              variants={lineAnimation}
              initial="hidden"
              animate="visible"
            />
          ))}

          {/* Horizontal lines */}
          {["50", "100", "150", "200", "250", "300", "350"].map((y, i) => (
            <motion.line
              key={`horizontal-${i}`}
              x1="0"
              y1={y}
              x2="400"
              y2={y}
              stroke="rgba(255, 255, 255, .4)"
              strokeWidth="0.5"
              variants={lineAnimation}
              initial="hidden"
              animate="visible"
            />
          ))}
        </g>
      </svg>
    </GridWrapper>
  );
};

export default AnimatedGrid;
