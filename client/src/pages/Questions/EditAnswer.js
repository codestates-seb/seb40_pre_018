import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import { fetchPatch } from '../../utils/api';
import TextEditor from '../../components/TextEditor';
import { ContentViewer } from '../../components/ContentViewer';
import { CommonButton } from '../../components/Buttons';

const EditAnswerPage = styled.section`
  padding: 24px;
  width: calc(100% - 300px - 164px);
  border-left: 1px solid var(--black-075);

  .edit-answer-container {
    .edit-answer-description {
      width: 100%;
      padding: 20px;
      background: var(--yellow-050);
      border: 1px solid var(--yellow-200);
      border-radius: 3px;
      font-size: 15px;
    }
  }

  .question-info {
    width: 100%;
    overflow-wrap: break-word;
  }

  .question-title,
  .answer-header {
    margin: 16px 0;
    color: var(--blue-700);
    font-size: 19px;
    font-weight: 400;
  }

  .answer-header {
    color: var(--black-800);
  }

  .question-content {
    width: 100%;
    height: 50px;
    border-bottom: 11px solid var(--black-050);
    border-radius: 3px;
    overflow: auto;
    resize: vertical;
  }

  .edit-buttons {
    display: flex;
    margin: 20px 0;
  }

  #save-button {
    margin-left: 0;
  }
`;

const EditAnswer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { answer, questionContent, questionTitle, questionId } = location.state;
  const [editContent, setEditContent] = useState(answer);

  const handleEdit = (content) => {
    fetchPatch(`http://15.165.244.155:8080/answers/${id}`, { content });
    navigate(`/questions/${questionId}`);
  };

  return (
    <EditAnswerPage>
      <div className="edit-answer-container">
        <div className="edit-answer-description">
          Your edit will be placed in a queue until it is peer reviewd.
          <br />
          <br />
          We welcome edits that make the post easier to understand and more
          valueable for readers. Because community members revies edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resoureces and
          hyperlinks.
        </div>
        <div className="question-info">
          <h2 className="question-title">{questionTitle}</h2>
          <div className="question-content">
            <ContentViewer content={questionContent} />
          </div>
        </div>
        <h2 className="answer-header">Answer</h2>
        <TextEditor
          initialValue={editContent}
          onChangeHandler={setEditContent}
        />
        <ContentViewer content={editContent} />
        <div className="edit-buttons">
          <CommonButton
            id="save-button"
            bgColor="var(--blue-500)"
            color="#fff"
            border="transparent"
            onClick={() => handleEdit(editContent)}
          >
            Save edits
          </CommonButton>
          <CommonButton
            bgColor="#fff"
            border="transparent"
            onClick={() => navigate(-1)}
          >
            Cancel
          </CommonButton>
        </div>
      </div>
    </EditAnswerPage>
  );
};

export default EditAnswer;
