import { motion } from "framer-motion";
import styled from "styled-components";
import AnimatedText from "./animations/AnimatedText";

interface Props {
  heading: string;
}

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BulletWrapper = styled.div`
  display: inline;
`;

const Bullet = styled(motion.div)`
  color: ${(props) => props.theme.primary};
  display: inline-block;
  transform-origin: bottom;
`;

const Separator = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  flex-grow: 1;
`;

const animationVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <HeadingContainer>
      <HeadingWrapper>
        <h2>
          <AnimatedText text={heading}></AnimatedText>
          <BulletWrapper>
            <Bullet
              variants={animationVariants}
              initial={"hidden"}
              animate={"hidden"}
              whileInView={"visible"}
              transition={{
                delay: 0.6,
                type: "spring",
                bounce: 0.5,
                visualDuration: 0.2,
              }}
            >
              .
            </Bullet>
          </BulletWrapper>
        </h2>
      </HeadingWrapper>
      <Separator />
    </HeadingContainer>
  );
};

export default SectionHeading;
