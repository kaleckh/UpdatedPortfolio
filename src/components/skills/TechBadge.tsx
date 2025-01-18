import styled from "styled-components";

const Badge = styled.span`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
  border-radius: 5px;
  color: #fff;
  font-size: 1.4rem;
  background-color: #1d1d22;
`;

const TechBadge = ({ label }: { label: string }) => {
  return <Badge>{label}</Badge>;
};

export default TechBadge;
