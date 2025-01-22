import styled from "styled-components";
import { Project } from "../../data/projectData";
import { OutlineBtn } from "../../styles/shared-styles";
import { DiGithubBadge } from "react-icons/di";
import { GoLinkExternal } from "react-icons/go";
import { techSkills } from "../../data/techSkills";

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  padding: 0 2.4rem;
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 60rem;
  width: 100%;
  border-radius: 8px;
  background-color: #1e1e21;
  overflow: hidden;
`;

const CardDetailWrapper = styled.div`
  padding: 1rem 2rem;
`;

const CardImage = styled.img`
  width: 50rem;
  width: 100%;
`;

const CardTitle = styled.h2`
  font-size: 2.5rem;
`;

const TechWrapper = styled.div`
  display: flex;
  /* gap: 1rem; */
  margin: 0.5rem 0 1rem;
`;

const TechSkill = styled.p`
  color: ${(props) => props.theme.primary};
`;

const Bullet = styled.span`
  color: ${(props) => props.theme.primary};
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin: 1rem 0 0.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
  align-items: center;
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  transition: 0.15s;

  &:hover {
    text-decoration: underline;
  }
`;

interface Props extends Project {
  onCloseModal: VoidFunction;
}

const ProjectCardModal = ({ ...props }: Props) => {
  return (
    <ModalOverlay onClick={props.onCloseModal}>
      <Card onClick={(e) => e.stopPropagation()}>
        <CardImage src={props.image} />
        <CardDetailWrapper>
          <CardTitle>
            {props.title}
            <Bullet>.</Bullet>
          </CardTitle>
          <TechWrapper>
            <TechSkill>{props.techUsed.join(" | ")}</TechSkill>
          </TechWrapper>
          <p>{props.description}</p>
          <LinkWrapper>
            <Link target="_blank" href={props.githubPath}>
              <DiGithubBadge size={20} />
              Source Code
            </Link>
            <Link target="_blank" href={props.liveSitePath}>
              <GoLinkExternal />
              Live Site
            </Link>
          </LinkWrapper>
        </CardDetailWrapper>
      </Card>
    </ModalOverlay>
  );
};

export default ProjectCardModal;
