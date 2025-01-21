import styled, { css } from "styled-components";
import projectImg from "../../images/designo.png";
import { DiGithubBadge } from "react-icons/di";
import { GoLinkExternal } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import { Project } from "../../data/projectData";
import { useState } from "react";
import ProjectCardModal from "./ProjectCardModal";

const Card = styled.article`
  display: flex;
  flex-direction: column;
  max-width: 45rem;
`;

const CardImageWrapper = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #232327;
  padding: 4rem 3rem 0;
`;

const CardDetails = styled.div`
  padding: 0 1.5rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const CardHeading = styled.h3`
  color: #fff;
  font-size: 2rem;
`;

const Separator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const CardImage = styled.img`
  width: 100%;
  display: block;
`;

const TechWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const TechLabels = styled.p`
  color: ${(props) => props.theme.primary};
  font-size: 1.5rem;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    fill: ${(props) => props.theme.primary};
  }
`;

const LearnMoreButton = styled.button`
  border: 0;
  outline: 0;
  background: 0;
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 1rem;
  color: ${(props) => props.theme.primary};
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  transition: 0.15s ease-in;

  &:hover {
    gap: 0.5rem;
    text-decoration: underline;
  }
`;

const ProjectCard = ({ ...project }: Project) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <>
      {isModalOpen && (
        <ProjectCardModal {...project} onCloseModal={handleCloseModal} />
      )}
      <Card>
        <CardImageWrapper>
          <CardImage src={project.image} />
        </CardImageWrapper>
        <CardDetails>
          <HeadingWrapper>
            <CardHeading>{project.title}</CardHeading>
            <Separator />
            <IconWrapper>
              <DiGithubBadge color="#eee" size={32} />
            </IconWrapper>
            <IconWrapper>
              <GoLinkExternal color="#eee" size={24} />
            </IconWrapper>
          </HeadingWrapper>
          <TechWrapper>
            {project.techUsed.map((tech, index) => (
              <TechLabels key={index}>{tech}</TechLabels>
            ))}
          </TechWrapper>
          <p>
            {`${project.description.substring(0, 115)}...`}
            <LearnMoreButton onClick={handleOpenModal}>
              Learn More <BsArrowRight />
            </LearnMoreButton>
          </p>
        </CardDetails>
      </Card>
    </>
  );
};

export default ProjectCard;