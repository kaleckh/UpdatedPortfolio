import { IoCodeSharp } from "react-icons/io5";
import styled from "styled-components";
import { techSkills } from "../../data/techSkills";
import TechBadge from "./TechBadge";

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: self-start;
  gap: 0.8rem;
`;

const SkillHeading = styled.h3`
  color: #fff;
  font-size: 2.2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const CodeIcon = styled(IoCodeSharp)`
  background-color: ${(props) => props.theme.primary};
  padding: 0.6rem;
  box-sizing: content-box;
  fill: #000;
  font-size: 2rem;
  border-radius: 50%;
`;

const TechSkills = () => {
  return (
    <SkillContainer>
      <SkillHeading>
        <CodeIcon />
        Tech I Work With
      </SkillHeading>
      {techSkills.map((skill, index) => (
        <TechBadge key={index} label={skill} />
      ))}
    </SkillContainer>
  );
};

export default TechSkills;
