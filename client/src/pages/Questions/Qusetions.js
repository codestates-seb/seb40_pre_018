/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import PostSummary from './PostSummary';

const QusetionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--black-100);
  }

  .question-title {
    font-size: 17px;
    font-weight: 700;
    color: var(--blue-600);
    margin-bottom: 0.4rem;
  }
  .question-content {
    color: var(--black-700);
    font-size: 14px;
  }
`;

const Qusetions = ({ questions }) => {
  return (
    <div>
      <QusetionContainer>
        <>
          <div className="container">
            <PostSummary viewNum={questions.views} />
            <div className="questions">
              <div className="question-title"> {questions.title} </div>
              <div className="question-content"> {questions.content} </div>
            </div>
          </div>
        </>
      </QusetionContainer>
    </div>
  );
};

export default Qusetions;
