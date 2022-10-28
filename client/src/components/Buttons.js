import styled from 'styled-components';

export const LoginBtn = styled.button`
  display: blcok;
  box-sizing: boreder-box;
  align-items: center;
  background-color: var(--powder-100);
  margin: 4px;
  width: 60px;
  height: 33px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 70%);
  border-width: 1px;
  border-radius: 3px;
  border-color: var(--blue-600);
  color: var(--powder-700);
`;

export const SignupBtn = styled.button`
  display: blcok;
  box-sizing: boreder-box;
  align-items: center;
  background-color: var(--blue-500);
  margin: 4px;
  width: 60px;
  height: 33px;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  border-width: 1px;
  border-radius: 3px;
  border-color: var(--blue-600);
  color: white;
`;

export const AskBtn = styled.button`
  display: blcok;
  box-sizing: boreder-box;
  align-items: center;
  background-color: var(--blue-500);
  margin: 4px;
  padding: 0.5rem;
  box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
  width: auto;
  height: 36px;
  border-width: 0;
  border-radius: 3px;
  color: white;
  &:hover {
    background-color: var(--blue-400);
  }
`;

export const SortBtn = styled.button`
  display: blcok;
  box-sizing: boreder-box;
  align-items: center;
  background-color: transparent;
  margin: 4px;
  padding: 0.5rem;
  width: auto;
  height: 35px;
  border: 1px solid rgb(159, 166, 173);
  border-radius: 3px;
  font-size: 12px;
  font-weight: 500;
  color: var(--black-500);
  &:hover {
    background-color: #f0efef;
  }
`;
