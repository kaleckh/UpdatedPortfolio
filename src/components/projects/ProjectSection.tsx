import { useState } from "react";
import styled from "styled-components";
import { projectData } from "../../data/projectData";
import { container } from "../../styles/shared-styles";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import { LuChevronsDown } from "react-icons/lu";

const ProjectContainer = styled.section`
  ${container}
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ToggleProjectButton = styled.button`
  margin: 5rem auto;
  font-size: 1.8rem;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  letter-spacing: 0.4rem;
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

// const truncatedProjectData = projectData.

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
      <Wrapper>
        {truncatedProjectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Wrapper>
      <ToggleProjectButton onClick={handleShowAllProjects}>
        {isExpanded ? "Show Less" : "Show More"}
        <ExpandIcon className={isExpanded ? "rotate" : ""} />
      </ToggleProjectButton>
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </ProjectContainer>
  );
};

export default ProjectSection;
