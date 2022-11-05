import styled, { css } from 'styled-components';

const commonInput = css`
  width: 100%;
  margin-top: 5px;
  padding: 8px 9px;
  background-color: #fff;
  color: hsl(210, 8%, 5%);
  font-size: 13px;
  border: 1px solid ${(props) => props.border || 'var(--black-200)'};
  border-radius: 3px;
  outline: none;

  &:focus {
    box-shadow: 0px 0px 0px 4px
      ${(props) => props.shadow || 'var(--powder-100)'};
    border-color: ${(props) => props.focusBorder || 'var(--blue-600)'};
  }
`;

export const Input = styled.input`
  ${commonInput}
`;

export const Textarea = styled.textarea`
  height: ${(props) => props.height || '300px'};
  resize: vertical;
  ${commonInput}
`;
