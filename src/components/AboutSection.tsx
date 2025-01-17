import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";
import FadeUp from "./animations/FadeUp";

const AboutContainer = styled.section`
  max-width: 85rem;
  margin: 0 auto;
  padding: 0 2.4rem;
`;

const IntroHighlight = styled.span`
  font-size: 2rem;
  letter-spacing: 0.2rem;
  color: ${(props) => props.theme.primary};
`;

const SocialWrapper = styled.div`
  margin-top: 2rem;
`;

const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <SectionHeading heading="About" />
        <FadeUp>
          <p>
            <IntroHighlight>Here is my story. </IntroHighlight>My journey into
            coding started with curiosity and grew into a love for solving
            problems and creating impactful solutions. Whether designing
            responsive frontends or building scalable backends, I thrive on
            turning ideas into reality.
          </p>
        </FadeUp>
        <br />
        <FadeUp>
          <p>
            By day, I’m focused on delivering impactful code and collaborating
            with talented teams. By night, I love diving into personal projects
            or experimenting with new tools and frameworks to stay ahead of the
            curve.
          </p>
        </FadeUp>
        <br />
        <FadeUp>
          <p>
            When I’m not coding, you’ll find me gaming away or looking for my
            next read. I’m always open to new opportunities, exciting
            challenges, or simply connecting with like-minded developers. Let’s
            build something amazing together!
          </p>
        </FadeUp>
        <FadeUp>
          <SocialWrapper>
            <SocialLinks />
          </SocialWrapper>
        </FadeUp>
      </AboutContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default AboutSection;
