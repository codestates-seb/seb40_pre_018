import styled from 'styled-components';

const EditorInput = styled.input`
  width: 100%;
  height: 250px;
  margin-bottom: 8px;
  padding: 8px 9px;
  background-color: #fff;
  color: hsl(210, 8%, 5%);
  border: 1px solid var(--black-200);
  border-radius: 3px;
`;

export const Editor = ({ value, onChangeHandler }) => {
  return (
    <EditorInput
      id="qc-body"
      type="text"
      value={value}
      onChange={(event) => onChangeHandler(event.target.value)}
    ></EditorInput>
  );
};
