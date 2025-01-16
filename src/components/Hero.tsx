import { IoMdDownload } from "react-icons/io";
import styled from "styled-components";
import { OutlineBtn, primaryBtn } from "../styles/shared-styles";
import AnimatedGrid from "./AnimatedGrid";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import SocialLinks from "./SocialLinks";

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2.4rem;
  min-height: 100vh;
  max-width: 120rem;
  margin: 0 auto;

  @media screen {
  }
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

const AuthorHeading = styled.h1`
  color: #fff;
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
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 5rem;
  right: 2.4rem;
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
        <AuthorHeading>
          {/* Your Name  */}
          <AnimatedText text="John Smith" />
        </AuthorHeading>
        <FadeIn delay={0.8}>
          {/* Your description - main tech skills/current focus or pursuit*/}
          <HeroSummary>
            With 3 years of experience, I specialize in
            <Highlight> React</Highlight>, <Highlight>TypeScript</Highlight>,
            and <Highlight>Node.js</Highlight>. With a strong focus on
            Object-Oriented-Programming (OOP).
          </HeroSummary>
          <HeroButtonWrapper>
            <OutlineBtn>View my work</OutlineBtn>
            {/* Optional Resume Button - For use, embed resume in 'Public folder' and change href and download attributes to your own file */}
            <ResumeBtn href="/demo_resume.pdf" download="demo_resume.pdf">
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
