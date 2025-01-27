import styled from "styled-components";
import { container } from "../styles/shared-styles";
import SocialLinks from "./SocialLinks";
import { IoMdMail } from "react-icons/io";
import FadeUp from "./animations/FadeUp";

const ContactContainer = styled.section`
  ${container}
  margin-top: 16rem;
  text-align: center;
  padding-bottom: 20rem;
`;

const ContactHeading = styled.h2`
  font-size: 5rem;

  @media screen and (min-width: 768px) {
    font-size: 8rem;
  }
`;

const ContactBadge = styled.span`
  color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 30px;
  font-size: 1.4rem;
  padding: 0.5rem 1.5rem;
`;

const Bullet = styled.span`
  color: ${(props) => props.theme.primary};
`;

const ContactDetails = styled.p`
  max-width: 45rem;
  margin: 0 auto;
`;

const SocialLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const EmailBadge = styled.a`
  /* border: 1px solid ${(props) => props.theme.primary}; */
  color: ${(props) => props.theme.primary};
  font-size: 1.8rem;
  margin-top: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 40px;
  cursor: pointer;
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactSection = () => {
  return (
    <FadeUp>
      <ContactContainer id="contact">
        <ContactBadge>Lets Connect</ContactBadge>
        <ContactHeading>
          Contact<Bullet>.</Bullet>
        </ContactHeading>
        <ContactDetails>
          Got a question, project idea, or just want to chat about code? Feel
          free to drop me an email! Whether it’s collaboration, feedback, or
          just sharing ideas, I’d love to hear from you. Let’s connect!
        </ContactDetails>
        <SocialLinkWrapper>
          <SocialLinks />
        </SocialLinkWrapper>
        {/* Insert you email here  */}
        <EmailBadge href="mailto:youremail@email.com">
          <IoMdMail />
          kaleckh@gmail.com
        </EmailBadge>
      </ContactContainer>
    </FadeUp>
  );
};

export default ContactSection;
