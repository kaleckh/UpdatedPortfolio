import styled, { css } from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
const XIcon = styled(FaXTwitter)`
  ${socialIcons}
`;
const EmailIcon = styled(IoMdMail)`
  ${socialIcons}
`;

const SocialLinks = () => {
  return (
    // Insert your social links
    <SocialContainer>
      <LinkWrapper target="_blank" href="https://linkedin.com">
        <LinkedInIcon />
      </LinkWrapper>
      <LinkWrapper target="_blank" href="https://github.com">
        <GithubIcon />
      </LinkWrapper>
      <LinkWrapper target="_blank" href="https://x.com">
        <XIcon />
      </LinkWrapper>
      {/* Insert your email address  */}
      <LinkWrapper target="_blank" href="mailto:johnsmith@email.com">
        <EmailIcon />
      </LinkWrapper>
    </SocialContainer>
  );
};

export default SocialLinks;
