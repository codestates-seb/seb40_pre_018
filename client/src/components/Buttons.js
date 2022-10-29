import styled from 'styled-components';

export const CommonButton = styled.button`
  background-color: ${(props) => props.bgColor || 'var(--powder-100)'};
  margin: 4px;
  padding: 10px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border-radius: 3px;
  color: ${(props) => props.color || 'var(--powder-700)'};
  font-size: 13px;
  border: 1px solid ${(props) => props.border || 'var(--blue-600)'};
`;

export const SocialButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || '#fff'};
  padding: 10px;
  margin: 4px 0;
  border: 1px solid ${(props) => props.border || 'var(--black-100)'};
  border-radius: 5px;
  font-size: 13px;
  color: ${(props) => props.color || 'var(--black-700)'};
  outline: none;

  > svg {
    margin-right: 5px;
  }
`;
