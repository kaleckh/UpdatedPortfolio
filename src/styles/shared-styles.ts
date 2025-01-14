import styled, { css } from "styled-components";

const baseBtn = css`
  outline: 0;
  border-radius: 5px;
  padding: 1rem 2.5rem;
  font-weight: 600;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const primaryBtn = css`
  ${baseBtn}
  border: 0;
  color: #000;
  background-color: ${(props) => props.theme.primary};
`;

const outlineBtn = css`
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