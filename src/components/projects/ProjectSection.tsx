import styled from "styled-components";
import { container } from "../../styles/shared-styles";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";

const ProjectContainer = styled.section`
  ${container}
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
`;

const ProjectSection = () => {
  return (
    <ProjectContainer>
      <SectionHeading heading="Projects" headingOrder={1} />
      <Wrapper>
        {projectData.map((project) => (
          <ProjectCard {...project} />
        ))}
      </Wrapper>
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
