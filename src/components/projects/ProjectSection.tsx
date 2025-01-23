import { useState } from "react";
import { LuChevronsDown } from "react-icons/lu";
import styled from "styled-components";
import { projectData } from "../../data/projectData";
import { container } from "../../styles/shared-styles";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";

const ProjectContainer = styled.section`
  ${container}
  margin-top: 5rem;
`;

const ProjectWrapper = styled.div`
  display: grid;
  gap: 4rem 2rem;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ToggleProjectButton = styled.button`
  margin: 5rem auto;
  font-size: 1.8rem;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  letter-spacing: 0.1rem;
  gap: 0.7rem;
  background: 0;
  color: ${(props) => props.theme.primary};

  &:hover {
    text-decoration: underline;
  }
`;

const ExpandIcon = styled(LuChevronsDown)`
  font-size: 1.8rem;

  &.rotate {
    transform: rotate(180deg);
  }
`;

const ProjectSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedProjectData = isExpanded
    ? projectData
    : projectData.slice(0, 4);

  const handleShowAllProjects = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <ProjectContainer>
      <SectionHeading heading="Projects" headingOrder={1} />
      <ProjectWrapper>
        {truncatedProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectWrapper>
      <ToggleProjectButton onClick={handleShowAllProjects}>
        {isExpanded ? "Show Less" : "Show More"}
        <ExpandIcon className={isExpanded ? "rotate" : ""} />
      </ToggleProjectButton>
    </ProjectContainer>
  );
};

export default ProjectSection;
