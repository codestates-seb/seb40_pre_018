import styled from 'styled-components';
import EditQuestionForm from '../../components/EditQuestionForm';

const EditQuestionPage = styled.section`
  padding: 24px;
  width: calc(100% - 300px - 164px);
  .edit-question-container {
    .edit-question-description {
      width: 100%;
      padding: 20px;
      background: var(--yellow-050);
      border: 1px solid var(--yellow-200);
      border-radius: 3px;
      font-size: 15px;
    }
  }
`;

const EditQuestion = () => {
  return (
    <EditQuestionPage>
      <div className="edit-question-container">
        <div className="edit-question-description">
          Your edit will be placed in a queue until it is peer reviewd.
          <br />
          <br />
          We welcome edits that make the post easier to understand and more
          valueable for readers. Because community members revies edits, please
          try to make the post substantially better than how you found it, for
          example, by fixing grammar or adding additional resoureces and
          hyperlinks.
        </div>
      </div>
      <EditQuestionForm />
    </EditQuestionPage>
  );
};

export default EditQuestion;
