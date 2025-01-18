import styled, { css } from "styled-components";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

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

const LinkedInIcon = styled(FaLinkedinIn)`
  ${socialIcons}
`;
const GithubIcon = styled(TbBrandGithubFilled)`
  ${socialIcons}
`;
const XIcon = styled(FaXTwitter)`
  ${socialIcons}
`;
const EmailIcon = styled(TbMailFilled)`
  ${socialIcons}
`;

const SocialLinks = () => {
  return (
    <SocialContainer>
      <LinkedInIcon />
      <GithubIcon />
      <XIcon />
      <EmailIcon />
    </SocialContainer>
  );
};

export default SocialLinks;
