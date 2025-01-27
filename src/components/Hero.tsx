import { IoMdDownload } from "react-icons/io";
import styled from "styled-components";
import { outlineBtn, primaryBtn } from "../styles/shared-styles";
import AnimatedGrid from "./animations/AnimatedGrid";
import AnimatedText from "./animations/AnimatedText";
import FadeIn from "./animations/FadeIn";
import SocialLinks from "./SocialLinks";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: 0 2.4rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const Overline = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
  font-size: 2.2rem;

  @media screen and (min-width: 786px) {
    font-size: 2.5rem;
  }
`;

const HeroSummary = styled.p`
  max-width: 50rem;
  line-height: 3rem;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 80rem;
  margin: 0 auto;
`;

const Highlight = styled.span`
  font-weight: 700;
  color: ${(props) => props.theme.primary};
`;

const HeroButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ResumeBtn = styled.a`
  ${primaryBtn}
  text-decoration: none;
  font-size: 1.6rem;
`;

const SocialIconsWrapper = styled.div`
  position: absolute;
  top: 5rem;
  right: 2.4rem;
`;

const CTAButtonWrapper = styled.a`
  ${outlineBtn}
  text-decoration: none;
  display: block;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <FadeIn>
        <SocialIconsWrapper>
          <SocialLinks />
        </SocialIconsWrapper>
      </FadeIn>
      <ContentWrapper>
        <FadeIn delay={0.5}>
          {/* Your Title  */}
          <Overline>Full-Stack Developer</Overline>
        </FadeIn>
        {/* Your Name  */}
        <h1>
          <AnimatedText animate="visible" text="Kaleck Hamm" />
        </h1>
        <FadeIn delay={0.8}>
          {/* Your description - main tech skills/current focus or pursuit*/}
          {/* Wrap any tech/skills with the 'Highlight' component  */}
          <HeroSummary>
            With 2+ years of experience, I specialize in
            <Highlight> React</Highlight>, <Highlight>TypeScript</Highlight>,
            and <Highlight>Node.js</Highlight>. With a strong focus on
            Object-Oriented-Programming (OOP).
          </HeroSummary>
          <HeroButtonWrapper>
            <CTAButtonWrapper href="#projects">View my work</CTAButtonWrapper>            
            <ResumeBtn href="/Kaleck_Hamm_SoftwareEngineer_Resume.pdf" download="Kaleck_Hamm_SoftwareEngineer_Resume.pdf">
              <IoMdDownload size={20} />
              Resume
            </ResumeBtn>
          </HeroButtonWrapper>
        </FadeIn>
      </ContentWrapper>
      <AnimatedGrid />
    </HeroContainer>
  );
};

export default Hero;
