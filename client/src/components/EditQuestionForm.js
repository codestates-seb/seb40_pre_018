import { useState } from 'react';
import styled from 'styled-components';
import { CommonButton } from './Buttons';

const EditFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  .edit-title-form,
  .edit-body-form,
  .edit-buttons {
    display: flex;
    margin: 20px 0;
  }

  .edit-title-form,
  .edit-body-form {
    flex-direction: column;
    font-size: 16px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 5px;
    padding: 8px 9px;
    background-color: #fff;
    color: hsl(210, 8%, 5%);
    border: 1px solid var(--black-200);
    border-radius: 3px;
    outline: none;

    &:focus {
      box-shadow: 0px 0px 0px 4px var(--powder-200);
      border-color: var(--blue-600);
    }
  }

  textarea#edit-body {
    height: 300px;
    resize: vertical;
  }
`;

const EditQuestionForm = ({ question }) => {
  const { title, content } = question;
  const [editTitle, editTitleSet] = useState(title);
  const [editBody, editBodySet] = useState(content);
  return (
    <EditFormContainer>
      <div className="edit-title-form">
        <label htmlFor="edit-title">Title</label>
        <input
          id="edit-title"
          type="text"
          value={editTitle}
          onChange={(event) => editTitleSet(event.target.value)}
        ></input>
      </div>
      <div className="edit-body-form">
        <label htmlFor="edit-body">Body</label>
        <textarea
          id="edit-body"
          type="text"
          value={editBody}
          onChange={(event) => editBodySet(event.target.value)}
        ></textarea>
      </div>
      <div className="body-preview">{editBody}</div>
      <div className="edit-buttons">
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
        >
          Save edits
        </CommonButton>
        <CommonButton bgColor="#fff" border="transparent">
          Cancel
        </CommonButton>
      </div>
    </EditFormContainer>
  );
};

export default EditQuestionForm;
