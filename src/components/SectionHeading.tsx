import styled from "styled-components";

interface Props {
  heading: string;
}

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Bullet = styled.span`
  color: ${(props) => props.theme.primary};
`;

const Separator = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  flex-grow: 1;
`;

const SectionHeading = ({ heading }: Props) => {
  return (
    <HeadingContainer>
      <HeadingWrapper>
        <h2>
          {heading}
          <Bullet>.</Bullet>
        </h2>
      </HeadingWrapper>
      <Separator />
    </HeadingContainer>
  );
};

export default SectionHeading;
