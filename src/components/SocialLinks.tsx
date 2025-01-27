import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { TbBrandGithubFilled } from "react-icons/tb";
import styled, { css } from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const socialIcons = css`
  fill: #fff;
  font-size: 2.2rem;
  transition: all 0.15s;
  cursor: pointer;

  &:hover {
    filter: drop-shadow(0 0 3px #ccc);
  }
`;

const LinkWrapper = styled.a``;

const LinkedInIcon = styled(FaLinkedinIn)`
  ${socialIcons}
`;
const GithubIcon = styled(TbBrandGithubFilled)`
  ${socialIcons}
`;
// const XIcon = styled(FaXTwitter)`
//   ${socialIcons}
// `;
const EmailIcon = styled(IoMdMail)`
  ${socialIcons}
`;

const SocialLinks = () => {
  return (
    // Insert your social links
    <SocialContainer>
      <LinkWrapper target="_blank" href="https://www.linkedin.com/in/kaleck-hamm-692a54a1/">
        <LinkedInIcon />
      </LinkWrapper>
      <LinkWrapper target="_blank" href="https://github.com/kaleckh/">
        <GithubIcon />
      </LinkWrapper>      
      {/* Insert your email address  */}
      <LinkWrapper target="_blank" href="mailto:kaleckh@gmail.com">
        <EmailIcon />
      </LinkWrapper>
    </SocialContainer>
  );
};

export default SocialLinks;
