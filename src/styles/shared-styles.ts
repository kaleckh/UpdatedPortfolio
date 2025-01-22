import styled, { css } from "styled-components";

export const container = css`
  max-width: 85rem;
  margin: 0 auto;
  padding: 0 2.4rem;

  @media screen and (min-width: 1150px) {
    max-width: 100rem;
  }
`;

const baseBtn = css`
  outline: 0;
  border-radius: 5px;
  padding: 1.3rem 2.5rem;
  display: flex;
  font-size: 1.6rem;
  gap: 0.5rem;
  align-items: center;
  transition: 0.15s ease-in;

  &:hover {
    border-radius: 40px;
  }
`;

export const primaryBtn = css`
  ${baseBtn}
  border: 0;
  color: #000;
  background-color: ${(props) => props.theme.primary};
`;

export const outlineBtn = css`
  ${baseBtn}
  border: 1px solid ${(props) => props.theme.primary};
  color: ${(props) => props.theme.primary};
  background: 0;
`;

export const PrimaryBtn = styled.button`
  ${primaryBtn}
`;

export const OutlineBtn = styled.button`
  ${outlineBtn}
`;
