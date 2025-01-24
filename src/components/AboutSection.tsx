import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import FadeUp from "./animations/FadeUp";
import TechSkills from "./skills/TechSkills";
import { container } from "../styles/shared-styles";

const AboutContainer = styled.section`
  ${container}

  @media screen and (min-width: 768px) {
    margin-top: 1rem;
  }
`;

const IntroHighlight = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.primary};
`;

const SocialWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: end;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 5rem;
  }
`;

const About = styled.div`
  order: 1;

  @media screen and (min-width: 768px) {
    max-width: 60rem;
  }
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <SectionHeading heading="About" />
      <FadeUp>
        <AboutWrapper>
          <About>
            <p>
              <IntroHighlight>Here is my story. </IntroHighlight>My journey into
              coding started with curiosity and grew into a love for solving
              problems and creating impactful solutions. Whether designing
              responsive frontends or building scalable backends, I thrive on
              turning ideas into reality.
            </p>
            <br />
            <FadeUp>
              <p>
                By day, I’m focused on delivering impactful code and
                collaborating with talented teams. By night, I love diving into
                personal projects or experimenting with new tools and frameworks
                to stay ahead of the curve.
              </p>
            </FadeUp>
            <br />
            <FadeUp>
              <p>
                When I’m not coding, you’ll find me gaming away or looking for
                my next read. I’m always open to new opportunities, exciting
                challenges, or simply connecting with like-minded developers.
                Let’s build something amazing together!
              </p>
            </FadeUp>
            <FadeUp>
              <SocialWrapper>
                <SocialLinks />
              </SocialWrapper>
            </FadeUp>
          </About>
          <TechSkills />
        </AboutWrapper>
      </FadeUp>
    </AboutContainer>
  );
};

export default AboutSection;
