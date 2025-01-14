import styled from "styled-components";
import AnimatedGrid from "./AnimatedGrid";
import AnimatedText from "./AnimatedText";
import FadeIn from "./FadeIn";
import SocialLinks from "./SocialLinks";
import { OutlineBtn, primaryBtn, PrimaryBtn } from "../styles/shared-styles";
import { IoMdDownload } from "react-icons/io";

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

const Overline = styled.h2`
  font-size: 2.2rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
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
  color: #fff;
`;

const HeroButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ResumeBtn = styled.a`
  ${primaryBtn}
  text-decoration: none;
  font-size: 1.3rem;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <SocialLinks />
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
