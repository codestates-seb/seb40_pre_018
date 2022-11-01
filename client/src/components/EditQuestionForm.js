import { useState } from 'react';
import styled from 'styled-components';
import { CommonButton } from './Buttons';
import { Input, Textarea } from './InputStyles';

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
`;

const EditQuestionForm = ({ question, handleEdit }) => {
  const { title, content } = question;
  const [editTitle, editTitleSet] = useState(title);
  const [editBody, editBodySet] = useState(content);
  return (
    <EditFormContainer>
      <div className="edit-title-form">
        <label htmlFor="edit-title">Title</label>
        <Input
          id="edit-title"
          type="text"
          value={editTitle}
          onChange={(event) => editTitleSet(event.target.value)}
        />
      </div>
      <div className="edit-body-form">
        <label htmlFor="edit-body">Body</label>
        <Textarea
          id="edit-body"
          type="text"
          value={editBody}
          onChange={(event) => editBodySet(event.target.value)}
        />
      </div>
      <div className="body-preview">{editBody}</div>
      <div className="edit-buttons">
        <CommonButton
          bgColor="var(--blue-500)"
          color="#fff"
          border="transparent"
          onClick={() => handleEdit(editTitle, editBody)}
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
